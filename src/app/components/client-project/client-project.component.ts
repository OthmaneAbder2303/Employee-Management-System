import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee, ClientProject } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-client-project',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, UpperCasePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  currentDate:Date = new Date();

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
  projectList = signal<ClientProject[]>([])

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject();
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

  getAllClientProject() {
    this.clientService.getAllClientProject().subscribe({
      next: (res: APIResponseModel) => {
        this.projectList.set(res.data);
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
