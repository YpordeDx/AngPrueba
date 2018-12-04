import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../modelos/userModel';
import { LoginModel } from '../modelos/LoginModel';
import { ResponseModel } from '../modelos/ResponseModel';

@Injectable({
    providedIn:  'root'
})

export  class  APIService {
    API_URL  =  'https://reqres.in';
    constructor(private  httpClient:  HttpClient) {}
    getResponseModel(): Observable<ResponseModel> {
        return this.httpClient.get<ResponseModel>(`${this.API_URL}/api/users?page=2`);
    }

    getUsers(): Observable<UserModel[]> {
          return  this.httpClient.get<UserModel[]>(`${this.API_URL}/api/users?page=2`);
    }
    createUser(user: LoginModel): Observable<LoginModel> {
        return  this.httpClient.post<LoginModel>(`${this.API_URL}/api/login`, user);
    }
}
