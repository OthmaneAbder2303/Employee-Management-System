import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  clientObj : Client = new Client();
  clientList : Client[] = [];

  clientService = inject(ClientService)

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.loadClient();
  }

  loadClient() : void {
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() : void {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel) => {
      if(res.result) {
        alert("Client Created Succes");
        this.loadClient();
        this.clientObj = new Client();
      }
      else {
        alert(res.message);
      }
    })
  }

  onEdit(data:Client) : void {
    this.clientObj = data;
  }

  onDelete(id:number) : void {
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete) {
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel) => {
        if(res.result) {
          alert("Client Deleted Succes");
          this.loadClient();
          this.clientObj = new Client();
        }
        else {
          alert(res.message);
        }
      })
    }
  }

}

