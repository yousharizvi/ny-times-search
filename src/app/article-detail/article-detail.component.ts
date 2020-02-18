import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
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

}
