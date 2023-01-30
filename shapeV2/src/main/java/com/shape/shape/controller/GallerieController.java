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

import com.shape.shape.dao.GallerieDao;
import com.shape.shape.domain.Gallerie;



@RestController
@RequestMapping
@CrossOrigin("*")
public class GallerieController {
	
	@Autowired
	GallerieDao gallerieDao; 
	
	@GetMapping("/galleries")
	public List<Gallerie> getAllGalleries(@Validated @RequestBody(required = false) Gallerie gallerie) {
		return gallerieDao.getGalleries();
		
	}
	
	@PostMapping("/galleries")
	public Gallerie createGallerie(@Validated @RequestBody(required = false) Gallerie gallerie) {
		return gallerieDao.saveGallerie(gallerie);
		
	}
	
	@GetMapping("/galleries/{gallerie_id}")
	public ResponseEntity findGallerieById(@PathVariable(name = "gallerie_id")Long gallerie_id){
		if (gallerie_id == null) {
			return ResponseEntity.badRequest().body("Je ne trouve pas l'gallerie avec son ID");
		}
		
		Gallerie gallerie = gallerieDao.getGallerieByID(gallerie_id);
		
		if (gallerie == null) {
			return ResponseEntity.notFound().build(); 
		}
		
		return ResponseEntity.ok().body(gallerie); 
		
	}
	
	@PutMapping("/galleries/{gallerie_id}")
	public ResponseEntity<Gallerie> updateGallerie (@Validated @PathVariable(name = "gallerie_id")Long gallerie_id, @RequestBody(required = false) Gallerie gallerie) {
		if (gallerie == null) {
			return ResponseEntity.notFound().build();
			
		}
		gallerie.setGallerie_id(gallerie_id);
		gallerieDao.updateGallerie(gallerie);
		return ResponseEntity.ok().body(gallerie);
	}
	
	@DeleteMapping("/galleries/{gallerie_id}")
	public ResponseEntity<Gallerie> deleteGallerie (@Validated @PathVariable(name = "gallerie_id")Long gallerie_id) {
		
		Gallerie gallerie = gallerieDao.getGallerieByID(gallerie_id);
		
		if (gallerie == null) {
			return ResponseEntity.notFound().build();
		
	}
		gallerieDao.deleteGallerie(gallerie);
		return ResponseEntity.ok().body(gallerie); 
	
	}
	

}

