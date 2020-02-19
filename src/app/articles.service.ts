import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ArticleApiResponse, ArticleApiResponseObject, ArticleApiResponseMeta, Article } from './article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const paramsMapping: { [key: string]: string } = {
  webUrl: 'web_url'
};

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) { }

  public prepareQueryParams(query: { [key: string]: string | number }) {
    return Object.keys(query)
      .reduce((acc, key) => ({ ...acc, [paramsMapping[key] || key]: query[key] }), {});
  }

  public prepareQuery(query: { [key: string]: string }) {
    return Object.keys(query)
      .map((key) => `${[paramsMapping[key] || key]}:"${query[key]}"`)
      .join(' AND ');
  }

  public getArticles(params: { [key: string]: string } = {}): Observable<ArticleApiResponseObject> {
    const url: string = this.getUrl(environment.apiSearchPath);
    return this.http.get(url, { params })
      .pipe(map((res: ArticleApiResponse): ArticleApiResponseObject => res.response));
  }

  public getArticleByWebUrl(webUrl: string): Observable<Article> {
    return this.getArticles({
      fq: this.prepareQuery({ webUrl })
    }).pipe(map((response: ArticleApiResponseObject) => response.docs[0]));
  }

  public getUrl(path: string): string {
    return `${environment.apiBaseUrl}${path}`;
  }
}
