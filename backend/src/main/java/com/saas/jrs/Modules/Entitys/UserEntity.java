package com.saas.jrs.Modules.Entitys;

import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity(name = "users")
public class UserEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;// adicionar validations
    private String nome;

    @NotBlank
    private String username;

    @NotBlank
    private String senha;

    @NotBlank
    @Email
    private String email;
    
    private String nascimento;
    private String cargo;
    private String superior;
    private String permissao;
    private String status;

    @CreationTimestamp()
    private LocalDateTime createdAt;

}
