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
  public searchKeyword: string;
  public page = 0;
  public pageLimit = 99;
  public sort = 'newest';
  public sortOptions = [{ value: 'newest', label: 'Newest first' }, { value: 'oldest', label: 'Oldest first' }];

  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getArticles();
  }

  private getArticles(): void {
    const queryParams: any = this.getQueryParams();
    this.articlesService.getArticles(queryParams)
      .subscribe((resp: ArticleApiResponseObject) => {
        this.articles = resp.docs;
        this.isLoading = false;
      });
  }

  private getQueryParams(): any {
    return this.articlesService.prepareQueryParams({
      page: this.page,
      sort: this.sort,
      searchKeyword: this.searchKeyword
    });
  }
  public getArticleUrl(article: Article): string {
    return encodeURIComponent(article.web_url);
  }

  public getImageUrl(article: Article): string {
    return this.imagesBaseUrl + '/' + article.multimedia[0].url;
  }

  public changePage(page): void {
    this.page = page;
    this.isLoading = true;
    this.getArticles();
  }

  public search(event): void {
    if (event.key === 'Enter') {
      this.isLoading = true;
      this.articles = [];
      this.getArticles();
    }
  }

  public changeSorting(): void {
    this.isLoading = true;
    this.getArticles();
  }
}
