package com.app.brc.brandcomputer.computersAssembly.services;

import com.app.brc.brandcomputer.computersAssembly.dto.ComputerAssemblyDTO;
import com.app.brc.brandcomputer.computersAssembly.mapper.ComputerAssemblyMapper;
import com.app.brc.brandcomputer.computersAssembly.repository.ComputerAssemblyRepository;
import com.app.brc.brandcomputer.computersAssembly.validator.ComputerAssemblyValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class ComputerAssemblyService {

    private ComputerAssemblyMapper computerAssemblyMapper;
    private ComputerAssemblyRepository computerAssemblyRepository;
    private ComputerAssemblyValidator computerAssemblyValidator;

    @Autowired
    public ComputerAssemblyService(ComputerAssemblyMapper computerAssemblyMapper, ComputerAssemblyRepository computerAssemblyRepository,
                                   ComputerAssemblyValidator computerAssemblyValidator) {
        this.computerAssemblyMapper = computerAssemblyMapper;
        this.computerAssemblyRepository = computerAssemblyRepository;
        this.computerAssemblyValidator = computerAssemblyValidator;
    }

    public List<ComputerAssemblyDTO> getAllComputers() {
        return computerAssemblyRepository.findAll()
                .stream()
                .map(computer -> computerAssemblyMapper.map(computer))
                .collect(Collectors.toList());
    }

    public void addComputer(ComputerAssemblyDTO computerAssemblyDTO) {

        do {
            computerAssemblyDTO.setSerialNumber("BUILD" + new Random().nextInt(1_000_000));
        } while (computerAssemblyValidator.validateSerialNumber(computerAssemblyDTO.getSerialNumber()));

        computerAssemblyRepository.save(computerAssemblyMapper.map(computerAssemblyDTO));
    }

    public void updateComputer(int id, ComputerAssemblyDTO computerAssemblyDTO) {
        computerAssemblyMapper.set(computerAssemblyDTO, id);
    }

    public void deleteComputer(int id) {
        computerAssemblyRepository.deleteById(id);
    }
}
