// package com.saas.jrs.Modules.Controllers;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;

// import com.saas.jrs.Modules.Entitys.VendaEntity;
// import com.saas.jrs.Modules.Services.VendaServico;

// public class VendaController {
//     @Autowired
//     private VendaServico vendaServico;

//     @PostMapping
//     public ResponseEntity<VendaEntity> criarVenda(@RequestBody VendaEntity venda) {
//         VendaEntity novaVenda = vendaServico.criarVenda(venda);
//         return ResponseEntity.ok(novaVenda);
//     }

//     @PutMapping("/{id}")
//     public <Venda> ResponseEntity<VendaEntity> atualizarVenda(@PathVariable Long id, @RequestBody VendaEntity venda) {
//         VendaEntity vendaAtualizada = vendaServico.atualizarVenda(id, venda);
//         return ResponseEntity.ok(vendaAtualizada);
//     }
// }

