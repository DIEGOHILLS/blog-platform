package com.diego.blog.mappers.impl;

import com.diego.blog.domain.dtos.CategoryDto;
import com.diego.blog.domain.dtos.CreateCategoryRequest;
import com.diego.blog.domain.entities.Category;
import com.diego.blog.mappers.CategoryMapper;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public CategoryDto toDto(Category category) {
        if (category == null) return null;

        return CategoryDto.builder()
                .id(category.getId())
                .name(category.getName())
                .build();
    }

    @Override
    public Category toEntity(CreateCategoryRequest createCategoryRequest) {
        if (createCategoryRequest == null) return null;

        return Category.builder()
                .name(createCategoryRequest.getName())
                .build();
    }
}