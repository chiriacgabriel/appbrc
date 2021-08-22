package com.app.brc.brandcomputer.components.powersource.validator;


import com.app.brc.brandcomputer.components.powersource.repository.GenerateProductCodePowerSourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenerateProductCodePowerSourceValidator {

    private GenerateProductCodePowerSourceRepository generateProductCodePowerSourceRepository;

    @Autowired
    public GenerateProductCodePowerSourceValidator(GenerateProductCodePowerSourceRepository generateProductCodePowerSourceRepository) {
        this.generateProductCodePowerSourceRepository = generateProductCodePowerSourceRepository;
    }
}
