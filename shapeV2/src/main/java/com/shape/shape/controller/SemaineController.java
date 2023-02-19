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

import com.shape.shape.dao.SemaineDao;
import com.shape.shape.domain.Semaine;



@RestController
@RequestMapping
@CrossOrigin("*")
public class SemaineController {
	
	@Autowired
	SemaineDao semaineDao; 
	
	@GetMapping("/semaines")
	public List<Semaine> getAllSemaines(@Validated @RequestBody(required = false) Semaine semaine) {
		return semaineDao.getSemaines();
		
	}
	
	@PostMapping("/semaines")
	public Semaine createSemaine(@Validated @RequestBody(required = false) Semaine semaine) {
		return semaineDao.saveSemaine(semaine);
		
	}
	
	@GetMapping("/semaines/{semaine_id}")
	public ResponseEntity findSemaineById(@PathVariable(name = "semaine_id")Long semaine_id){
		if (semaine_id == null) {
			return ResponseEntity.badRequest().body("Je ne trouve pas le semaine avec son ID");
		}
		
		Semaine semaine = semaineDao.getSemaineByID(semaine_id);
		
		if (semaine == null) {
			return ResponseEntity.notFound().build(); 
		}
		
		return ResponseEntity.ok().body(semaine); 
		
	}
	
	@PutMapping("/semaines/{semaine_id}")
	public ResponseEntity<Semaine> updateSemaine (@Validated @PathVariable(name = "semaine_id")Long semaine_id, @RequestBody(required = false) Semaine semaine) {
		if (semaine == null) {
			return ResponseEntity.notFound().build();
			
		}
		semaine.setSemaine_id(semaine_id);
		semaineDao.updateSemaine(semaine);
		return ResponseEntity.ok().body(semaine);
	}
	
	@DeleteMapping("/semaines/{semaine_id}")
	public ResponseEntity<Semaine> deleteSemaine (@Validated @PathVariable(name = "semaine_id")Long semaine_id) {
		
		Semaine semaine = semaineDao.getSemaineByID(semaine_id);
		
		if (semaine == null) {
			return ResponseEntity.notFound().build();
		
	}
		semaineDao.deleteSemaine(semaine);
		return ResponseEntity.ok().body(semaine); 
	
	}
	

}

