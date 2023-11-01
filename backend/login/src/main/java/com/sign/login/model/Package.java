package com.sign.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Package {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	private String url;
	private String Name;
	private String Price;
	private int Rating;
	private String about;

	public Package(int Id, String url, String Name, String Price, int Rating, String about) {
		super();
		this.Id = Id;
		this.url = url;
		this.Name = Name;
		this.Price = Price;
		this.Rating = Rating;
		this.about = about;
	}

	public Package() {
		super();
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getPrice() {
		return Price;
	}

	public void setPrice(String price) {
		Price = price;
	}

	public int getRating() {
		return Rating;
	}

	public void setRating(int rating) {
		Rating = rating;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}



}
