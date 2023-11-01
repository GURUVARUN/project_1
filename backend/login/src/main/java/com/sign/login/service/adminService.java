package com.sign.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sign.login.model.Admin;

import com.sign.login.repository.adminrepository;

@Service
public class adminService {

	@Autowired
	private adminrepository arepo;
	
	
	public Admin saveAdmin(Admin user) {
		return arepo.save(user);
	}
	
	public Admin FetchAdminByEmailId(String email) {
		return arepo.findByEmail(email);
	}
	
	public Admin FetchAdminByEmailAndPassword(String email,String password) {
		return arepo. findByEmailAndPassword(email,password);
	}
	
}
