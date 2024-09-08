package com.saas.jrs.Modules.Services;


import java.util.List;

import com.saas.jrs.Modules.Entitys.VendaEntity;
import com.saas.jrs.Modules.Repositories.VendaRepository;

public class VendaServico {

    private VendaRepository vendaRepository;

public VendaEntity criarVenda(VendaEntity venda) {

    return vendaRepository.save(venda);
};

public VendaEntity atualizarVenda(Long id, VendaEntity venda) { 
    return vendaRepository.findById(id).map(vendaExistente -> {
        
        vendaExistente.setProduto(venda.getProduto());
        vendaExistente.setValor(venda.getValor());
        vendaExistente.setVendedor(venda.getVendedor());
        vendaExistente.setDataVenda(venda.getDataVenda());
        
        
        return vendaRepository.save(vendaExistente);
    }).orElseThrow(() -> new RuntimeException("Venda não encontrada com o ID: " + id));
}

public List<VendaEntity> listarVendas() {
    return vendaRepository.findAll();
}

public void deletarVenda(Long id) {
    vendaRepository.deleteById(id);
}
}
