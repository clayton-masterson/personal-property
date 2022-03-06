package com.claytonmasterson.personal_property.service;

import com.claytonmasterson.personal_property.domain.InsuredItem;
import com.claytonmasterson.personal_property.model.InsuredItemDTO;
import com.claytonmasterson.personal_property.repos.InsuredItemRepository;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.Null;


@Service
public class InsuredItemService {

    private final InsuredItemRepository insuredItemRepository;

    public InsuredItemService(final InsuredItemRepository insuredItemRepository) {
        this.insuredItemRepository = insuredItemRepository;
    }

    public List<InsuredItemDTO> findAll() {
        return insuredItemRepository.findAll()
                .stream()
                .map(insuredItem -> mapToDTO(insuredItem, new InsuredItemDTO()))
                .collect(Collectors.toList());
    }

    public InsuredItemDTO get(final UUID id) {
        return insuredItemRepository.findById(id)
                .map(insuredItem -> mapToDTO(insuredItem, new InsuredItemDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public UUID create(final InsuredItemDTO insuredItemDTO) {
        final InsuredItem insuredItem = new InsuredItem();
        mapToEntity(insuredItemDTO, insuredItem);
        return insuredItemRepository.save(insuredItem).getId();
    }

    public void update(final UUID id, final InsuredItemDTO insuredItemDTO) {
        final InsuredItem insuredItem = insuredItemRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(insuredItemDTO, insuredItem);
        insuredItemRepository.save(insuredItem);
    }

    public void delete(final UUID id) {
        insuredItemRepository.deleteById(id);
    }

    private InsuredItemDTO mapToDTO(final InsuredItem insuredItem,
            final InsuredItemDTO insuredItemDTO) {
        insuredItemDTO.setId(insuredItem.getId());
        insuredItemDTO.setName(insuredItem.getName());
        insuredItemDTO.setProductCode(insuredItem.getProductCode());
        insuredItemDTO.setProductType(insuredItem.getProductType());
        insuredItemDTO.setAuthorArtist(insuredItem.getAuthorArtist());
        insuredItemDTO.setReleaseYear(insuredItem.getReleaseYear());
        insuredItemDTO.setEstimatedValue(insuredItem.getEstimatedValue());
        insuredItemDTO.setDescription(insuredItem.getDescription());
        return insuredItemDTO;
    }

    private InsuredItem mapToEntity(final InsuredItemDTO insuredItemDTO,
            final InsuredItem insuredItem) {
        insuredItem.setName(insuredItemDTO.getName());
        insuredItem.setProductCode(insuredItemDTO.getProductCode());
        insuredItem.setProductType(insuredItemDTO.getProductType());
        insuredItem.setAuthorArtist(insuredItemDTO.getAuthorArtist());
        insuredItem.setReleaseYear(insuredItemDTO.getReleaseYear());
        insuredItem.setEstimatedValue(insuredItemDTO.getEstimatedValue());
        insuredItem.setDescription(insuredItemDTO.getDescription());
        return insuredItem;
    }

}