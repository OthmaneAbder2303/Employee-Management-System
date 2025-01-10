import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';
import { DesignationComponent } from './components/designation/designation.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RolesComponent, DesignationComponent, MasterComponent, ClientProjectComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngApp';
}
