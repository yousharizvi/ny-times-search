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
  public sortOptions = [{ value: 'newest', label: 'Newest first' }, { value: 'oldest', label: 'Oldest first' }];
  public pageLimit: number = environment.paginationLimit;
  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getArticles();
  }

  /**
   * Getter for search keyword from article service
   */
  public get searchKeyword(): string {
    return this.articlesService.searchKeyword;
  }

  /**
   * Getter for search keyword in article service
   */
  public set searchKeyword(value: string) {
    this.articlesService.searchKeyword = value;
  }

  /**
   * Getter for page number from article service
   */
  public get page(): number {
    return this.articlesService.page;
  }

  /**
   * Getter for page number in article service
   */
  public set page(value: number) {
    this.articlesService.page = value;
  }

  /**
   * Getter for sort order from article service
   */
  public get sort(): string {
    return this.articlesService.sort;
  }

  /**
   * Getter for sort order in article service
   */
  public set sort(value: string) {
    this.articlesService.sort = value;
  }

  /**
   * Get articles from nytimes api
   */
  private getArticles(): void {
    const queryParams: any = this.getQueryParams();
    this.articlesService.getArticles(queryParams)
      .subscribe((resp: ArticleApiResponseObject) => {
        this.articles = resp.docs;
        this.isLoading = false;
      });
  }

  /**
   * Prepare query params based on page number, sort order and search keyword
   */
  private getQueryParams(): any {
    return this.articlesService.prepareQueryParams({
      page: this.page,
      sort: this.sort,
      searchKeyword: this.searchKeyword
    });
  }

  /**
   * Extract web url from article
   * @param article Article - Article to extract web url
   */
  public getArticleUrl(article: Article): string {
    return encodeURIComponent(article.web_url);
  }

  /**
   * Extract image url from article
   * @param article Article - Article to extract image url
   */
  public getImageUrl(article: Article): string {
    return this.imagesBaseUrl + '/' + article.multimedia[0].url;
  }

  /**
   * Navigate through pages
   * @param page number - Page number to navigate on
   */
  public changePage(page): void {
    this.page = page;
    this.isLoading = true;
    this.getArticles();
  }

  /**
   * Search for a given keyword
   * @param event keyup event
   */
  public search(event): void {
    if (event.key === 'Enter') {
      this.page = 0;
      this.isLoading = true;
      this.articles = [];
      this.getArticles();
    }
  }

  /**
   * Change sort order to newest or oldest first
   */
  public changeSorting(): void {
    this.isLoading = true;
    this.page = 0;
    this.getArticles();
  }
}
