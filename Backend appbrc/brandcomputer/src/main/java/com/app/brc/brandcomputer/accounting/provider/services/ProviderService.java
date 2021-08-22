package com.app.brc.brandcomputer.accounting.provider.services;

import com.app.brc.brandcomputer.accounting.provider.dto.ProviderDTO;
import com.app.brc.brandcomputer.accounting.provider.mapper.ProviderMapper;
import com.app.brc.brandcomputer.accounting.provider.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProviderService {

    private ProviderRepository providerRepository;
    private ProviderMapper providerMapper;

    @Autowired
    public ProviderService(ProviderRepository providerRepository, ProviderMapper providerMapper) {
        this.providerRepository = providerRepository;
        this.providerMapper = providerMapper;
    }

    public List<ProviderDTO> getAllProviders() {
        return providerRepository.findAll()
                .stream()
                .map(provider -> providerMapper.map(provider))
                .collect(Collectors.toList());
    }

    public void add(ProviderDTO providerDTO) {
        providerRepository.save(providerMapper.map(providerDTO));
    }

    public void update(int id, ProviderDTO providerDTO) {
        providerMapper.set(id, providerDTO);
    }

    public void delete(int id) {
        providerRepository.deleteById(id);
    }
}
