import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/users.service';
import { Authentication } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:user[]=[] ;
  usersSub: Subscription | undefined
  user2: user[]=[] ;
   ar:boolean;

   public isAuthenticated:boolean | undefined;
public userAuthenticated: any;

signinForm:FormGroup ;
username:FormControl ;
password: FormControl ;



constructor(private fb:FormBuilder,private authService:Authentication,private router :Router){
   this.username=fb.control("",[Validators.minLength(4)])
  this.password=fb.control("",[Validators.required,Validators.minLength(4)]) 
  this.ar=false;
  this.signinForm=fb.group({
  email:this.username,
  password:this.password
 })

}


}
