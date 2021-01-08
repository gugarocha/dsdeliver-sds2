package com.gugarocha.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gugarocha.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
