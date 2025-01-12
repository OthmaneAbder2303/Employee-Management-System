import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients() : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients')
  }

  getAllUser() : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('https://jsonplaceholder.typicode.com/users')
  }

  getAllClientProject() : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClientProjects')
  }

  getAllEmployee() : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllEmployee')
  }

  addUpdate(obj:Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient', obj)
  }

  deleteClientById(id:number):Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteClientByClientId?clientId=' + id)
  }

  addClientProjectUpdate(obj:Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClientProject', obj)
  }
}