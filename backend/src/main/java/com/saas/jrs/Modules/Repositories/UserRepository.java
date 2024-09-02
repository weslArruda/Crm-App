package com.saas.jrs.Modules.Repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saas.jrs.Modules.Entitys.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {

    
} 