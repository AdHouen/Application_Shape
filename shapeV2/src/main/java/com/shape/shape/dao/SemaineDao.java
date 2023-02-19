package com.shape.shape.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shape.shape.domain.Semaine;
import com.shape.shape.repository.ISemaineRepository;

@Service
public class SemaineDao {
	@Autowired
	ISemaineRepository semaineRepository;
	
	// Liste de Semaines
	public List<Semaine> getSemaines() {
		return semaineRepository.findAll();
		
	}
	
	//Save une Semaine 
	public Semaine saveSemaine(Semaine semaine) {
		return semaineRepository.save(semaine);
		
	}
	
	// Get une Semaine by ID
	public Semaine getSemaineByID(Long semaine_id) {
		return semaineRepository.findById(semaine_id).get();
	}
	
	
	// Delete une Semaine 
	
	public void deleteSemaine(Semaine semaine) {
		semaineRepository.delete(semaine);
	
	}
	
	// Update une Semaine
	
	public Semaine updateSemaine(Semaine semaine) {
		return semaineRepository.save(semaine);
		
	}
	
 
}
