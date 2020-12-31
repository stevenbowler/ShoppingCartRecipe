import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { IngredientService } from './shopping-cart/ingredient.service';
import { shoppingCartReducer } from './shopping-cart/store/shopping-cart.reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RecipeBookComponent,
    ShoppingCartComponent,
    ShoppingCartListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    StoreModule.forRoot({ shoppingCart: shoppingCartReducer }),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'recipe-book', component: RecipeBookComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
    ])
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
