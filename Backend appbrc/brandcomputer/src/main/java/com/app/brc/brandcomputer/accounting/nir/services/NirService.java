package com.app.brc.brandcomputer.accounting.nir.services;

import com.app.brc.brandcomputer.accounting.companyData.repository.CompanyDataRepository;
import com.app.brc.brandcomputer.accounting.nir.dto.NirDTO;
import com.app.brc.brandcomputer.accounting.nir.mapper.NirMapper;
import com.app.brc.brandcomputer.accounting.nir.repository.NirRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
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
}
