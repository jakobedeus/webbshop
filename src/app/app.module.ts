import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductPresentationComponent } from './product-presentation/product-presentation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowProductsComponent,
    HeaderComponent,
    ProductPresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
