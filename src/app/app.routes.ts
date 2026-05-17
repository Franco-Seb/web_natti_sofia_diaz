import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderConfirmComponent } from './pages/order-confirm/order-confirm.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { ProductsComponent } from './pages/products/products.component';
import { RecipesBlogComponent } from './pages/recipes-blog/recipes-blog.component';
import { SustainabilityComponent } from './pages/sustainability/sustainability.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'pedido', component: CheckoutComponent },
  { path: 'confirmar-pedido', component: OrderConfirmComponent },
  { path: 'pedido-confirmado', component: OrderSuccessComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'recetas-blog', component: RecipesBlogComponent },
  { path: 'sostenibilidad', component: SustainabilityComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
