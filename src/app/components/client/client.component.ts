import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})

export class ClientComponent implements OnInit {
  currentDate: Date = new Date();

  clientObj: Client = new Client();
  clientList: Client[] = [];
  userList$ : Observable<any> = new Observable<any>

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient(): void {
    this.clientService.getAllClients().subscribe({
      next: (res: APIResponseModel) => {
        this.clientList = res.data;
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
        alert('Failed to load clients. Please try again later.');
      }
    });
  }

  onSaveClient(): void {
    this.clientService.addUpdate(this.clientObj).subscribe({
      next: (res: APIResponseModel) => {
        if (res.result) {
          alert('Client saved successfully.');
          this.loadClient();
          this.onResetForm();
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.error('Error saving client:', err);
        alert('Failed to save the client. Please try again.');
      }
    });
  }

  onEdit(data: Client): void {
    this.clientObj = { ...data };
  }

  onDelete(id: number): void {
    const isDelete = confirm('Are you sure you want to delete this client?');
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe({
        next: (res: APIResponseModel) => {
          if (res.result) {
            alert('Client deleted successfully.');
            this.loadClient();
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.error('Error deleting client:', err);
          alert('Failed to delete the client. Please try again.');
        }
      });
    }
  }

  onResetForm(): void {
    this.clientObj = new Client();
  }
}
