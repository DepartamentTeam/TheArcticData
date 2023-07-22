package com.departmentteam.arctic.dao;

import com.departmentteam.arctic.model.Settlements;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "settlements", path = "settlements")
public interface SettlementsRepository extends PagingAndSortingRepository<Settlements, Long> {

    List<Settlements> findById(@Param("id") Long id);

}