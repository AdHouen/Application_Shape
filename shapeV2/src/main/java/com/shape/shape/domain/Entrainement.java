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
@Table(name="ENTRAINEMENT")
public class Entrainement implements Serializable {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ENTRAINEMENT_ID")
	private Long entrainement_id;
	
	@Column(name = "ENTRAINEMENT_DATE")
	private LocalDate entrainement_date;
	@Column(name = "ENTRAINEMENT_NOM")
	private String entrainement_nom;
	@Column(name = "ENTRAINEMENT_SERIE")
	private Integer entrainement_serie;
	@Column(name = "ENTRAINEMENT_REPETITION")
	private Integer entrainement_repetition;
	@Column(name = "ENTRAINEMENT_POIDS")
	private Integer entrainement_poids;
	@Column(name = "ENTRAINEMENT_PAUSE")
	private Integer entrainement_pause;
	@Column(name = "ENTRAINEMENT_TEMPSSECONDE")
	private Integer entrainement_tempsSeconde;
	@Column(name = "ENTRAINEMENT_DISTANCE")
	private Integer entrainement_distance;
	@Column(name = "EXERCICE_ID")
	private Long exercice_id;
	
	// GETTER 
	
	public Long getEntrainement_id() {
		return entrainement_id;
	}
	public LocalDate getEntrainement_date() {
		return entrainement_date;
	}
	public String getEntrainement_nom() {
		return entrainement_nom;
	}
	public Integer getEntrainement_serie() {
		return entrainement_serie;
	}
	public Integer getEntrainement_repetition() {
		return entrainement_repetition;
	}
	public Integer getEntrainement_poids() {
		return entrainement_poids;
	}
	public Integer getEntrainement_pause() {
		return entrainement_pause;
	}
	public Integer getEntrainement_tempsSeconde() {
		return entrainement_tempsSeconde;
	}
	public Integer getEntrainement_distance() {
		return entrainement_distance;
	}
	
	public Long getExercice_id() {
		return exercice_id;
	}
	
	
	// SETTER 
	
	public void setEntrainement_id(Long entrainement_id) {
		this.entrainement_id = entrainement_id;
	}
	public void setEntrainement_date(LocalDate entrainement_date) {
		this.entrainement_date = entrainement_date;
	}
	public void setEntrainement_nom(String entrainement_nom) {
		this.entrainement_nom = entrainement_nom;
	}
	public void setEntrainement_serie(Integer entrainement_serie) {
		this.entrainement_serie = entrainement_serie;
	}
	public void setEntrainement_repetition(Integer entrainement_repetition) {
		this.entrainement_repetition = entrainement_repetition;
	}
	public void setEntrainement_poids(Integer entrainement_poids) {
		this.entrainement_poids = entrainement_poids;
	}
	public void setEntrainement_pause(Integer entrainement_pause) {
		this.entrainement_pause = entrainement_pause;
	}
	public void setEntrainement_tempsSeconde(Integer entrainement_tempsSeconde) {
		this.entrainement_tempsSeconde = entrainement_tempsSeconde;
	}
	public void setEntrainement_distance(Integer entrainement_distance) {
		this.entrainement_distance = entrainement_distance;
	}
	public void setExercice_id(Long exercice_id) {
		this.exercice_id = exercice_id;
	}
	
	
	
	// CONSTRUCTEUR 
	
	public Entrainement() {
		super();
	}
	public Entrainement(Long entrainement_id, LocalDate entrainement_date, String entrainement_nom,
			Integer entrainement_serie, Integer entrainement_repetition, Integer entrainement_poids,
			Integer entrainement_pause, Integer entrainement_tempsSeconde, Integer entrainement_distance,
			Long exercice_id) {
		super();
		this.entrainement_id = entrainement_id;
		this.entrainement_date = entrainement_date;
		this.entrainement_nom = entrainement_nom;
		this.entrainement_serie = entrainement_serie;
		this.entrainement_repetition = entrainement_repetition;
		this.entrainement_poids = entrainement_poids;
		this.entrainement_pause = entrainement_pause;
		this.entrainement_tempsSeconde = entrainement_tempsSeconde;
		this.entrainement_distance = entrainement_distance;
		this.exercice_id = exercice_id;
	}
	
	
	

	
	
	
	

}
