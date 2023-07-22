package com.departmentteam.arctic.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "settlements")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Settlements {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String region;
    private String municipality;
    private String settlement;
    private String population;
    private double rate_ter_access_duration;
    private double rate_ter_access_distance;
}
