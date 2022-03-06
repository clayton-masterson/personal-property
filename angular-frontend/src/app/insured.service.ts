import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { InsuredItem } from './insured';

@Injectable({
  providedIn: 'root'
})
export class InsuredService {

  private baseURL = "http://localhost:8080/api/insured-items"

  constructor(private httpClient: HttpClient) { }

  getInsuredItemList(): Observable<InsuredItem[]> {
    return this.httpClient.get<InsuredItem[]>(`${this.baseURL}`);
  }

  createInsuredItem(insuredItem: InsuredItem): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, insuredItem);
  }

  getInsuredItemById(id: string): Observable<InsuredItem> {
    return this.httpClient.get<InsuredItem>(`${this.baseURL}/${id}`);
  }

  updateInsuredItem(id: string, insuredItem: InsuredItem): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, insuredItem);
  }

  deleteInsuredItem(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
