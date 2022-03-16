import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { InsuredItem } from './insured';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsuredService {

  private apiUrl = environment.baseUrl + "/api/insured-items"

  constructor(private httpClient: HttpClient) { }

  getInsuredItemList(): Observable<InsuredItem[]> {
    return this.httpClient.get<InsuredItem[]>(`${this.apiUrl}`);
  }

  createInsuredItem(insuredItem: InsuredItem): Observable<Object> {
    return this.httpClient.post(`${this.apiUrl}`, insuredItem);
  }

  getInsuredItemById(id: string): Observable<InsuredItem> {
    return this.httpClient.get<InsuredItem>(`${this.apiUrl}/${id}`);
  }

  updateInsuredItem(id: string, insuredItem: InsuredItem): Observable<Object> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, insuredItem);
  }

  deleteInsuredItem(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
