package com.sign.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sign.login.model.Package;
import com.sign.login.repository.PackageRepository;
import com.sign.login.service.PackageService;

@RestController
public class PackageController {

	@Autowired
	private PackageService service;
	@Autowired
	PackageRepository repo;

	// adding the Products
	@PostMapping("/addpackage")
	@CrossOrigin(origins = "http://localhost:4200")
	public Package savePackage(@RequestBody Package pack) {
		return this.service.savePackage(pack);
	}

	// getting all the Products
	@GetMapping("/package")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Package> getPackage() {
		return this.service.getPackages();
	}

	// Getting one product
	@GetMapping("/packages/{Id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Package getPackage(@PathVariable int Id) {
		return this.service.getPackage(Id);
	}

	// deleting courses one by one
	@DeleteMapping("/delete/{Id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deletePack(@PathVariable int Id) {
		 this.service.deletePackage(Id);
		
	}
//	update package
	@PutMapping("/update/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Package updatePackage(@PathVariable int id ,@RequestBody Package pack) {
		Package npack=repo.getById(id);
		npack.setUrl(pack.getUrl());
		npack.setName(pack.getName());
		npack.setPrice(pack.getPrice());
		npack.setRating(pack.getRating());
		npack.setAbout(pack.getAbout());
		return repo.save(npack);
	}

	
	
}
