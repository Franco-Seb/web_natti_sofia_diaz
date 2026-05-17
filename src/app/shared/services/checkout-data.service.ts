import { Injectable } from '@angular/core';
import { CheckoutData } from '../models/checkout-data.model';

@Injectable({ providedIn: 'root' })
export class CheckoutDataService {
  private data: CheckoutData = {
    fullName: '',
    phone: '',
    deliveryAddress: '',
    notes: ''
  };

  setData(nextData: CheckoutData): void {
    this.data = { ...nextData };
  }

  getData(): CheckoutData {
    return { ...this.data };
  }
}
