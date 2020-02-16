import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ArticleApiResponse, ArticleApiResponseObject, ArticleApiResponseMeta } from './article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) {
  }

  public getArticles(): Observable<ArticleApiResponseObject> {
    const url: string = this.getUrl(environment.apiSearchPath);
    return this.http.get(url).pipe(map((res: ArticleApiResponse): ArticleApiResponseObject => res.response));
  }

  public getUrl(path: string): string {
    return `${environment.apiBaseURL}${path}`
  }
}
