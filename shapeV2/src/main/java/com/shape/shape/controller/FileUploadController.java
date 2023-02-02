package com.shape.shape.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.shape.shape.dao.GallerieDao;
import com.shape.shape.domain.Gallerie;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class FileUploadController {
	
	@Autowired
	private GallerieDao gallerieDao;
	
	private static final Logger log = LoggerFactory.getLogger(FileUploadController.class);
	
	

  @PostMapping(value = "simple-form-upload-mvc", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<Map<String, String>> handleFileUploadForm(@RequestPart("file") MultipartFile file) throws IOException {

    log.info("handling request parts: {}", file);

    try {
      
      File f = new ClassPathResource("").getFile();
      final Path path = Paths.get(f.getAbsolutePath() + File.separator + "static" + File.separator + "image");

      if (!Files.exists(path)) {
        Files.createDirectories(path);
      }

      Path filePath = path.resolve(file.getOriginalFilename());
      Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

      String fileUri = ServletUriComponentsBuilder.fromCurrentContextPath()
          .path("/image/")
          .path(file.getOriginalFilename())
          .toUriString();

      var result = Map.of(
          "filename", file.getOriginalFilename(),
          "fileUri", fileUri
      );
      return ResponseEntity.ok().body(result);

    } catch (IOException e) {
      log.error(e.getMessage());
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
	
//	private static final Logger log = LoggerFactory.getLogger(FileUploadController.class);
//	
//	@PostMapping(value = "simple-form-upload-mvc", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//	  public ResponseEntity<Map<String, String>> handleFileUploadForm(@RequestPart("file") MultipartFile file) throws IOException {
//
//	    log.info("handling request parts: {}", file);
//
//	    try {
//	      Gallerie gallerie = new Gallerie();
//	      gallerie.setGallerie_filename(file.getOriginalFilename());
//	      gallerie.setData(file.getBytes());
//
//	      gallerie = gallerieDao.saveGallerie(gallerie);
//
//	      var result = Map.of(
//	          "filename", gallerie.getGallerie_filename(),
//	          "id", gallerie.getGallerie_id().toString()
//	      );
//	      return ResponseEntity.ok().body(result);
//
//	    } catch (IOException e) {
//	      log.error(e.getMessage());
//	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//	    }
//	  }
	}

