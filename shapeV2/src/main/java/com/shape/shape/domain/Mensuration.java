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
	@Column(name = "ID")
	private Long id;
	@Column (name ="DATE")
	private LocalDate date;
	@Column(name = "VALEUR") 
	private Integer valeur;
	@Column(name = "MUSCLE_ID")
	private Long muscle_id;
	
	// GETTER
	
	public Long getId() {
		return id;
	}

	public LocalDate getDate() {
		return date;
	}
	
	public Long getMuscle_id() {
		return muscle_id;
	}

	public Integer getValeur() {
		return valeur;
	}



	
	// SETTER 
	
	public void setId(Long id) {
		this.id = id;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public void setValeur(Integer valeur) {
		this.valeur = valeur;
	}
	public void setMuscle_id(Long muscle_id) {
		this.muscle_id = muscle_id;
	}

	

	// CONSTRUCTEUR 
	
	public Mensuration() {
		super();
	}

	public Mensuration(Long id, LocalDate date, Integer valeur, Long muscle_id) {
		super();
		this.id = id;
		this.date = date;
		this.valeur = valeur;
		this.muscle_id = muscle_id;
	}
	
	







	



	
	

}
