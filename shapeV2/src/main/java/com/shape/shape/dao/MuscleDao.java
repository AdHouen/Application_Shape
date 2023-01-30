package com.shape.shape.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shape.shape.domain.Muscle;
import com.shape.shape.repository.IMuscleRepository;



@Service
public class MuscleDao {
	@Autowired
	IMuscleRepository muscleRepository;
	
	// Liste de Muscles
	public List<Muscle> getMuscles() {
		return muscleRepository.findAll();
		
	}
	
	//Save un Muscle 
	public Muscle saveMuscle(Muscle muscle) {
		return muscleRepository.save(muscle);
		
	}
	
	// Get un Muscle by ID
	public Muscle getMuscleByID(Long muscle_id) {
		return muscleRepository.findById(muscle_id).get();
	}
	
	
	// Delete un Muscle 
	
	public void deleteMuscle(Muscle muscle) {
		muscleRepository.delete(muscle);
	
	}
	
	// Update un Muscle
	
	public Muscle updateMuscle(Muscle muscle) {
		return muscleRepository.save(muscle);
		
	}
	
 
}

