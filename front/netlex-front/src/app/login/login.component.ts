import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private formBuilder: FormBuilder
    ) { }

  user: string = '';
  password: string = '';
  token: any;
  showToast: boolean = false;
  headerToast: any;
  validEmail: boolean = false;

  login = this.formBuilder.group({
    user: "",
    password: ""});

  ngOnInit(): void {
  }

  varifyEmail(email: string){
   return email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/gi) ? true : false;
  }

  async checkLogin(){
    var json = {
      "email": this.login.value.user,
      "password": this.login.value.password
    };

    if(this.varifyEmail(this.login.value.user)){
      this.validEmail = false;
      await this.loginService.checkLogin(json).toPromise().then(
        result =>{
          sessionStorage.setItem('Auth', result.token)
          this.route.navigate(['/word-frequency'])
         },
         error =>{
           this.showToast = true
           console.log(error)
         }
      )
    }
    else{
      this.validEmail = true;
    }

  }



}
