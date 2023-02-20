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
	
	
	@Column(name = "ENTRAINEMENT_JOUR")
	private String entrainement_jour;
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
	@Column(name = "ENTRAINEMENT_RECUP")
	private Integer entrainement_recup;
	@Column(name = "ENTRAINEMENT_TEMPS")
	private Integer entrainement_temps;
	@Column(name = "ENTRAINEMENT_DISTANCE")
	private Integer entrainement_distance;
	@Column(name = "UTILISATEUR_ID")
	private Long utilisateur_id;
	
	// GETTER 
	
	public Long getEntrainement_id() {
		return entrainement_id;
	}

	public String getEntrainement_jour() {
		return entrainement_jour;
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

	public Integer getEntrainement_recup() {
		return entrainement_recup;
	}

	public Integer getEntrainement_temps() {
		return entrainement_temps;
	}

	public Integer getEntrainement_distance() {
		return entrainement_distance;
	}

	public Long getUtilisateur_id() {
		return utilisateur_id;
	}

	// SETTER 
	
	public void setEntrainement_id(Long entrainement_id) {
		this.entrainement_id = entrainement_id;
	}

	public void setEntrainement_jour(String entrainement_jour) {
		this.entrainement_jour = entrainement_jour;
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

	public void setEntrainement_recup(Integer entrainement_recup) {
		this.entrainement_recup = entrainement_recup;
	}

	public void setEntrainement_temps(Integer entrainement_temps) {
		this.entrainement_temps = entrainement_temps;
	}

	public void setEntrainement_distance(Integer entrainement_distance) {
		this.entrainement_distance = entrainement_distance;
	}

	public void setUtilisateur_id(Long utilisateur_id) {
		this.utilisateur_id = utilisateur_id;
	}


	// CONSTRUCTEUR 
	
	public Entrainement() {
		super();
	}

	public Entrainement(Long entrainement_id, String entrainement_jour, String entrainement_muscle,
			String entrainement_exo, Integer entrainement_serie, Integer entrainement_repetition,
			Integer entrainement_poids, Integer entrainement_recup, Integer entrainement_temps,
			Integer entrainement_distance, Long utilisateur_id) {
		super();
		this.entrainement_id = entrainement_id;
		this.entrainement_jour = entrainement_jour;
		this.entrainement_muscle = entrainement_muscle;
		this.entrainement_exo = entrainement_exo;
		this.entrainement_serie = entrainement_serie;
		this.entrainement_repetition = entrainement_repetition;
		this.entrainement_poids = entrainement_poids;
		this.entrainement_recup = entrainement_recup;
		this.entrainement_temps = entrainement_temps;
		this.entrainement_distance = entrainement_distance;
		this.utilisateur_id = utilisateur_id;
	}

	 
	




	





	
	

	
	

	
	
	
	

}
