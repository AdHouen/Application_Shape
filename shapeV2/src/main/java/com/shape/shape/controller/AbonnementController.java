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

import com.shape.shape.dao.AbonnementDao;
import com.shape.shape.domain.Abonnement;



@RestController
@RequestMapping
@CrossOrigin("*")
public class AbonnementController {
	
	@Autowired
	AbonnementDao abonnementDao; 
	
	@GetMapping("/abonnements")
	public List<Abonnement> getAllAbonnements(@Validated @RequestBody(required = false) Abonnement abonnement) {
		return abonnementDao.getAbonnements();
		
	}
	
	@PostMapping("/abonnements")
	public Abonnement createAbonnement(@Validated @RequestBody(required = false) Abonnement abonnement) {
		return abonnementDao.saveAbonnement(abonnement);
		
	}
	
	@GetMapping("/abonnements/{abonnement_id}")
	public ResponseEntity findAbonnementById(@PathVariable(name = "abonnement_id")Long abonnement_id){
		if (abonnement_id == null) {
			return ResponseEntity.badRequest().body("Je ne trouve pas l'abonnement avec son ID");
		}
		
		Abonnement abonnement = abonnementDao.getAbonnementByID(abonnement_id);
		
		if (abonnement == null) {
			return ResponseEntity.notFound().build(); 
		}
		
		return ResponseEntity.ok().body(abonnement); 
		
	}
	
	@PutMapping("/abonnements/{abonnement_id}")
	public ResponseEntity<Abonnement> updateAbonnement (@Validated @PathVariable(name = "abonnement_id")Long abonnement_id, @RequestBody(required = false) Abonnement abonnement) {
		if (abonnement == null) {
			return ResponseEntity.notFound().build();
			
		}
		abonnement.setAbonnement_id(abonnement_id);
		abonnementDao.updateAbonnement(abonnement);
		return ResponseEntity.ok().body(abonnement);
	}
	
	@DeleteMapping("/abonnements/{abonnement_id}")
	public ResponseEntity<Abonnement> deleteAbonnement (@Validated @PathVariable(name = "abonnement_id")Long abonnement_id) {
		
		Abonnement abonnement = abonnementDao.getAbonnementByID(abonnement_id);
		
		if (abonnement == null) {
			return ResponseEntity.notFound().build();
		
	}
		abonnementDao.deleteAbonnement(abonnement);
		return ResponseEntity.ok().body(abonnement); 
	
	}
	

}

