package com.sign.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import com.sign.login.model.Package;


@Repository
public interface PackageRepository extends JpaRepository<Package,Integer>{

}