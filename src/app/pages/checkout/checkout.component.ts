import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CheckoutData } from '../../shared/models/checkout-data.model';
import { CheckoutDataService } from '../../shared/services/checkout-data.service';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  private readonly checkoutDataService = inject(CheckoutDataService);
  private readonly router = inject(Router);

  formData: CheckoutData = this.checkoutDataService.getData();

  continueToConfirm(): void {
    this.checkoutDataService.setData(this.formData);
    this.router.navigate(['/confirmar-pedido']);
  }
}
