import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapisericesService {

  constructor(private _http:HttpClient) { }

  newsAPIURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f79d99a357694c5bb93fc4b29609fb31';

  navbar():Observable<any>
  {
    return this._http.get(this.newsAPIURL);
  }
}
