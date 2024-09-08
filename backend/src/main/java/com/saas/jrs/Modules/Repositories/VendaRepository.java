package com.saas.jrs.Modules.Repositories;

import com.saas.jrs.Modules.Entitys.VendaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendaRepository extends JpaRepository<VendaEntity, Long> {

    Object getVenda();

    VendaEntity save(VendaRepository venda);

}
