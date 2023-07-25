package com.departmentteam.arctic.dao;

import com.departmentteam.arctic.model.SettlHospNearestRoutes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SettlHospNearestRoutesRepository extends JpaRepository<SettlHospNearestRoutes, Long> {


    @Query(value = "SELECT ST_AsGeoJSON(t.*) FROM settl_hosp_nearest_routes AS t WHERE t.\t\n" +
            "settlement_id = :id", nativeQuery = true)
    String findRouteById(@Param("id")Long aLong);
}
