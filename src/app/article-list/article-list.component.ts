import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleApiResponseObject, Article } from '../article';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  public articles: Article[];
  private imagesBaseUrl: string = environment.imagesBaseUrl;
  public isLoading: boolean;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.articlesService.getArticles()
      .subscribe((resp: ArticleApiResponseObject) => {
        this.articles = resp.docs;
        this.isLoading = false;
      });
  }

  public getArticleId(article: Article): string {
    return article._id.split('/').pop();
  }

  public getImageURL(article: Article): string {
    return this.imagesBaseUrl + '/' + article.multimedia[0].url;
  }

  public gotoArticle(article: Article): void {
    console.log('gotoArticle')
  }
}
