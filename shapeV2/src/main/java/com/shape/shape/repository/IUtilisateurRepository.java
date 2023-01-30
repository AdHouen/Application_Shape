package com.shape.shape.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shape.shape.domain.Utilisateur;

public interface IUtilisateurRepository extends JpaRepository<Utilisateur, Long>{

}
