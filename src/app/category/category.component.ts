import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../interface/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionInput', { static: false }) descriptionInputRef!: ElementRef<HTMLInputElement>;

  categories$: Observable<Category[]> = this.categoryService.getCategories();
  selectedCategory: Category | undefined;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
  }
  

  createCategory() {
    const name = this.nameInputRef.nativeElement.value;
    const description = this.descriptionInputRef.nativeElement.value;
  
    if (name && description) {
      const newCategory: Category = { id: 0, name, description, products: [] };
  
      this.categoryService.createCategories(newCategory).subscribe(
        () => {
          console.log('Catégorie créée avec succès.');
          this.nameInputRef.nativeElement.value = '';
          this.descriptionInputRef.nativeElement.value = '';
          this.loadCategories();
        },
        error => console.error('Erreur lors de la création de la catégorie:', error)
      );
    }
  } 
  
  loadCategories(): void {
    this.categories$ = this.categoryService.getCategories();
  }

  deleteCategory(category: Category) {
    console.log('Deleting category:', category.id);
    this.categoryService.deleteCategories(category.id).subscribe(() => {
      this.loadCategories();
    });
  }

  updateCategory() {
    if (!this.selectedCategory) return;

    console.log('Updating category:', this.selectedCategory);

    this.categoryService.updateCategories(this.selectedCategory).subscribe(() => {
      this.clearSelectedCategory();
      this.loadCategories(); 
    });
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  clearSelectedCategory(): void {
    this.selectedCategory = undefined;
  }
}
