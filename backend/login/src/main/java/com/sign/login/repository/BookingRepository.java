package com.sign.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sign.login.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
