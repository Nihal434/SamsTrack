import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any='';
  password:any='';

  constructor(private LoginService:LoginService,private router:Router) { }
  login(){
    //call login service
    const loginRequest:any={
      "username":this.username,
      "password":this.password
    }
    this.LoginService.login(loginRequest).subscribe((response)=>{
      // console.log(response);
      if(response!=null){
        this.router.navigate(['/home']);
      }else{
        alert('Invalid Credentials');
        this.router.navigate(['/login']);
      }
    });
  }

}
