package com.app.brc.brandcomputer.accounting.companyData.services;

import com.app.brc.brandcomputer.accounting.companyData.dto.CompanyDataDTO;
import com.app.brc.brandcomputer.accounting.companyData.mapper.CompanyDataMapper;
import com.app.brc.brandcomputer.accounting.companyData.repository.CompanyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return companyDataMapper.map(companyDataRepository.getCompany());
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
