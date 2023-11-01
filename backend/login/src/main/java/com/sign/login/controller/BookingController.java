package com.sign.login.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sign.login.model.Booking;
import com.sign.login.repository.BookingRepository;
import com.sign.login.service.BookingService;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {
	
	@Autowired
	private BookingService bookservice;
	@Autowired
	private BookingRepository repo;
	
	@PostMapping("/enterdetails")
	@CrossOrigin(origins = "http://localhost:4200")
	public Booking saveDetails(@RequestBody Booking book) {
		return this.bookservice.saveBookingDetails(book);
	}
	
	@GetMapping("/getdetails/{name}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<Booking> getDetails(@PathVariable String name){
	 List<Booking> book=repo.findAll();
	int d = 0;
	 for(Booking b:book)
	 {
		 if(b.getEmail().equals(name))
		 {
			 d=b.getId();
		 }
	 }
	 return repo.findById(d);
	 
		
		
		
	}
	@DeleteMapping("/deleteBooking/{id}")
	void deleteById(@PathVariable int id)
	{
		 bookservice.delete(id);
	}
	
	
	@GetMapping("/allbookings")
	public List<Booking> alldetails() {
		return this.bookservice.getBookingDetails();
	}
}
