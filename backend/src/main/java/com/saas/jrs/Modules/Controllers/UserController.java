package com.saas.jrs.Modules.Controllers;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> obterUsuarioPorId(@PathVariable Long id) {
        Optional<UserEntity> usuario = userRepository.findById(id);
        return usuario.map(ResponseEntity::ok) // Retorna 200 se encontrado
                      .orElseGet(() -> ResponseEntity.notFound().build()); // Retorna 404 se não encontrado
    }

    @PostMapping("/create")
    public UserEntity create(@RequestBody UserEntity userEntity) {
       return this.userRepository.save(userEntity);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserEntity> update(@PathVariable Long id, @RequestBody UserEntity userEntity) {
        if (!userRepository.existsById(id)) {
            return ResponseEntity.notFound().build(); // Retorna 404 se o ID não existir
        }
        userEntity.setId(id); // Mantém o ID correto
        return ResponseEntity.ok(userRepository.save(userEntity)); // Atualiza e retorna o usuário
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            return ResponseEntity.notFound().build(); // Retorna 404 se o ID não existir
        }
        userRepository.deleteById(id); // Deleta o usuário
        return ResponseEntity.noContent().build(); // Retorna 204 No Content
    }
}
