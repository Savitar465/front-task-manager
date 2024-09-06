import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Task} from "../model/Task";
import {ResponseModel} from "../../shared/model/response.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = environment.api+'/issues';

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<ResponseModel<Task[]>> {
    return this.http.get<ResponseModel<Task[]>>(this.apiUrl);
  }

  postTask(task: any): Observable<ResponseModel<Task>> {
    return this.http.post<ResponseModel<Task>>(this.apiUrl, task);
  }
}
