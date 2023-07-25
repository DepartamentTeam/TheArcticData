package com.departmentteam.arctic.model;

import jakarta.persistence.*;
import lombok.*;
import org.locationtech.jts.geom.Geometry;
import org.locationtech.jts.geom.MultiLineString;
import org.springframework.data.geo.Polygon;

@Entity
@Table(name = "settl_hosp_nearest_routes")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class SettlHospNearestRoutes {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long settlement_id;

    private Long hospital_id;

    private Double distances;
    private Double durations;

    private MultiLineString geometry;

}
