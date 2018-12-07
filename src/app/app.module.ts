import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ProductComponent } from './product/product.component'
import { ProductService } from './product/product.service'
import { ProductDetailsComponent } from './product/product-details.component'
import { WelcomeComponent } from './home/welcome.component'
import { StartComponent } from './product/star.component';

@NgModule({
  imports : [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'welcome' , component : WelcomeComponent},
      {path : 'products' , component : ProductComponent},
      {path : 'products/:id' , component : ProductDetailsComponent}
    ])
  ],
  declarations : [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    StartComponent
  ],
  providers : [ProductService],
  bootstrap :[AppComponent]
})

export class AppModule{}