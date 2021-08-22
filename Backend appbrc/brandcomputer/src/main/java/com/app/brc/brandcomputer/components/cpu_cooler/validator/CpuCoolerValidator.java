package com.app.brc.brandcomputer.components.cpu_cooler.validator;

import com.app.brc.brandcomputer.components.cpu_cooler.dto.CpuCoolerDTO;
import com.app.brc.brandcomputer.components.cpu_cooler.repository.CpuCoolerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CpuCoolerValidator {

    private CpuCoolerRepository cpuCoolerRepository;

    @Autowired
    public CpuCoolerValidator(CpuCoolerRepository cpuCoolerRepository) {
        this.cpuCoolerRepository = cpuCoolerRepository;
    }

    public boolean validateSerialNumber(CpuCoolerDTO cpuCoolerDTO) {
        return cpuCoolerRepository.existsBySerialNumber(cpuCoolerDTO.getSerialNumber());
    }

    public boolean validate(int id) {
        return cpuCoolerRepository.existsById(id);
    }
}
