package com.saas.jrs.Modules.Entitys;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "vendas")
public class VendaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String produto;
    private Double valor;
    private String vendedor;
    private LocalDateTime dataVenda;

    @CreationTimestamp
    private LocalDateTime createdAt;

//    //Gets e Sets
   
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//     this.id = id;
// }

//     public String getProduto() {
//     return produto;
// }

// public void setProduto(String produto) {
//     this.produto = produto;
// }
// public double getValor() {
//     return valor;
// }
// public void setValor(double valor) {
    
// }

// public String getVendedor() {
//     return vendedor;
// }

// public void setVendedor(String vendedor) {
//     this.vendedor = vendedor;
// }

// public LocalDateTime getDataVenda() {
//     return dataVenda;
// }

// public void setDataVenda(LocalDateTime dataVenda) {
//     this.dataVenda = dataVenda;
// }
};
    
