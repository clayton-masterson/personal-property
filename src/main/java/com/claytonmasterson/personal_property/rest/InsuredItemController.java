package com.claytonmasterson.personal_property.rest;

import com.claytonmasterson.personal_property.model.InsuredItemDTO;
import com.claytonmasterson.personal_property.service.InsuredItemService;
import java.util.List;
import java.util.UUID;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class InsuredItemController {

    private final InsuredItemService insuredItemService;

    public InsuredItemController(final InsuredItemService insuredItemService) {
        this.insuredItemService = insuredItemService;
    }

    // REST API Get All Insured Items
    @GetMapping("/insured-items")
    public ResponseEntity<List<InsuredItemDTO>> getAllInsuredItems() {
        return ResponseEntity.ok(insuredItemService.findAll());
    }

    // REST API Get Insured Item by ID
    @GetMapping("/insured-items/{id}")
    public ResponseEntity<InsuredItemDTO> getInsuredItem(@PathVariable final UUID id) {
        return ResponseEntity.ok(insuredItemService.get(id));
    }

    // REST API Create Insured Item
    @PostMapping("/insured-items")
    public ResponseEntity<UUID> createInsuredItem(
            @RequestBody @Valid final InsuredItemDTO insuredItemDTO) {
        return new ResponseEntity<>(insuredItemService.create(insuredItemDTO), HttpStatus.CREATED);
    }

    // REST API Update Insured Item by ID
    @PutMapping("/insured-items/{id}")
    public ResponseEntity<Void> updateInsuredItem(@PathVariable final UUID id,
            @RequestBody @Valid final InsuredItemDTO insuredItemDTO) {
        insuredItemService.update(id, insuredItemDTO);
        return ResponseEntity.ok().build();
    }

    // REST API Update Insured Item by ID
    @DeleteMapping("/insured-items/{id}")
    public ResponseEntity<Void> deleteInsuredItem(@PathVariable final UUID id) {
        insuredItemService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
