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

import com.shape.shape.dao.EntrainementDao;
import com.shape.shape.domain.Entrainement;



@RestController
@RequestMapping
@CrossOrigin("*")
public class EntrainementController {
	
	@Autowired
	EntrainementDao entrainementDao; 
	
	@GetMapping("/entrainements")
	public List<Entrainement> getAllEntrainements(@Validated @RequestBody(required = false) Entrainement entrainement) {
		return entrainementDao.getEntrainements();
		
	}
	
	@PostMapping("/entrainements")
	public Entrainement createEntrainement(@Validated @RequestBody(required = false) Entrainement entrainement) {
		return entrainementDao.saveEntrainement(entrainement);
		
	}
	
	@GetMapping("/entrainements/{entrainement_id}")
	public ResponseEntity findEntrainementById(@PathVariable(name = "entrainement_id")Long entrainement_id){
		if (entrainement_id == null) {
			return ResponseEntity.badRequest().body("Je ne trouve pas l'entrainement avec son ID");
		}
		
		Entrainement entrainement = entrainementDao.getEntrainementByID(entrainement_id);
		
		if (entrainement == null) {
			return ResponseEntity.notFound().build(); 
		}
		
		return ResponseEntity.ok().body(entrainement); 
		
	}
	
	@PutMapping("/entrainements/{entrainement_id}")
	public ResponseEntity<Entrainement> updateEntrainement (@Validated @PathVariable(name = "entrainement_id")Long entrainement_id, @RequestBody(required = false) Entrainement entrainement) {
		if (entrainement == null) {
			return ResponseEntity.notFound().build();
			
		}
		entrainement.setEntrainement_id(entrainement_id);
		entrainementDao.updateEntrainement(entrainement);
		return ResponseEntity.ok().body(entrainement);
	}
	
	@DeleteMapping("/entrainements/{entrainement_id}")
	public ResponseEntity<Entrainement> deleteEntrainement (@Validated @PathVariable(name = "entrainement_id")Long entrainement_id) {
		
		Entrainement entrainement = entrainementDao.getEntrainementByID(entrainement_id);
		
		if (entrainement == null) {
			return ResponseEntity.notFound().build();
		
	}
		entrainementDao.deleteEntrainement(entrainement);
		return ResponseEntity.ok().body(entrainement); 
	
	}
	

}

