import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { News } from './components/news/news';
import { Practices } from './components/practices/practices';
import { Products } from './components/products/products';
import { Contacts } from './components/contacts/contacts';

const routes: Routes = [
  { 
    path: '', component: MainPage
  },
  { 
    path: 'news', component: News
  },
  { 
    path: 'practices', component: Practices
  },
  { 
    path: 'products', component: Products
  },
  { 
    path: 'contacts', component: Contacts
  },
  { 
    path: '**', redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
