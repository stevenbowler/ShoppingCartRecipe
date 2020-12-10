import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
