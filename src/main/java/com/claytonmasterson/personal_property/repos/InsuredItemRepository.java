package com.claytonmasterson.personal_property.repos;

import com.claytonmasterson.personal_property.domain.InsuredItem;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InsuredItemRepository extends JpaRepository<InsuredItem, UUID> {
}
