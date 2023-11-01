package com.sign.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sign.login.model.Users;

@Repository
public interface LoginRepository extends JpaRepository<Users, Integer> {

	public Users findByEmailId(String emailId);
	public Users findByEmailIdAndPassword(String emailId,String password);

	

	
	
}
