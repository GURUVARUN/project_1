package com.sign.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int id;
	private String name;
	private String email;
	private String mobilenumber;
	private int days;
	private String bookingDate;
	private int noOfPeople;
	private String packName;
	public Booking() {
		super();
	}
	public Booking( String name, String email, String mobilenumber, int days, String bookingDate,
			int noOfPeople,String packName) {
		super();
	
		this.name = name;
		this.email = email;
		this.mobilenumber = mobilenumber;
		this.days = days;
		this.bookingDate = bookingDate;
		this.noOfPeople = noOfPeople;
		this.packName=packName;
	}
	
	public String getPackName() {
		return packName;
	}
	public void setPackName(String packName) {
		this.packName = packName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public int getDays() {
		return days;
	}
	public void setDays(int days) {
		this.days = days;
	}
	public String getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}
	public int getNoOfPeople() {
		return noOfPeople;
	}
	public void setNoOfPeople(int noOfPeople) {
		this.noOfPeople = noOfPeople;
	}
	
	
	
	
}
