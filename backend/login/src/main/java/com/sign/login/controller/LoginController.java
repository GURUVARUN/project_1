package com.sign.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sign.login.model.Users;
import com.sign.login.service.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
	
	@Autowired
	private LoginService service;
	
	
	//register user
	@PostMapping("/signup")
	public Users loginUser(@RequestBody Users user) throws Exception {
		String tempEmailId=user.getEmailId();
		if(tempEmailId != null && " ".equals(tempEmailId)) {
			Users userObj = service.FetchUserByEmailId(tempEmailId);
			if(userObj != null) {
				throw new Exception("user with "+tempEmailId+"is already exists"); 
			}
		}
		
		Users userObj=null;
		userObj=service.saveUser(user);
		return userObj;
	}
	
	
	//login user

	@PostMapping("/signin")
	

	public Users signinUser(@RequestBody Users user) throws Exception {
		String tempEmailId=user.getEmailId();
		String tempPassword=user.getPassword();
		Users userObj=null;
		if(tempEmailId !=null && tempPassword != null ) {
			userObj= service.FetchUserByEmailIdAndPassword(tempEmailId, tempPassword);
			 	 
		}
		if(userObj == null) {
			throw new Exception("Invalid Creditionals");
		}
		return	userObj;
		
	}
	
	@GetMapping("/getalluser")
	public List<Users> allUsers() {
		return this.service.getUser();
	}
	

	@DeleteMapping("/deleteuser/{id}")
	public void deletePack(@PathVariable int id) {
		 this.service.deleteuser(id);
		
	}

} 
