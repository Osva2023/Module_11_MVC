package com.rocketFoodDelivery.rocketFood.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.web.bind.annotation.PathVariable;
import com.rocketFoodDelivery.rocketFood.models.Restaurants;
import com.rocketFoodDelivery.rocketFood.models.UserEntity;
import com.rocketFoodDelivery.rocketFood.models.Address;
import com.rocketFoodDelivery.rocketFood.repository.AddressRepository;
import com.rocketFoodDelivery.rocketFood.repository.RestaurantRepository;
import com.rocketFoodDelivery.rocketFood.repository.UserRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@Controller // this anotation is used to tell springboot its a controller. Use
            // @RestController for api.
@RequestMapping("/backoffice")

public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/restaurants")
    public String showRestaurants(Model model) {
        List<Restaurants> restaurants = restaurantRepository.findAll();
        // Aquí puedes obtener los datos de los restaurantes desde tu repositorio
        // Por ejemplo:
        model.addAttribute("restaurants", restaurants);
        return "restaurants"; // Esto renderizará la vista "restaurants.html"
    }

    @PostMapping("/restaurants")
    @Transactional
    public ResponseEntity<String> createRestaurant(@RequestBody Map<String, Object> payload) {
        if (payload.get("address") instanceof Map && payload.get("user") instanceof Map) {
            Map<String, String> addressData = (Map<String, String>) payload.get("address");
            Address address = new Address();
            address.setStreet_address(addressData.get("streetAddress"));
            address.setCity(addressData.get("city"));
            address.setPostal_code(addressData.get("postalCode"));
            addressRepository.save(address);

            Map<String, String> userData = (Map<String, String>) payload.get("user");
            UserEntity user = new UserEntity();
            user.setName(userData.get("name"));
            user.setEmail(userData.get("email"));
            user.setPassword(userData.get("password")); // Make sure to hash the password before saving
            userRepository.save(user);

            Restaurants restaurant = new Restaurants();
            restaurant.setAddress(address);
            restaurant.setUser(user);
            restaurant.setName((String) payload.get("name"));
            restaurant.setPrice_range(Integer.parseInt((String) payload.get("priceRange")));
            restaurant.setPhone((String) payload.get("phone"));
            restaurant.setEmail((String) payload.get("email"));
            restaurantRepository.save(restaurant);

            return new ResponseEntity<>("Restaurant created successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Invalid payload", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/restaurants/{id}")
    public ResponseEntity<Restaurants> getRestaurant(@PathVariable Integer id) {
        Restaurants restaurant = restaurantRepository.findById(id).orElse(null);
        if (restaurant == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(restaurant, HttpStatus.OK);
        }
    }
    @PutMapping("/restaurants/{id}")
@Transactional
public ResponseEntity<Restaurants> updateRestaurant(@PathVariable Integer id, @RequestBody Map<String, Object> payload) {
    Optional<Restaurants> restaurantOptional = restaurantRepository.findById(id);

    if (!restaurantOptional.isPresent())
        return ResponseEntity.notFound().build();

    Restaurants restaurant = restaurantOptional.get();
    restaurant.setName(payload.get("name").toString());
    restaurant.setEmail(payload.get("email").toString());
    restaurant.setPhone(payload.get("phone").toString());
    restaurant.setPrice_range(Integer.parseInt(payload.get("price_range").toString()));

    Map<String, Object> addressPayload = (Map<String, Object>) payload.get("address");
    Address address = restaurant.getAddress();
    address.setStreet_address(addressPayload.get("street_address").toString());
    address.setCity(addressPayload.get("city").toString());
    address.setPostal_code(addressPayload.get("postal_code").toString());

    restaurant = restaurantRepository.save(restaurant);

    return ResponseEntity.ok(restaurant);
}
@DeleteMapping("/restaurants/{id}")
public ResponseEntity<?> deleteRestaurant(@PathVariable Integer id) {
    Optional<Restaurants> restaurantOptional = restaurantRepository.findById(id);

    if (!restaurantOptional.isPresent())
        return ResponseEntity.notFound().build();

    restaurantRepository.deleteById(id);

    return ResponseEntity.ok().body("{\"status\": \"success\"}");
}
}