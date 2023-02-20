package com.shape.shape.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shape.shape.domain.Mensuration;

public interface IMensurationRepository extends JpaRepository<Mensuration, Long>{
	public List<Mensuration> findAllByOrderByDateDesc();
	

}
