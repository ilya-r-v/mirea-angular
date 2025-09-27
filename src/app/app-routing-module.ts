import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { News } from './components/news/news';

const routes: Routes = [
  { 
    path: '', component: MainPage
  },
  { 
    path: 'news', component: News
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
