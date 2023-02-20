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
@Table(name="ABONNEMENT")
public class Abonnement implements Serializable {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ABONNEMENT_ID")
	private Long abonnement_id;
	@Column(name = "ABONNEMENT_TYPE")
	private String abonnement_type;
	@Column(name = "ABONNEMENT_dateSouscription")
	private LocalDate abonnement_dateSouscription;
	@Column(name = "ABONNEMENT_DUREE")
	private Integer abonnement_duree;
	@Column(name = "UTILISATEUR_ID")
	private Long utilisateur_id;
	

	// GETTER 
	
	public Long getAbonnement_id() {
		return abonnement_id;
	}
	public String getAbonnement_type() {
		return abonnement_type;
	}
	public LocalDate getAbonnement_dateSouscription() {
		return abonnement_dateSouscription;
	}
	public Integer getAbonnement_duree() {
		return abonnement_duree;
	}
	public Long getUtilisateur_id() {
		return utilisateur_id;
	}

	// SETTER
	
	public void setAbonnement_id(Long abonnement_id) {
		this.abonnement_id = abonnement_id;
	}
	public void setAbonnement_type(String abonnement_type) {
		this.abonnement_type = abonnement_type;
	}
	public void setAbonnement_dateSouscription(LocalDate abonnement_dateSouscription) {
		this.abonnement_dateSouscription = abonnement_dateSouscription;
	}
	public void setAbonnement_duree(Integer abonnement_duree) {
		this.abonnement_duree = abonnement_duree;
	}
	public void setUtilisateur_id(Long utilisateur_id) {
		this.utilisateur_id = utilisateur_id;
	}
	
	
	// CONSTRUCTOR
	
	public Abonnement() {
		super();
	}
	public Abonnement(Long abonnement_id, String abonnement_type, LocalDate abonnement_dateSouscription,
			Integer abonnement_duree, Long utilisateur_id) {
		super();
		this.abonnement_id = abonnement_id;
		this.abonnement_type = abonnement_type;
		this.abonnement_dateSouscription = abonnement_dateSouscription;
		this.abonnement_duree = abonnement_duree;
		this.utilisateur_id = utilisateur_id;
	}
	
	
	
	
	
	
	
	
	

}
