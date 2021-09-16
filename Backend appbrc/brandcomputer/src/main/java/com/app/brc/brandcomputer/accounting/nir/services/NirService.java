package com.app.brc.brandcomputer.accounting.nir.services;

import com.app.brc.brandcomputer.accounting.companyData.model.CompanyData;
import com.app.brc.brandcomputer.accounting.companyData.repository.CompanyDataRepository;
import com.app.brc.brandcomputer.accounting.nir.dto.NirDTO;
import com.app.brc.brandcomputer.accounting.nir.dto.NirProductReportDTO;
import com.app.brc.brandcomputer.accounting.nir.mapper.NirMapper;
import com.app.brc.brandcomputer.accounting.nir.repository.NirRepository;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;


import java.util.*;
import java.util.stream.Collectors;

@Service
public class NirService {

    private NirRepository nirRepository;
    private NirMapper nirMapper;
    private CompanyDataRepository companyDataRepository;

    @Autowired
    public NirService(NirRepository nirRepository, NirMapper nirMapper, CompanyDataRepository companyDataRepository) {
        this.nirRepository = nirRepository;
        this.nirMapper = nirMapper;
        this.companyDataRepository = companyDataRepository;
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

    public void generateNir(NirDTO nirDTO) {
        try{

            List<NirProductReportDTO> listProductCode = new ArrayList<>();

            nirDTO.getCaseList().forEach(aCase -> {

               NirProductReportDTO productReportDTO = NirProductReportDTO.builder()
                        .productCode(aCase.getGenerateProductCode().getProductCode())
                        .productName(aCase.getGenerateProductCode().getProductName())
                        .unitOfMeasurement(aCase.getUnitOfMeasurement())
                        .quantity(aCase.getQuantity())
                        .priceIn(aCase.getPriceIn())
                        .vat(nirDTO.getVat()).build();

                listProductCode.add(productReportDTO);
            });

            Optional<CompanyData> companyData = companyDataRepository.findById(1);

            Map<String, Object> parameters = new HashMap<>();

            parameters.put("name", companyData.get().getName());
            parameters.put("cif", companyData.get().getCIF());
            parameters.put("tradeRegister", companyData.get().getTradeRegister());
            parameters.put("socialCapital", companyData.get().getSocialCapital());
            parameters.put("city", companyData.get().getCity());
            parameters.put("streetAddress", companyData.get().getStreetAddress());
            parameters.put("county", companyData.get().getCounty());
            parameters.put("phone", companyData.get().getPhone());

            parameters.put("nirNumber", nirDTO.getNirNumber());
            parameters.put("date", nirDTO.getDate().toString());
            parameters.put("administration", nirDTO.getAdministration());
            parameters.put("providerName", nirDTO.getProvider().getName());
            parameters.put("providerCode", nirDTO.getProvider().getProviderCode());
            parameters.put("invoiceNumber", nirDTO.getInvoiceNumber());

            JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(listProductCode);

            String filePath = ResourceUtils.getFile("classpath:nir.jrxml").getAbsolutePath();
            JasperReport report = JasperCompileManager.compileReport(filePath);
            JasperPrint print = JasperFillManager.fillReport(report, parameters, dataSource);

            JasperExportManager.exportReportToPdfFile(print, "D:\\AppBrc\\Backend appbrc\\brandcomputer\\src\\main\\resources\\reportTemplates\\companyTestToJasper.pdf");

            System.out.println("Report Created");

        }catch (Exception e){
            e.printStackTrace();
        }
    }


}
