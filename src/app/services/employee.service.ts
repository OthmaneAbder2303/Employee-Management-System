import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponseModel, Employee } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://freeapi.miniprojectideas.com/api/ClientStrive/';

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployees(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/getAllEmployee');
  }

  // Add a new employee
  addEmployee(employee: Employee): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/CreateNewEmployee', employee);
  }

  // Update an existing employee
  updateEmployee(employee: Employee): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/ClientStrive/UpdateEmployee`, employee);
  }

  // Delete an employee
  deleteEmployee(empId: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteEmployeeByEmpId?empId=' + empId);
  }
}
