import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListObject } from './list.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://jsonplaceholder.typicode.com/todos';
  }

  getList() {
    return this.http.get<ListObject[]>(this.ROOT_URL);
  }
}
