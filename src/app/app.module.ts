import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { register } from 'swiper/element/bundle';
import { SignComponent } from './sign/sign.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { ProductComponent } from './product/product.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SignComponent,
    InputNumberComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
