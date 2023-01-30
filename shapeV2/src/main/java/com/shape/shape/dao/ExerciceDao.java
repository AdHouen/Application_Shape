package com.shape.shape.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shape.shape.domain.Exercice;
import com.shape.shape.repository.IExerciceRepository;



@Service
public class ExerciceDao {
	@Autowired
	IExerciceRepository exerciceRepository;
	
	// Liste de Exercices
	public List<Exercice> getExercices() {
		return exerciceRepository.findAll();
		
	}
	
	//Save un Exercice 
	public Exercice saveExercice(Exercice exercice) {
		return exerciceRepository.save(exercice);
		
	}
	
	// get un Exercice by ID
	public Exercice getExerciceByID(Long exercice_id) {
		return exerciceRepository.findById(exercice_id).get();
	}
	
	
	// Delete un Exercice 
	
	public void deleteExercice(Exercice exercice) {
		exerciceRepository.delete(exercice);
	
	}
	
	// Update un Exercice 
	
	public Exercice updateExercice(Exercice exercice) {
		return exerciceRepository.save(exercice);
		
	}
	
 
}

