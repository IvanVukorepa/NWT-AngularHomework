import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FavoritesComponent } from './favorites/favorites.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
