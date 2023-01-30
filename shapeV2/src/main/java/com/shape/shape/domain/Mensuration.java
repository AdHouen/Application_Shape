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
@Table(name="MENSURATION")
public class Mensuration implements Serializable {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "MENSURATION_ID")
	private Long mensuration_id;
	@Column (name ="MENSURATION_DATE")
	private LocalDate mensuration_date;
	@Column(name = "MENSURATION_VALEUR") 
	private String mensuration_valeur;
	@Column(name = "MUSCLE_ID")
	private Long muscle_id;
	
	// GETTER
	
	public Long getMensuration_id() {
		return mensuration_id;
	}
	public LocalDate getMensuration_date() {
		return mensuration_date;
	}
	public String getMensuration_valeur() {
		return mensuration_valeur;
	}
	public Long getMuscle_id() {
		return muscle_id;
	}
	
	// SETTER 
	
	public void setMensuration_id(Long mensuration_id) {
		this.mensuration_id = mensuration_id;
	}
	public void setMensuration_date(LocalDate mensuration_date) {
		this.mensuration_date = mensuration_date;
	}
	public void setMensuration_valeur(String mensuration_valeur) {
		this.mensuration_valeur = mensuration_valeur;
	}
	public void setMuscle_id(Long muscle_id) {
		this.muscle_id = muscle_id;
	}
	
	// CONSTRUCTEUR 
	
	public Mensuration() {
		super();
	}
	public Mensuration(Long mensuration_id, LocalDate mensuration_date, String mensuration_valeur, Long muscle_id) {
		super();
		this.mensuration_id = mensuration_id;
		this.mensuration_date = mensuration_date;
		this.mensuration_valeur = mensuration_valeur;
		this.muscle_id = muscle_id;
	}
	
	

}
