package com.shape.shape.domain;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="GALLERIE")
public class Gallerie implements Serializable {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "GALLERIE_ID")
	private Long gallerie_id;
	
	@Column(name = "GALLERIE_FILENAME")
	private String gallerie_filename;
	@Lob
	@Column(name = "data")
	private byte[] data;
	@Column(name = "GALLERIE_DATE")
	private Date gallerie_date;
	@Column(name = "UTILISATEUR_ID")
	private Long utilisateur_id;
	
	// GETTER
	
	public Long getGallerie_id() {
		return gallerie_id;
	}

	public String getGallerie_filename() {
		return gallerie_filename;
	}
	public byte[] getData() {
		return data;
	}

	public Date getGallerie_date() { 
		return gallerie_date;
	}

	public Long getUtilisateur_id() {
		return utilisateur_id;
	}
	
	
	// SETTER 
	
	public void setGallerie_id(Long gallerie_id) {
		this.gallerie_id = gallerie_id;
	}

	public void setGallerie_filename(String gallerie_filename) {
		this.gallerie_filename = gallerie_filename;
	}
	public void setData(byte[] data) {
		this.data = data;
	}

	public void setGallerie_date(Date gallerie_date) {
		this.gallerie_date = gallerie_date;
	}

	public void setUtilisateur_id(Long utilisateur_id) {
		this.utilisateur_id = utilisateur_id;
	}
	
	
	// CONSTRUCTEUR
	
	public Gallerie() {
		super();
	}

	public Gallerie(Long gallerie_id, String gallerie_filename, byte[] data, Date gallerie_date, Long utilisateur_id) {
		super();
		this.gallerie_id = gallerie_id;
		this.gallerie_filename = gallerie_filename;
		this.data = data;
		this.gallerie_date = gallerie_date;
		this.utilisateur_id = utilisateur_id;
	}

	

	

	

	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
