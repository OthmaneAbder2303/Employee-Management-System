import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj : any = {
    username:'',
    password:''
  };

  router = inject(Router)

  onLogin() {
    if(this.loginObj.username == 'othmane' && this.loginObj.password == "1234") {
      this.router.navigateByUrl('/master')
      localStorage.setItem('EMS', this.loginObj.username)
    } else {
      alert("Wrong Credential")
    }
  }

}
