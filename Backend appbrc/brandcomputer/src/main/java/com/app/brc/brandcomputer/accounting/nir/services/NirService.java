package com.app.brc.brandcomputer.accounting.nir.services;

import com.app.brc.brandcomputer.accounting.companyData.model.CompanyData;
import com.app.brc.brandcomputer.accounting.companyData.repository.CompanyDataRepository;
import com.app.brc.brandcomputer.accounting.nir.dto.NirDTO;
import com.app.brc.brandcomputer.accounting.nir.dto.NirProductReportDTO;
import com.app.brc.brandcomputer.accounting.nir.mapper.NirMapper;
import com.app.brc.brandcomputer.accounting.nir.model.NirFile;
import com.app.brc.brandcomputer.accounting.nir.repository.NirFileRepository;
import com.app.brc.brandcomputer.accounting.nir.repository.NirRepository;
import lombok.SneakyThrows;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.lang.reflect.Method;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class NirService {

    private NirRepository nirRepository;
    private NirMapper nirMapper;
    private CompanyDataRepository companyDataRepository;
    private NirFileRepository nirFileRepository;

    @Autowired
    public NirService(NirRepository nirRepository, NirMapper nirMapper, CompanyDataRepository companyDataRepository,
                      NirFileRepository nirFileRepository) {
        this.nirRepository = nirRepository;
        this.nirMapper = nirMapper;
        this.companyDataRepository = companyDataRepository;
        this.nirFileRepository = nirFileRepository;
    }

    public List<NirDTO> getAll() {
        return nirRepository.findAll()
                .stream()
                .map(nir -> nirMapper.map(nir))
                .collect(Collectors.toList());
    }

    public void add(NirDTO nirDTO) {

        nirDTO.setCompanyData(companyDataRepository.getCompany());

        nirMapper.setReceived(nirDTO);

        nirRepository.save(nirMapper.map(nirDTO));
    }

    public void update(int id, NirDTO nirDTO) {
        nirMapper.set(id, nirDTO);
    }

    public void delete(int id) {
        nirRepository.deleteById(id);
    }

    public List<Object> getAllUnreceived() {
        return nirMapper.getAllUnreceived();
    }

    @SneakyThrows
    public void generateNir(NirDTO nirDTO) {

        List<NirProductReportDTO> listProductCode = Stream.of(nirDTO.getCaseList(),
                                                            nirDTO.getCpuCoolerList(),
                                                            nirDTO.getFanCaseList(),
                                                            nirDTO.getMemoryRamList(),
                                                            nirDTO.getMotherboardList(),
                                                            nirDTO.getOpticalUnitList(),
                                                            nirDTO.getPowerSourceList(),
                                                            nirDTO.getProcessorList(),
                                                            nirDTO.getSoundCardList(),
                                                            nirDTO.getStorageList(),
                                                            nirDTO.getVideoCardList())
                .flatMap(Collection::stream)
                .map(obj -> nirToProductReport(obj, nirDTO.getVat()))
                .collect(Collectors.toList());

        Optional<CompanyData> companyData = companyDataRepository.findById(1);

        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(listProductCode);

        String filePath = ResourceUtils.getFile("classpath:nir.jrxml").getAbsolutePath();

        JasperReport report = JasperCompileManager.compileReport(filePath);
        JasperPrint print = JasperFillManager.fillReport(report, parameters(companyData.get(), nirDTO), dataSource);

        byte[] saveReport = JasperExportManager.exportReportToPdf(print);
        NirFile nirFile = new NirFile();
        nirFile.setFile(saveReport);
        nirFile.setNirNumber(nirDTO.getNirNumber());
        nirFileRepository.save(nirFile);

        NirFile dbNirFile = nirFileRepository.findByNirNumber(nirDTO.getNirNumber());
        nirDTO.setNirFile(dbNirFile);

        this.add(nirDTO);
        System.out.println("Save pdf to database");

    }

    private Map<String, Object> parameters(CompanyData companyData, NirDTO nirDTO) {
        Map<String, Object> parameters = new HashMap<>();

        parameters.put("name", companyData.getName());
        parameters.put("cif", companyData.getCIF());
        parameters.put("tradeRegister", companyData.getTradeRegister());
        parameters.put("socialCapital", companyData.getSocialCapital());
        parameters.put("city", companyData.getCity());
        parameters.put("streetAddress", companyData.getStreetAddress());
        parameters.put("county", companyData.getCounty());
        parameters.put("phone", companyData.getPhone());

        parameters.put("nirNumber", nirDTO.getNirNumber());
        parameters.put("date", nirDTO.getDate().toString());
        parameters.put("administration", nirDTO.getAdministration());
        parameters.put("providerName", nirDTO.getProvider().getName());
        parameters.put("providerCode", nirDTO.getProvider().getProviderCode());
        parameters.put("invoiceNumber", nirDTO.getInvoiceNumber());
        parameters.put("debitAccount", nirDTO.getDebitAccount());

        parameters.put("nameOfEmployee", nirDTO.getNameOfEmployee());

        return parameters;
    }

    @SneakyThrows
    private NirProductReportDTO nirToProductReport(Object components, Double vat) {

        Object objProductCode = components.getClass().getDeclaredMethod("getGenerateProductCode").invoke(components);

        Method productCode = objProductCode.getClass().getDeclaredMethod("getProductCode");
        Method productName = objProductCode.getClass().getDeclaredMethod("getProductName");


        Method unitOfMeasurement = components.getClass().getMethod("getUnitOfMeasurement");
        Method quantity = components.getClass().getMethod("getQuantity");
        Method priceIn = components.getClass().getMethod("getPriceIn");

        return NirProductReportDTO.builder()
                .productCode((String) productCode.invoke(objProductCode))
                .productName((String) productName.invoke(objProductCode))
                .unitOfMeasurement((String) unitOfMeasurement.invoke(components))
                .quantity((Integer) quantity.invoke(components))
                .priceIn((Double) priceIn.invoke(components))
                .vat(vat)
                .build();
    }

}
