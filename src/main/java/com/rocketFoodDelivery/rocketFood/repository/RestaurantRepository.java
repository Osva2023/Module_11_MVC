package com.rocketFoodDelivery.rocketFood.repository;

import com.rocketFoodDelivery.rocketFood.models.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurants, Integer> {
    @Query("SELECT r FROM Restaurants r ORDER BY r.restaurant_id DESC")
    List<Restaurants> findAllByOrderByRestaurant_idDesc();
}