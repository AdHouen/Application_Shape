package com.shape.shape.domain;

import java.io.Serializable;

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
	
	@Column(name = "ENTRAINEMENT_MUSCLE")
	private String entrainement_muscle;
	@Column(name = "ENTRAINEMENT_EXO")
	private String entrainement_exo;	
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
	@Column(name = "SEMAINE_ID")
	private Long semaine_id;
	
	// GETTER 
	
	public Long getEntrainement_id() {
		return entrainement_id;
	}
	public String getEntrainement_muscle() {
		return entrainement_muscle;
	}
	public String getEntrainement_exo() {
		return entrainement_exo;
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
	public Long getSemaine_id() {
		return semaine_id;
	}

	
	// SETTER 
	
	public void setEntrainement_id(Long entrainement_id) {
		this.entrainement_id = entrainement_id;
	}
	public void setEntrainement_muscle(String entrainement_muscle) {
		this.entrainement_muscle = entrainement_muscle;
	}
	public void setEntrainement_exo(String entrainement_exo) {
		this.entrainement_exo = entrainement_exo;
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
	public void setSemaine_id(Long semaine_id) {
		this.semaine_id = semaine_id;
	}

	
	// CONSTRUCTEUR 
	
	public Entrainement() {
		super();
	}
	public Entrainement(Long entrainement_id, String entrainement_muscle,
			String entrainement_exo, Integer entrainement_serie, Integer entrainement_repetition,
			Integer entrainement_poids, Integer entrainement_pause, Integer entrainement_tempsSeconde,
			Integer entrainement_distance, Long semaine_id) {
		super();
		this.entrainement_id = entrainement_id;
		this.entrainement_muscle = entrainement_muscle;
		this.entrainement_exo = entrainement_exo;
		this.entrainement_serie = entrainement_serie;
		this.entrainement_repetition = entrainement_repetition;
		this.entrainement_poids = entrainement_poids;
		this.entrainement_pause = entrainement_pause;
		this.entrainement_tempsSeconde = entrainement_tempsSeconde;
		this.entrainement_distance = entrainement_distance;
		this.semaine_id = semaine_id;
	}
	





	
	

	
	

	
	
	
	

}
