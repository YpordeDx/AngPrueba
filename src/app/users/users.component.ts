import { Component, OnInit } from '@angular/core';
import { APIService } from '../servicio/api.service';
import {Router} from '@angular/router';
import {ResponseModel} from '../modelos/ResponseModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export  class  UsersComponent  implements  OnInit {
private  responseMesagge:  ResponseModel;
  constructor(private router: Router, private  apiService:  APIService) { }
  ngOnInit(): void {
    this.getResponseUsers();
  }
  logOut(): void {
    this.router.navigate(['/login']);
  }
  public  getResponseUsers(): void {
    this.apiService.getResponseModel().subscribe((data: ResponseModel) => {
      this.responseMesagge  =  data;
    });
  }
}
