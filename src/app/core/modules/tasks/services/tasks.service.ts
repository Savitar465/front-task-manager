import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Task} from '../model/task';
import {ResponseModel} from "../../shared/model/response.model";
import {TaskRequest} from "../requests/task.request";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private readonly apiUrl = environment.api+'/issues';

  constructor(private readonly http: HttpClient) {
  }

  getTasks(): Observable<ResponseModel<Task[]>> {
    return this.http.get<ResponseModel<Task[]>>(this.apiUrl);
  }

  postTask(task: TaskRequest): Observable<ResponseModel<Task>> {
    return this.http.post<ResponseModel<Task>>(this.apiUrl, task);
  }
}
