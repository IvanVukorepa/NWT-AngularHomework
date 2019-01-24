import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component'


const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FavoritesComponent,
    ProductsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
