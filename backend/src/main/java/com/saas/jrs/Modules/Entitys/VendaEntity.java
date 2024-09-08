package com.saas.jrs.Modules.Entitys;

import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;

public class VendaEntity {

    private Long id;

    private String produto;
    private Double valor;
    private String vendedor;
    private LocalDateTime dataVenda;

    @CreationTimestamp
    private LocalDateTime createdAt;

   //Gets e Sets
   
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
    this.id = id;
}

    public String getProduto() {
    return produto;
}

public void setProduto(String produto) {
    this.produto = produto;
}
public double getValor() {
    return valor;
}
public void setValor(double valor) {
    
}

public String getVendedor() {
    return vendedor;
}

public void setVendedor(String vendedor) {
    this.vendedor = vendedor;
}

public LocalDateTime getDataVenda() {
    return dataVenda;
}

public void setDataVenda(LocalDateTime dataVenda) {
    this.dataVenda = dataVenda;
}
};
    
