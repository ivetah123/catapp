import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  favoritesArray: any[] = [];
  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', `8fd5047c-f624-4fa3-b8f7-179381371301`);
  }

  async getRandomCat(): Promise<any> {
    return await this.http.get('https://api.thecatapi.com/v1/images/search?has_breeds=true&include_breeds=true').toPromise();
  }
  async getBreeds(): Promise<any> {
    return await this.http.get('https://api.thecatapi.com/v1/breeds').toPromise();
  }
  async getCatByBreed(catParam: string): Promise<any> {
    return await this.http
      .get('https://api.thecatapi.com/v1/images/search?breed_ids=' + catParam)
      .toPromise();
  }
  addToFav(cat) {
    this.favoritesArray.push(cat);
    console.log(this.favoritesArray);
  }

}
