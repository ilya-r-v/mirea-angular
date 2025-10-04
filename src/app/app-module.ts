import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { News } from './components/news/news';
import { Header } from './components/header/header';
import { MainPage } from './components/main-page/main-page';
import { Products } from './components/products/products';
import { Practices } from './components/practices/practices';
import { Contacts } from './components/contacts/contacts';
import { DialogForm } from './components/dialog-form/dialog-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    News,
    Header,
    MainPage,
    Products,
    Practices,
    Contacts,
    DialogForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
