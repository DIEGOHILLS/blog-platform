package com.diego.blog.mappers;

import com.diego.blog.domain.dtos.CategoryDto;
import com.diego.blog.domain.dtos.CreateCategoryRequest;
import com.diego.blog.domain.entities.Category;

public interface CategoryMapper {

    CategoryDto toDto(Category category);

    Category toEntity(CreateCategoryRequest createCategoryRequest);

}
