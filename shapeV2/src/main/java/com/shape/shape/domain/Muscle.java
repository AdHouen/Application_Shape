package com.shape.shape.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="MUSCLE")
public class Muscle implements Serializable {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "MUSCLE_ID")
	private Long muscle_id;
	
	@Column(name = "MUSCLE_NOM")
	private String muscle_nom;
	@Column(name = "MUSCLE_IMAGE")
	private String  muscle_image;
	@Column(name = "UTILISATEUR_ID")
	private Long utilisateur_id;
	
	// ASSOCIATION
		//Avec Mensuration
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "muscle_id")
	private List<Mensuration> listMensuration= new ArrayList<>();
		
		//Avec Exercice
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "muscle_id")
	private List<Exercice> listExercice= new ArrayList<>();
	
	// GETTER
	
	public Long getMuscle_id() {
		return muscle_id;
	}
	public String getMuscle_nom() {
		return muscle_nom;
	}
	public String getMuscle_image() {
		return muscle_image;
	}
	public Long getUtilisateur_id() {
		return utilisateur_id;
	}
	public List<Mensuration> getListMensuration() {
		return listMensuration;
	}
	public List<Exercice> getListExercice() {
		return listExercice;
	}
	
	// SETTER
	
	public void setMuscle_id(Long muscle_id) {
		this.muscle_id = muscle_id;
	}
	public void setMuscle_nom(String muscle_nom) {
		this.muscle_nom = muscle_nom;
	}
	public void setMuscle_image(String muscle_image) {
		this.muscle_image = muscle_image;
	}
	public void setUtilisateur_id(Long utilisateur_id) {
		this.utilisateur_id = utilisateur_id;
	}
	public void setListMensuration(List<Mensuration> listMensuration) {
		this.listMensuration = listMensuration;
	}
	public void setListExercice(List<Exercice> listExercice) {
		this.listExercice = listExercice;
	}
	
	// CONSTRUCTEUR 
	
	public Muscle() {
		super();
	}
	
	public Muscle(Long muscle_id, String muscle_nom, String muscle_image, Long utilisateur_id,
			List<Mensuration> listMensuration, List<Exercice> listExercice) {
		super();
		this.muscle_id = muscle_id;
		this.muscle_nom = muscle_nom;
		this.muscle_image = muscle_image;
		this.utilisateur_id = utilisateur_id;
		this.listMensuration = listMensuration;
		this.listExercice = listExercice;
	}
	
	
	
	

}
