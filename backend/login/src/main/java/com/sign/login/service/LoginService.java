package com.sign.login.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sign.login.model.Package;
import com.sign.login.model.Users;
import com.sign.login.repository.LoginRepository;

@Service 
public class LoginService {

	@Autowired
	private LoginRepository repo;
	
	
	public Users saveUser(Users user) {
		return repo.save(user);
	}
	
	public Users FetchUserByEmailId(String email) {
		return repo.findByEmailId(email);
	}
	
	public Users FetchUserByEmailIdAndPassword(String email,String password) {
		return repo. findByEmailIdAndPassword(email,password);
	}
	
	
	public List<Users> getUser(){
		return repo.findAll();		
	}
	

	public void deleteuser(int id)
	{
	
		repo.deleteById(id);
	}
	
}
