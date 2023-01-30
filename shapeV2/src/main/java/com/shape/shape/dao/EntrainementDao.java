package com.shape.shape.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shape.shape.domain.Entrainement;
import com.shape.shape.repository.IEntrainementRepository;



@Service
public class EntrainementDao {
	@Autowired
	IEntrainementRepository entrainementRepository;
	
	
	
	// Liste de Entrainements
	public List<Entrainement> getEntrainements() {
		return entrainementRepository.findAll();
		
	}
	
	//Save un Entrainement 
	public Entrainement saveEntrainement(Entrainement entrainement) {
		return entrainementRepository.save(entrainement);
		
	}
	
	// get un Entrainement by ID
	public Entrainement getEntrainementByID(Long entrainement_id) {
		return entrainementRepository.findById(entrainement_id).get();
	}
	
	
	// Delete un Entrainement 
	
	public void deleteEntrainement(Entrainement entrainement) {
		entrainementRepository.delete(entrainement);
	
	}
	
	// Update un Entrainement 
	
	public Entrainement updateEntrainement(Entrainement entrainement) {
		return entrainementRepository.save(entrainement);
		
	}

	
	
	// Assocation Entrainement et ExercicePerso

	
 
}
