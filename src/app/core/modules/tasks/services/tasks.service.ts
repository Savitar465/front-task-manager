import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:7070/api/v1/issues';

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
