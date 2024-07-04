import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive,
    FormsModule 
  ],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionInput', { static: false }) descriptionInputRef!: ElementRef<HTMLInputElement>;

  categories: { name: string, description: string }[] = []; 
  selectedCategory: { name: string, description: string } | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  createCategory() {
    console.log('createCategory');
    const name = this.nameInputRef.nativeElement.value;
    const description = this.descriptionInputRef.nativeElement.value;

    if (name && description) {
      const newCategory = { name, description };
      this.categories.push(newCategory);

      this.nameInputRef.nativeElement.value = '';
      this.descriptionInputRef.nativeElement.value = '';
    }
  }

  deleteCategory(category: { name: string, description: string }) {
    console.log('deleteCategory de :', category);
    const index = this.categories.indexOf(category);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  updateCategory() {
    if (!this.selectedCategory) return;

    console.log('Mise à jour de la catégorie :', this.selectedCategory);

    const index = this.categories.findIndex(cat => cat.name === this.selectedCategory!.name && cat.description === this.selectedCategory!.description);

    if (index !== -1) {
      this.categories[index] = { ...this.selectedCategory };

      this.categories = [...this.categories];
      this.cdr.detectChanges();
    }

    this.clearSelectedCategory();
  }


  selectCategory(category: { name: string, description: string }) {
    this.selectedCategory = { ...category };
  }

  clearSelectedCategory() {
    this.selectedCategory = null;
  }
}
