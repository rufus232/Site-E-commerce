import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../interface/article';
import { ArticleService } from '../service/article.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-crud-article',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './crud-article.component.html',
  styleUrls: ['./crud-article.component.css']
})
export class CrudArticleComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionInput', { static: false }) descriptionInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('priceInput', { static: false }) priceInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('categorieInput', { static: false }) categorieInput!: ElementRef<HTMLInputElement>;

  
  private articlesSubject = new BehaviorSubject<Article[]>([]);
  articles$: Observable<Article[]> = this.articlesSubject.asObservable();
  selectedArticle: Article | undefined;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
    // this.loadCategories(); 
  }

  private loadArticles(): void {
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articlesSubject.next(articles);
      },
      (error) => {
        console.error('Erreur lors de la récupération de la liste des articles', error);
      }
    );
  }
  

  createArticle() {
    const name = this.nameInputRef.nativeElement.value;
    const description = this.descriptionInputRef.nativeElement.value;
    const prix = parseFloat(this.priceInputRef.nativeElement.value);
    const category = 0; 

    if (name && description && !isNaN(prix)) {
      const newArticle: Article = { id: 0, name, description, prix, category };

      this.articleService.createArticle(newArticle).subscribe(
        () => {
          console.log('Article créée avec succès.');
          this.nameInputRef.nativeElement.value = '';
          this.descriptionInputRef.nativeElement.value = '';
          this.priceInputRef.nativeElement.value = '';
          this.loadArticles(); // Recharger les articles après la création
        },
        error => console.error('Erreur lors de la création de l\'article:', error)
      );
    }
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(() => {
      this.loadArticles(); // Recharger les articles après la suppression
    });
  }

  updateArticle() {
    if (!this.selectedArticle) return;

    this.articleService.updateArticle(this.selectedArticle).subscribe(() => {
      this.clearSelectedArticle();
      this.loadArticles(); // Recharger les articles après la mise à jour
    });
  }

  selectArticle(article: Article): void {
    this.selectedArticle = article;
  }

  clearSelectedArticle(): void {
    this.selectedArticle = undefined;
  }
}
