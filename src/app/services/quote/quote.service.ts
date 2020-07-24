import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private BASE_URL = 'https://type.fit/api/quotes';

  constructor(private http: HttpClient) {}

  fetchQuotes(): Observable<any> {
    return this.http.get(this.BASE_URL).pipe(
      map((q) => q[this.getRandomNumber()]),
      catchError(this.handleError<any>('getQuote', []))
    );
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 1643);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
