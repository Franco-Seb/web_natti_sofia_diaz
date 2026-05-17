import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CheckoutDataService } from '../../shared/services/checkout-data.service';

@Component({
  selector: 'app-order-confirm-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order-confirm.component.html'
})
export class OrderConfirmComponent {
  private readonly checkoutDataService = inject(CheckoutDataService);

  readonly checkoutData = this.checkoutDataService.getData();

  get customerName(): string {
    return this.checkoutData.fullName.trim() || 'No especificado';
  }

  get customerPhone(): string {
    return this.checkoutData.phone.trim() || 'No especificado';
  }

  get customerAddress(): string {
    return this.checkoutData.deliveryAddress.trim() || 'No especificada';
  }

  get customerNotes(): string {
    return this.checkoutData.notes.trim() || 'Sin notas adicionales';
  }
}
