import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [RouterModule, DetailsComponent, CommonModule],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css'
})
export class PageAccueilComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}