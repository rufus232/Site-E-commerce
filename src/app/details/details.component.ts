import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(productId).subscribe(
      product => {
        if (product) {
          this.product = product;
        } else {
          console.error(`Aucun produit trouvé pour l'ID ${productId}.`);
        }
      },
      error => {
        console.error('Erreur lors de la récupération du produit :', error);
      }
    );
  }

  addToCart(): void {
    if (this.product) {
      console.log('Produit ajouté au panier :', this.product);
      alert('Produit ajouté au panier !');
    } else {
      console.error('Aucun produit à ajouter au panier.');
    }
  }
}
