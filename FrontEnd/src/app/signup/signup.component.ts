import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  acFound;
  nameProp="";
  emailProp="";
  passwordProp="";
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  signUP(){
  if(this.nameProp!="" && this.emailProp!="" && this.passwordProp!="")
  { 
    this.ds.signIn()
    .subscribe((response)=>{
      if(response.status=="ok")
      {

        response.data.forEach(element => {
          if(element.email==this.emailProp){
            
            this.acFound=false
          }
          else{
            this.acFound=true
          }
        });
      }
      if(response.status=="failed" ||  this.acFound){
        this.ds.signUp({name:this.nameProp, email:this.emailProp, password:this.passwordProp})
      .subscribe((response)=>{
        if(response.status=="ok")
        {
            alert("Sign Up Successfull you will be redirected to sign in ");
            this.router.navigate(['/signin']);
        }
       
      })
       }
       else{
        alert(" Your Account Is Already Created")
       }
      
    })
  }
}
}
