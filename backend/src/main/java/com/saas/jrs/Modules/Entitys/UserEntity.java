package com.saas.jrs.Modules.Entitys;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "users")
public class UserEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;// adicionar validations

    @Column(name = "nome")
    private String name;

    private String username;

    private String email;
    private String password;
    private String role;
    private String superior;

    @CreationTimestamp
    private LocalDateTime createdAt;

}
