import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnidadesFederativas } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class UnidadesfederativasService {

  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<UnidadesFederativas[]>;

  constructor(private httpClient: HttpClient) {
  }

  listar() : Observable<UnidadesFederativas[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UnidadesFederativas[]> {
    return this.httpClient.get<UnidadesFederativas[]>(`${this.apiUrl}/estados`);
  }
}
