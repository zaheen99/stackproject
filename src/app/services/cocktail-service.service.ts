import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { cocktailData } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  apiUrl = 'https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow';
  constructor(private _httpClient: HttpClient) {

  }

  getCocktailData(route) {
    return this._httpClient.get<{}>(this.apiUrl + '&' + route);

  }
}
