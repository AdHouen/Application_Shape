package com.shape.shape.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shape.shape.domain.Utilisateur;
import com.shape.shape.repository.IUtilisateurRepository;



@Service
public class UtilisateurDao {
	@Autowired
	IUtilisateurRepository utilisateurRepository;
	
	// Liste de Utilisateurs
	public List<Utilisateur> getUtilisateurs() {
		return utilisateurRepository.findAll();
		
	}
	
	//Save un Utilisateur 
	public Utilisateur saveUtilisateur(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
		
	}
	
	// get un Utilisateur by ID
	public Utilisateur getUtilisateurByID(Long utilisateur_id) {
		return utilisateurRepository.findById(utilisateur_id).get();
	}
	
	
	// Delete un Utilisateur 
	
	public void deleteUtilisateur(Utilisateur utilisateur) {
		utilisateurRepository.delete(utilisateur);
	
	}
	
	// Update un Utilisateur 
	
	public Utilisateur updateUtilisateur(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
		
	}
	
 
}