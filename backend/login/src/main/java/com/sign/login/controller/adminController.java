package com.sign.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sign.login.model.Admin;

import com.sign.login.service.adminService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class adminController {

	@Autowired
	adminService aserv;

//register admin
	@PostMapping("/adminsignup")
	public Admin loginUser(@RequestBody Admin user) throws Exception {
		String tempEmailId = user.getEmail();
		if (tempEmailId != null && " ".equals(tempEmailId)) {
			Admin userObj = aserv.FetchAdminByEmailId(tempEmailId);
			if (userObj != null) {
				throw new Exception("user with " + tempEmailId + "is already exists");
			}
		}

		Admin userObj = null;
		userObj = aserv.saveAdmin(user);
		return userObj;
	}

//login admin

	@PostMapping("/adminsignin")
	public Admin signinUser(@RequestBody Admin user) throws Exception {
		String tempEmailId = user.getEmail();
		String tempPassword = user.getPassword();
		Admin userObj = null;
		if (tempEmailId != null && tempPassword != null) {
			userObj = aserv.FetchAdminByEmailAndPassword(tempEmailId, tempPassword);

		}
		if (userObj == null) {
			throw new Exception("Invalid Creditionals");
		}
		return userObj;

	}

}
