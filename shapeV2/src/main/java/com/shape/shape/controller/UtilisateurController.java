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

import com.shape.shape.dao.UtilisateurDao;
import com.shape.shape.domain.Utilisateur;



@RestController
@RequestMapping
@CrossOrigin("*")
public class UtilisateurController {
	
	@Autowired
	UtilisateurDao utilisateurDao; 
	
	@GetMapping("/utilisateurs")
	public List<Utilisateur> getAllUtilisateurs(@Validated @RequestBody(required = false) Utilisateur utilisateur) {
		return utilisateurDao.getUtilisateurs();
		
	}
	
	@PostMapping("/utilisateurs")
	public Utilisateur createUtilisateur(@Validated @RequestBody(required = false) Utilisateur utilisateur) {
		return utilisateurDao.saveUtilisateur(utilisateur);
		
	}
	
	@GetMapping("/utilisateurs/{utilisateur_id}")
	public ResponseEntity findUtilisateurById(@PathVariable(name = "utilisateur_id")Long utilisateur_id){
		if (utilisateur_id == null) {
			return ResponseEntity.badRequest().body("Je ne trouve pas l'utilisateur avec son ID");
		}
		
		Utilisateur utilisateur = utilisateurDao.getUtilisateurByID(utilisateur_id);
		
		if (utilisateur == null) {
			return ResponseEntity.notFound().build(); 
		}
		
		return ResponseEntity.ok().body(utilisateur); 
		
	}
	
	@PutMapping("/utilisateurs/{utilisateur_id}")
	public ResponseEntity<Utilisateur> updateUtilisateur (@Validated @PathVariable(name = "utilisateur_id")Long utilisateur_id, @RequestBody(required = false) Utilisateur utilisateur) {
		if (utilisateur == null) {
			return ResponseEntity.notFound().build();
			
		}
		utilisateur.setUtilisateur_id(utilisateur_id);
		utilisateurDao.updateUtilisateur(utilisateur);
		return ResponseEntity.ok().body(utilisateur);
	}
	
	@DeleteMapping("/utilisateurs/{utilisateur_id}")
	public ResponseEntity<Utilisateur> deleteUtilisateur (@Validated @PathVariable(name = "utilisateur_id")Long utilisateur_id) {
		
		Utilisateur utilisateur = utilisateurDao.getUtilisateurByID(utilisateur_id);
		
		if (utilisateur == null) {
			return ResponseEntity.notFound().build();
		
	}
		utilisateurDao.deleteUtilisateur(utilisateur);
		return ResponseEntity.ok().body(utilisateur); 
	
	}
	

}

