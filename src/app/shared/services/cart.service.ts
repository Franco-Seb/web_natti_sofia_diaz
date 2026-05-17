import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: ProductItem[] = [];

  getItems(): ProductItem[] {
    return [...this.items];
  }

  addItem(product: ProductItem): void {
    this.items = [...this.items, product];
  }

  removeItem(itemId: number): void {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index < 0) {
      return;
    }
    this.items = [...this.items.slice(0, index), ...this.items.slice(index + 1)];
  }
}
