package com.saas.jrs.Modules.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saas.jrs.Modules.Entitys.UserEntity;
import com.saas.jrs.Modules.Repositories.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/list")
    public List<UserEntity> listarUsuarios() {
       return this.userRepository.findAll();
    }

    @PostMapping("/create")
    public UserEntity create(@RequestBody UserEntity userEntity) {
       return this.userRepository.save(userEntity);
    }

    
}
