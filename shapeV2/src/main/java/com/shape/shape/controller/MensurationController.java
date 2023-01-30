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

import com.shape.shape.dao.MensurationDao;
import com.shape.shape.domain.Mensuration;



@RestController
@RequestMapping
@CrossOrigin("*")
public class MensurationController {
	
	@Autowired
	MensurationDao mensurationDao; 
	
	@GetMapping("/mensurations")
	public List<Mensuration> getAllMensurations(@Validated @RequestBody(required = false) Mensuration mensuration) {
		return mensurationDao.getMensurations();
		
	}
	
	@PostMapping("/mensurations")
	public Mensuration createMensuration(@Validated @RequestBody(required = false) Mensuration mensuration) {
		return mensurationDao.saveMensuration(mensuration);
		
	}
	
	@GetMapping("/mensurations/{mensuration_id}")
	public ResponseEntity findMensurationById(@PathVariable(name = "mensuration_id")Long mensuration_id){
		if (mensuration_id == null) {
			return ResponseEntity.badRequest().body("Je ne trouve pas la mensuration avec son ID");
		}
		
		Mensuration mensuration = mensurationDao.getMensurationByID(mensuration_id);
		
		if (mensuration == null) {
			return ResponseEntity.notFound().build(); 
		}
		
		return ResponseEntity.ok().body(mensuration); 
		
	}
	
	@PutMapping("/mensurations/{mensuration_id}")
	public ResponseEntity<Mensuration> updateMensuration (@Validated @PathVariable(name = "mensuration_id")Long mensuration_id, @RequestBody(required = false) Mensuration mensuration) {
		if (mensuration == null) {
			return ResponseEntity.notFound().build();
			
		}
		mensuration.setMensuration_id(mensuration_id);
		mensurationDao.updateMensuration(mensuration);
		return ResponseEntity.ok().body(mensuration);
	}
	
	@DeleteMapping("/mensurations/{mensuration_id}")
	public ResponseEntity<Mensuration> deleteMensuration (@Validated @PathVariable(name = "mensuration_id")Long mensuration_id) {
		
		Mensuration mensuration = mensurationDao.getMensurationByID(mensuration_id);
		
		if (mensuration == null) {
			return ResponseEntity.notFound().build();
		
	}
		mensurationDao.deleteMensuration(mensuration);
		return ResponseEntity.ok().body(mensuration); 
	
	}
	

}

