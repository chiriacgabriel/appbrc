package com.app.brc.brandcomputer.accounting.companyData.mapper;

import com.app.brc.brandcomputer.accounting.companyData.dto.CompanyDataDTO;
import com.app.brc.brandcomputer.accounting.companyData.model.CompanyData;
import com.app.brc.brandcomputer.accounting.companyData.repository.CompanyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class CompanyDataMapper {

    private CompanyDataRepository companyDataRepository;

    @Autowired
    public CompanyDataMapper(CompanyDataRepository companyDataRepository) {
        this.companyDataRepository = companyDataRepository;
    }

    public CompanyData map(CompanyDataDTO companyDataDTO) {

        return CompanyData.builder()
                .name(companyDataDTO.getName())
                .CIF(companyDataDTO.getCIF())
                .tradeRegister(companyDataDTO.getTradeRegister())
                .socialCapital(companyDataDTO.getSocialCapital())
                .county(companyDataDTO.getCounty())
                .streetAddress(companyDataDTO.getStreetAddress())
                .city(companyDataDTO.getCity())
                .vatPayer(companyDataDTO.isVatPayer())
                .bank(companyDataDTO.getBank())
                .iban(companyDataDTO.getBank())
                .phone(companyDataDTO.getPhone())
                .fax(companyDataDTO.getFax())
                .email(companyDataDTO.getEmail())
                .webAddress(companyDataDTO.getWebAddress())
                .additionalData(companyDataDTO.getAdditionalData())
                .build();
    }

    public CompanyDataDTO map(CompanyData companyData) {
        return CompanyDataDTO.builder()
                .id(companyData.getId())
                .name(companyData.getName())
                .CIF(companyData.getCIF())
                .tradeRegister(companyData.getTradeRegister())
                .socialCapital(companyData.getSocialCapital())
                .county(companyData.getCounty())
                .streetAddress(companyData.getStreetAddress())
                .city(companyData.getCity())
                .vatPayer(companyData.isVatPayer())
                .bank(companyData.getBank())
                .iban(companyData.getIban())
                .phone(companyData.getPhone())
                .fax(companyData.getFax())
                .email(companyData.getEmail())
                .webAddress(companyData.getWebAddress())
                .additionalData(companyData.getAdditionalData())
                .build();
    }

    public void set(int id, CompanyDataDTO companyDataDTO) {
        Optional<CompanyData> optional = companyDataRepository.findById(id);

        if (!optional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Company Data not found !");
        }

        CompanyData dbCompanyData = optional.get();
        dbCompanyData.setName(companyDataDTO.getName());
        dbCompanyData.setCIF(companyDataDTO.getCIF());
        dbCompanyData.setTradeRegister(companyDataDTO.getTradeRegister());
        dbCompanyData.setSocialCapital(companyDataDTO.getSocialCapital());
        dbCompanyData.setCounty(companyDataDTO.getCounty());
        dbCompanyData.setStreetAddress(companyDataDTO.getStreetAddress());
        dbCompanyData.setCity(companyDataDTO.getCity());
        dbCompanyData.setVatPayer(companyDataDTO.isVatPayer());
        dbCompanyData.setBank(companyDataDTO.getBank());
        dbCompanyData.setIban(companyDataDTO.getIban());
        dbCompanyData.setFax(companyDataDTO.getFax());
        dbCompanyData.setEmail(companyDataDTO.getEmail());
        dbCompanyData.setWebAddress(companyDataDTO.getWebAddress());
        dbCompanyData.setAdditionalData(companyDataDTO.getAdditionalData());
        dbCompanyData.setPhone(companyDataDTO.getPhone());

        companyDataRepository.save(dbCompanyData);
    }


}
