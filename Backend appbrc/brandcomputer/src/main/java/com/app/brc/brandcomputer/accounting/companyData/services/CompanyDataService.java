package com.app.brc.brandcomputer.accounting.companyData.services;

import com.app.brc.brandcomputer.accounting.companyData.dto.CompanyDataDTO;
import com.app.brc.brandcomputer.accounting.companyData.mapper.CompanyDataMapper;
import com.app.brc.brandcomputer.accounting.companyData.repository.CompanyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class CompanyDataService {

    private CompanyDataRepository companyDataRepository;
    private CompanyDataMapper companyDataMapper;

    @Autowired
    public CompanyDataService(CompanyDataRepository companyDataRepository, CompanyDataMapper companyDataMapper) {
        this.companyDataRepository = companyDataRepository;
        this.companyDataMapper = companyDataMapper;
    }

    public CompanyDataDTO findCompany() {
        if (companyDataRepository.getCompany() != null) {
            return companyDataMapper.map(companyDataRepository.getCompany());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Company Data not found");
        }
    }

    public void add(CompanyDataDTO companyDataDTO) {
        companyDataRepository.save(companyDataMapper.map(companyDataDTO));
    }

    public void update(int id, CompanyDataDTO companyDataDTO) {
        companyDataMapper.set(id, companyDataDTO);
    }

    public void delete(int id) {
        companyDataRepository.deleteById(id);
    }
}
