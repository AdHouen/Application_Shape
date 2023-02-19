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
@Table(name="EXERCICE")
public class Exercice implements Serializable{
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EXERCICE_ID")
	private Long exercice_id;
	
	@Column(name = "EXERCICE_NOM")
	private String exercice_nom;
	@Column(name = "EXERCICE_DESCRIPTION")
	private String exercice_description;
	@Column(name = "EXERCICE_PHOTO")
	private String exercice_photo;
	@Column(name = "EXERCICE_POSITION")
	private String exercice_position;
	@Column(name = "Muscle_ID")
	private Long muscle_id;

	
	
	// GETTER
	
	public Long getExercice_id() {
		return exercice_id;
	}
	public String getExercice_nom() {
		return exercice_nom;
	}
	public String getExercice_description() {
		return exercice_description;
	}
	public String getExercice_photo() {
		return exercice_photo;
	}
	public String getExercice_position() {
		return exercice_position;
	}
	public Long getMuscle_id() {
		return muscle_id;
	}
	
	
	
	// SETTER
	
	public void setExercice_id(Long exercice_id) {
		this.exercice_id = exercice_id;
	}
	public void setExercice_nom(String exercice_nom) {
		this.exercice_nom = exercice_nom;
	}
	public void setExercice_description(String exercice_description) {
		this.exercice_description = exercice_description;
	}
	public void setExercice_photo(String exercice_photo) {
		this.exercice_photo = exercice_photo;
	}
	public void setExercice_position(String exercice_position) {
		this.exercice_position = exercice_position;
	}
	public void setMuscle_id(Long muscle_id) {
		this.muscle_id = muscle_id;
	}
	
	
	// CONSTRUCTEUR 
	
	public Exercice() {
		super();
	}
	
	public Exercice(Long exercice_id, String exercice_nom, String exercice_description, String exercice_photo,
			String exercice_position, Long muscle_id) {
		super();
		this.exercice_id = exercice_id;
		this.exercice_nom = exercice_nom;
		this.exercice_description = exercice_description;
		this.exercice_photo = exercice_photo;
		this.exercice_position = exercice_position;
		this.muscle_id = muscle_id;
	}
	
	
	
	
	
	
	
	
	
	
	

}
