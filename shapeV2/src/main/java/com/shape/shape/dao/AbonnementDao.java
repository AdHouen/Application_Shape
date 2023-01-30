package com.shape.shape.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shape.shape.domain.Abonnement;
import com.shape.shape.repository.IAbonnementRepository;



@Service
public class AbonnementDao {
	@Autowired
	IAbonnementRepository abonnementRepository;
	
	// Liste de Abonnements
	public List<Abonnement> getAbonnements() {
		return abonnementRepository.findAll();
		
	}
	
	//Save un Abonnement 
	public Abonnement saveAbonnement(Abonnement abonnement) {
		return abonnementRepository.save(abonnement);
		
	}
	
	// get un Abonnement by ID
	public Abonnement getAbonnementByID(Long abonnement_id) {
		return abonnementRepository.findById(abonnement_id).get();
	}
	
	
	// Delete un Abonnement 
	
	public void deleteAbonnement(Abonnement abonnement) {
		abonnementRepository.delete(abonnement);
	
	}
	
	// Update un Abonnement
	
	public Abonnement updateAbonnement(Abonnement abonnement) {
		return abonnementRepository.save(abonnement);
		
	}
	
 
}

