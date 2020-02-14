import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


const routes: Routes = [
  { path: 'articles/:id', component: ArticleDetailComponent },
  {
    path: 'articles',
    component: ArticleListComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '**',
    redirectTo: '/articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
