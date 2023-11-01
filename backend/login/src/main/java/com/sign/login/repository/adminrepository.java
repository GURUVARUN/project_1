package com.sign.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sign.login.model.Admin;

@Repository
public interface adminrepository extends JpaRepository<Admin, Integer>{

	public Admin findByEmailAndPassword(String email, String password);

	public Admin findByEmail(String email);

}
