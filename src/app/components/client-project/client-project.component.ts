import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

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
    this.clientService.getAllEmployee().subscribe((res:APIResponseModel) => {
      this.employeeList = res.data
    })
  }

  getAllClient() {
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data
    })
  }

  onSaveProject() : void {
    const formValue = this.projectForm.value;
    debugger;
    this.clientService.addClientProjectUpdate(formValue).subscribe((res:APIResponseModel) => {
      if(res.result) {
        alert("Project Created Succes");
      }
      else {
        alert(res.message);
      }
    })
  }

}
