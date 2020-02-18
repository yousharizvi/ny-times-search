import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleApiResponseObject, Article } from '../article';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  public articles: Article[];
  private imagesBaseUrl: string = environment.imagesBaseUrl;
  public isLoading: boolean;

  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.articlesService.getArticles()
      .subscribe((resp: ArticleApiResponseObject) => {
        this.articles = resp.docs;
        this.isLoading = false;
      });
  }

  public getArticleUrl(article: Article): string {
    return encodeURIComponent(article.web_url);
  }

  public getImageUrl(article: Article): string {
    return this.imagesBaseUrl + '/' + article.multimedia[0].url;
  }
}
