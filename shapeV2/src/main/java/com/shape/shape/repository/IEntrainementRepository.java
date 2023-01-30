package com.shape.shape.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shape.shape.domain.Entrainement;

public interface IEntrainementRepository extends JpaRepository<Entrainement, Long>{

}
