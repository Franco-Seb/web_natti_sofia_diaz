import { Component } from '@angular/core';
import {
  animate,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('routeTransition', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(18px)' }),
            animate(
              '620ms cubic-bezier(0.16, 1, 0.3, 1)',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class App {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  prepareRoute(outlet: RouterOutlet): string {
    if (!outlet || !outlet.isActivated) {
      return '';
    }
    return outlet.activatedRoute.routeConfig?.path ?? '';
  }
}
