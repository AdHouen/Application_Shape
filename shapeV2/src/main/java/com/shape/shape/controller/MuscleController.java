package com.shape.shape.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shape.shape.dao.MuscleDao;
import com.shape.shape.domain.Muscle;



@RestController
@RequestMapping
@CrossOrigin("*")
public class MuscleController {
	
	@Autowired
	MuscleDao muscleDao; 
	
	@GetMapping("/muscles")
	public List<Muscle> getAllMuscles(@Validated @RequestBody(required = false) Muscle muscle) {
		return muscleDao.getMuscles();
		
	}
	
	@PostMapping("/muscles")
	public Muscle createMuscle(@Validated @RequestBody(required = false) Muscle muscle) {
		return muscleDao.saveMuscle(muscle);
		
	}
	
	@GetMapping("/muscles/{muscle_id}")
	public ResponseEntity findMuscleById(@PathVariable(name = "muscle_id")Long muscle_id){
		if (muscle_id == null) {
			return ResponseEntity.badRequest().body("Je ne trouve pas le muscle avec son ID");
		}
		
		Muscle muscle = muscleDao.getMuscleByID(muscle_id);
		
		if (muscle == null) {
			return ResponseEntity.notFound().build(); 
		}
		
		return ResponseEntity.ok().body(muscle); 
		
	}
	
	@PutMapping("/muscles/{muscle_id}")
	public ResponseEntity<Muscle> updateMuscle (@Validated @PathVariable(name = "muscle_id")Long muscle_id, @RequestBody(required = false) Muscle muscle) {
		if (muscle == null) {
			return ResponseEntity.notFound().build();
			
		}
		muscle.setMuscle_id(muscle_id);
		muscleDao.updateMuscle(muscle);
		return ResponseEntity.ok().body(muscle);
	}
	
	@DeleteMapping("/muscles/{muscle_id}")
	public ResponseEntity<Muscle> deleteMuscle (@Validated @PathVariable(name = "muscle_id")Long muscle_id) {
		
		Muscle muscle = muscleDao.getMuscleByID(muscle_id);
		
		if (muscle == null) {
			return ResponseEntity.notFound().build();
		
	}
		muscleDao.deleteMuscle(muscle);
		return ResponseEntity.ok().body(muscle); 
	
	}
	

}

