import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-designation',
  imports: [CommonModule, FormsModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  designationList : IDesignation[] = [];
  masterService = inject(MasterService);

  ngOnInit():void {
    this.masterService.getDesignations().subscribe((res:APIResponseModel) => {
      this.designationList = res.data;
    },error=>{
      alert("API error / Network Down")
    });
  }


}
