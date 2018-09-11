import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ShoppingListComponent]
})
export class AppModule { }
