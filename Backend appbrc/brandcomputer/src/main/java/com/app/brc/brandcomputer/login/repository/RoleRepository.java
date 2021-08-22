package com.app.brc.brandcomputer.login.repository;

import com.app.brc.brandcomputer.login.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByEnumRole(Role.EnumRole enumRole);
}
