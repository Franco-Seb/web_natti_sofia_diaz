import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { RecipesBlogComponent } from './pages/recipes-blog/recipes-blog.component';
import { SustainabilityComponent } from './pages/sustainability/sustainability.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'recetas-blog', component: RecipesBlogComponent },
  { path: 'sostenibilidad', component: SustainabilityComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
