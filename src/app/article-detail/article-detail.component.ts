import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';
import { Article, Multimedia } from '../article';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  private imagesBaseUrl: string = environment.imagesBaseUrl;
  public isLoading: boolean;
  public article: Article;
  constructor(private articlesService: ArticlesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const webUrl: string = decodeURIComponent(params.webUrl);
      this.isLoading = true;
      this.articlesService.getArticleByWebUrl(webUrl)
        .subscribe((article: Article) => {
          this.isLoading = false;
          this.article = article;
        });
    });
  }

  /**
   * Extract image url from article
   * @param article Article - Article to extract image url
   */
  public getImageUrl(article: Article): string {
    return this.imagesBaseUrl + '/' + article.multimedia[0].url;
  }
}
