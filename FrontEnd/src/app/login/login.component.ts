import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailProp="";
  passwordProp="";
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  signin()
  {
     if(this.emailProp =="" && this.passwordProp==""){
  

     }
     else{
      this.ds.signIn({email:this.emailProp, password:this.passwordProp})
      .subscribe((response)=>{
        if(response.status=="ok")
        {

          localStorage.setItem('email', this.emailProp);
          localStorage.setItem('name', response.data[0].name);
          this.router.navigate(['/dev-dashboard']); 

        }
      })
     }
  }
}
