import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-project',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, UpperCasePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}

  projectForm : FormGroup = new FormGroup({
    clientProjectId : new FormControl(''),
    projectName : new FormControl('', Validators.required),
    startDate : new FormControl('', Validators.required),
    expectedEndDate : new FormControl(''),
    leadByEmpId : new FormControl('', Validators.required),
    completedDate : new FormControl(''),
    contactPerson : new FormControl(''),
    contactPersoncontactNo : new FormControl(''),
    totalEmpWorking : new FormControl(''),
    projectCost : new FormControl(''),
    projectDetails : new FormControl(''),
    contactPersonEmailId : new FormControl(''),
    clientId : new FormControl('', Validators.required)
  })

  clientService = inject(ClientService)
  employeeList : Employee[] = []
  clientList : Client[] = []

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.getAllClient();
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe({
      next: (res: APIResponseModel) => {
        this.employeeList = res.data;
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
        alert('Failed to load employee data.');
      }
    });
  }
  
  getAllClient() {
    this.clientService.getAllClients().subscribe({
      next: (res: APIResponseModel) => {
        this.clientList = res.data;
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
        alert('Failed to load client data.');
      }
    });
  }
  

  onSaveProject(): void {
    const formValue = this.projectForm.value;
    this.clientService.addClientProjectUpdate(formValue).subscribe({
      next: (res: APIResponseModel) => {
        if (res.result) {
          this.snackBar.open('Project Created Successfully', 'Close', { duration: 3000 });
        } else {
          this.snackBar.open(res.message, 'Close', { duration: 3000 });
        }
      },
      error: (err) => {
        console.error('Error saving project:', err);
        this.snackBar.open('Failed to create project.', 'Close', { duration: 3000 });
      }
    });
  }

  onResetForm(): void {
    this.projectForm.reset();
  }

}
