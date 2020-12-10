import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html'
})
export class RecipeBookComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
