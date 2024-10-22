import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartao } from './cartao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private readonly api = 'https://challenge-november-temporary-tq7s.vercel.app/users';

  constructor(private http: HttpClient) { }

  findCards(cpf: string): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(`${this.api}/${cpf}/cards`);
  }

}
