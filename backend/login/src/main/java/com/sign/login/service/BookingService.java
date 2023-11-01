package com.sign.login.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sign.login.model.Booking;
import com.sign.login.repository.BookingRepository;

@Service
public class BookingService {
	
	
	@Autowired
	private BookingRepository book;
	
	
	
	//booking
	public Booking saveBookingDetails(Booking book) {
		return this.book.save(book);
	}
	
	
	
	//get all booking details
	public List<Booking> getBookingDetails(){
		return this.book.findAll();
	}
	
	
	
public void delete(int id)
{
	 this.book.deleteById(id);
}
}
