import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductItem } from '../../shared/models/product-item.model';
import { CartService } from '../../shared/services/cart.service';

type DeliveryType = 'pickup' | 'home';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);

  deliveryType: DeliveryType = 'pickup';
  items: ProductItem[] = [];

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeItem(itemId: number): void {
    this.cartService.removeItem(itemId);
    this.items = this.cartService.getItems();
  }

  setDeliveryType(type: DeliveryType): void {
    this.deliveryType = type;
  }

  get subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  get shippingCost(): number {
    return this.deliveryType === 'pickup' ? 0 : 8000;
  }

  get total(): number {
    return this.subtotal + this.shippingCost;
  }

  formatPrice(value: number): string {
    return `$${value.toLocaleString('es-CO')}`;
  }
}
