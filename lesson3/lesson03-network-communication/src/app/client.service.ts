import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  rootUrl = "http://localhost:3000";

  error = ''
  
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.rootUrl}/exercise/client`).pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message)
        return throwError(() => e);
      }),
    )
  }
  constructor(private http: HttpClient) { }
}


export interface Client {
  id: number;
  picture: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  wallet: string;
}