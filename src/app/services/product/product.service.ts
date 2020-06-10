import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private contactUrl = environment.apiUrl + '/product'

  constructor(private http: HttpClient) { }

  public createProduct = (purchase, type) => {
    return this.http.post(this.contactUrl + '/create', { purchase: purchase, type: type }, { observe: 'response' })
  }
}
