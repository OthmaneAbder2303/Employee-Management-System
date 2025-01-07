import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

    name : string = "Othmane";
    age : number = 20; 
    inputType : string = "checkbox";
    selectedState : string = "null";
}
 