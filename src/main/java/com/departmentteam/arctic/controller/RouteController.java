package com.departmentteam.arctic.controller;

import com.departmentteam.arctic.dao.SettlHospNearestRoutesRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RouteController {
    @Autowired
    SettlHospNearestRoutesRepository settlHospNearestRoutesRepository;

    @Operation(summary = "Get nearest route", responses = {
            @ApiResponse(description = "Get nearest route from location", responseCode = "200", content = @Content(mediaType = "application/json", schema = @Schema(implementation = String.class))),
            @ApiResponse(responseCode = "404", description = "Not found", content = @Content),
            @ApiResponse(responseCode = "401", description = "Authentication Failure", content = @Content(schema = @Schema(hidden = true))) })
    @GetMapping("route")
    private ResponseEntity getRoute(@RequestParam Long id) {
        String routeString =  settlHospNearestRoutesRepository.findRouteById(id);
        return ResponseEntity.ok(routeString);
    }
}
