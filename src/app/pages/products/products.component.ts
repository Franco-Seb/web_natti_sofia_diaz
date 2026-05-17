import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductItem } from '../../shared/models/product-item.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  readonly products: ProductItem[] = [
    { id: 1, name: 'Almendras', price: 39000, image: '/Almendras.webp', presentation: 'Unidad x 500g' },
    { id: 2, name: 'Nueces', price: 79000, image: '/Nueces.webp', presentation: 'Unidad x 500g' },
    { id: 3, name: 'Bellota', price: 37000, image: '/Bellota.webp', presentation: 'Unidad x 500g' },
    { id: 4, name: 'Semillas de amapola', price: 43000, image: '/Semillas_amapola.webp', presentation: 'Unidad x 500g' },
    { id: 5, name: 'Maíz tostado', price: 35000, image: '/Maiz_tostado.webp', presentation: 'Unidad x 500g' },
    { id: 6, name: 'Marañón', price: 59000, image: '/Marañon.webp', presentation: 'Unidad x 500g' },
    { id: 7, name: 'Maní horneado', price: 15000, image: '/Mani_horneado.webp', presentation: 'Unidad x 500g' },
    { id: 8, name: 'Maní confitado', price: 15000, image: '/Mani_confitado.webp', presentation: 'Unidad x 500g' },
    { id: 9, name: 'Ciruela pasa', price: 21000, image: '/Ciruela_pasa.webp', presentation: 'Unidad x 500g' },
    { id: 10, name: 'Quinua', price: 17000, image: '/Quinua.webp', presentation: 'Unidad x 500g' },
    { id: 11, name: 'Macadamia', price: 59000, image: '/Macadamia.webp', presentation: 'Unidad x 500g' },
    { id: 12, name: 'Mix de frutos secos', price: 79000, image: '/Mix_frutos_secos.webp', presentation: 'Unidad x 500g' },
    { id: 13, name: 'Mix de frutas', price: 79000, image: '/Mix_frutas.webp', presentation: 'Unidad x 500g' },
    { id: 14, name: 'Mix de frutas deshidratadas', price: 79000, image: '/Mix_frutas_deshidratadas.webp', presentation: 'Unidad x 500g' },
    { id: 15, name: 'Batido verde', price: 74000, image: '/Batido_verde.webp', presentation: 'Unidad x 500g' },
    { id: 16, name: 'Vitamina C', price: 70000, image: '/vitamina_c.webp', presentation: 'Unidad x 500g' }
  ];

  addToCart(product: ProductItem): void {
    this.cartService.addItem(product);
    this.router.navigate(['/carrito']);
  }

  formatPrice(value: number): string {
    return `$${value.toLocaleString('es-CO')}`;
  }
}
