package com.app.brc.brandcomputer.accounting.provider.mapper;

import com.app.brc.brandcomputer.accounting.provider.dto.ProviderDTO;
import com.app.brc.brandcomputer.accounting.provider.model.Provider;
import com.app.brc.brandcomputer.accounting.provider.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ProviderMapper {

    private ProviderRepository providerRepository;

    @Autowired
    public ProviderMapper(ProviderRepository providerRepository) {
        this.providerRepository = providerRepository;
    }

    public Provider map(ProviderDTO providerDTO){
        return Provider.builder()
                .name(providerDTO.getName())
                .CIF(providerDTO.getCIF())
                .tradeRegister(providerDTO.getTradeRegister())
                .providerCode(providerDTO.getProviderCode())
                .vatPayer(providerDTO.isVatPayer())
                .streetAddress(providerDTO.getStreetAddress())
                .city(providerDTO.getCity())
                .county(providerDTO.getCounty())
                .country(providerDTO.getCountry())
                .iban(providerDTO.getIban())
                .bank(providerDTO.getBank())
                .email(providerDTO.getEmail())
                .personOfContact(providerDTO.getPersonOfContact())
                .phoneNumber(providerDTO.getPhoneNumber())
                .build();
    }

    public ProviderDTO map(Provider provider){
        return ProviderDTO.builder()
                .id(provider.getId())
                .name(provider.getName())
                .CIF(provider.getCIF())
                .tradeRegister(provider.getTradeRegister())
                .providerCode(provider.getProviderCode())
                .vatPayer(provider.isVatPayer())
                .streetAddress(provider.getStreetAddress())
                .city(provider.getCity())
                .county(provider.getCounty())
                .country(provider.getCountry())
                .iban(provider.getIban())
                .email(provider.getEmail())
                .personOfContact(provider.getPersonOfContact())
                .phoneNumber(provider.getPhoneNumber())
                .build();
    }

    public void set(int id, ProviderDTO providerDTO){
        Optional<Provider> optionalProvider = providerRepository.findById(id);

        if (!optionalProvider.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Provider not found !");
        }

        Provider dbProvider = optionalProvider.get();

        dbProvider.setName(providerDTO.getName());
        dbProvider.setCIF(providerDTO.getCIF());
        dbProvider.setTradeRegister(dbProvider.getTradeRegister());
        dbProvider.setProviderCode(providerDTO.getProviderCode());
        dbProvider.setVatPayer(providerDTO.isVatPayer());
        dbProvider.setStreetAddress(providerDTO.getStreetAddress());
        dbProvider.setCity(providerDTO.getCity());
        dbProvider.setCounty(providerDTO.getCounty());
        dbProvider.setCountry(providerDTO.getCountry());
        dbProvider.setIban(providerDTO.getIban());
        dbProvider.setEmail(providerDTO.getEmail());
        dbProvider.setPersonOfContact(providerDTO.getPersonOfContact());
        dbProvider.setPhoneNumber(providerDTO.getPhoneNumber());

        providerRepository.save(dbProvider);
    }
}
