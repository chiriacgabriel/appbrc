package com.app.brc.brandcomputer.computersAssembly.repository;

import com.app.brc.brandcomputer.computersAssembly.model.ComputerAssembly;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComputerAssemblyRepository extends JpaRepository<ComputerAssembly, Integer> {

    boolean existsBySerialNumber(String serialNumber);
}
