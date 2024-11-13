import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserRequest} from "../request/user.request";
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {ResponseModel} from "../../shared/model/response.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiUrl = environment.api + '/users';

  constructor(private readonly http: HttpClient) {
  }

  postUser(userRequest: UserRequest): Observable<ResponseModel<User>> {
    return this.http.post<ResponseModel<User>>(this.apiUrl, userRequest);
  }
}
