import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CrudArticleComponent } from './crud-article/crud-article.component';

export const routes: Routes = [
    { path: 'category', component: CategoryComponent },
    { path: 'crud-article', component: CrudArticleComponent },
];
