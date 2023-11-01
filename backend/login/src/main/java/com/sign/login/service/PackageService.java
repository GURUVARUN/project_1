package com.sign.login.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import com.sign.login.model.Package;
import com.sign.login.repository.PackageRepository;

@Component
@Service
public class PackageService {

	@Autowired
	private PackageRepository pRepo;

//	add package
	public Package savePackage(Package pack) {

		return this.pRepo.save(pack);
	}

// get all package
	public List<Package> getPackages() {
		return this.pRepo.findAll();
	}

// get package by id
	public Package getPackage(int Id) {

		return this.pRepo.findById(Id).get();
	}

// package by 
	public void deletePackage(int Id) {

		Package entity = pRepo.getOne(Id);
		pRepo.delete(entity);
	}
	
//	public Package updatePackage(Package pack) {
//		Package existingPackage=pRepo.findById(pack.getId()).orElse(null);
//		existingPackage.setName(pack.getName());
//		existingPackage.setPrice(pack.getPrice());
//		existingPackage.setRating(pack.getRating());
//		return pRepo.save(existingPackage);
//	}

}