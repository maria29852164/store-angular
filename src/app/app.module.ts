import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav/nav.component';
import {HttpClientModule} from "@angular/common/http";
import {ReversePipe} from "./pipes/reverse.pipe";
import { TimeAgoutPipe } from './pipes/time-agout.pipe';
import { NumberCharacterPipe } from './pipes/number-character.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { AddCardComponent } from './components/add-card/add-card.component';

@NgModule({
    declarations: [
        AppComponent,
        ImgComponent,
        ProductComponent,
        ProductsComponent,
        NavComponent,
        ReversePipe,
        TimeAgoutPipe,
        NumberCharacterPipe,
        HighlightDirective,
        AddCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
