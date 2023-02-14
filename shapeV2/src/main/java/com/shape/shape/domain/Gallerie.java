package com.shape.shape.domain;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="GALLERIE")
public class Gallerie implements Serializable {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "GALLERIE_ID")
	private Long gallerie_id;
	
	@Column(name = "GALLERIEFILENAME")
	private String galleriefilename;
	@Column(name = "GALLERIE_DATE")
	private LocalDate gallerie_date;
	@Column(name = "UTILISATEUR_ID")
	private Long utilisateur_id;
	
	// GETTER
	
	public Long getGallerie_id() {
		return gallerie_id;
	}

	public String getGalleriefilename() {
		return galleriefilename;
	}

	public LocalDate getGallerie_date() { 
		return gallerie_date;
	}

	public Long getUtilisateur_id() {
		return utilisateur_id;
	}
	
	
	// SETTER 
	
	public void setGallerie_id(Long gallerie_id) {
		this.gallerie_id = gallerie_id;
	}

	public void setGalleriefilename(String galleriefilename) {
		this.galleriefilename = galleriefilename;
	}

	public void setGallerie_date(LocalDate gallerie_date) {
		this.gallerie_date = gallerie_date;
	}

	public void setUtilisateur_id(Long utilisateur_id) {
		this.utilisateur_id = utilisateur_id;
	}
	
	
	// CONSTRUCTEUR
	
	public Gallerie() {
		super();
	}

	public Gallerie(Long gallerie_id, String galleriefilename, LocalDate gallerie_date, Long utilisateur_id) {
		super();
		this.gallerie_id = gallerie_id;
		this.galleriefilename = galleriefilename;
		this.gallerie_date = gallerie_date;
		this.utilisateur_id = utilisateur_id;
	}

	

	

	

	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
