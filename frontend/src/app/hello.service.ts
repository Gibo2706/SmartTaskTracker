import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HelloService {
  constructor(private http: HttpClient) { }

  get(): Observable<string> {
    return this.http.get<{message: string}>('/api/hello')
      .pipe(map(resp => resp && resp.message ? resp.message : JSON.stringify(resp)));
  }
}

