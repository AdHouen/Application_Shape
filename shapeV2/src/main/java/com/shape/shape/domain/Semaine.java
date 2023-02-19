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
@Table(name="SEMAINE")
public class Semaine implements Serializable{
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SEMAINE_ID")
	private Long semaine_id;
	
	@Column(name = "SEMAINE_JOUR")
	private String semaine_jour;
	
	// ASSOCIATION
		//Avec Entrainement
		@OneToMany(fetch = FetchType.LAZY, mappedBy = "semaine_id")
		private List<Entrainement> listEntrainement= new ArrayList<>();
	
	
	// GETTER
	
	public Long getSemaine_id() {
		return semaine_id;
	}

	public String getSemaine_jour() {
		return semaine_jour;
	}
	public List<Entrainement> getListEntrainement() {
		return listEntrainement;
	}
	// SETTER
	
	public void setSemaine_id(Long semaine_id) {
		this.semaine_id = semaine_id;
	}

	public void setSemaine_jour(String semaine_jour) {
		this.semaine_jour = semaine_jour;
	}
	public void setListEntrainement(List<Entrainement> listEntrainement) {
		this.listEntrainement = listEntrainement;
	}
	
	// CONSTRUCTEUR

	public Semaine() {
		super();
	}

	public Semaine(Long semaine_id, String semaine_jour, List<Entrainement> listEntrainement) {
		super();
		this.semaine_id = semaine_id;
		this.semaine_jour = semaine_jour;
		this.listEntrainement = listEntrainement;
	}




	

	
	
	
	
	
	

}
