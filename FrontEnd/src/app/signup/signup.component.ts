import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { DevdataService } from '../devdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  nameProp="";
  emailProp="";
  passwordProp="";
  mobileNoProp="";
  confirmPassProp="";
  constructor(private ds:DataService, private router:Router, private dvs:DevdataService) { }

  ngOnInit(): void {
   
  }

  signUP()
  { var acFound=false;
    if(this.nameProp!="" && this.emailProp!="" && this.passwordProp!="" && this.mobileNoProp!=""){
    this.ds.signIn({email:this.emailProp.toLowerCase()})
    .subscribe((response)=>{

      if(response.status=="ok"){
        alert("Account Already Exist")
      }
      else{
        if(this.passwordProp==this.confirmPassProp){
                 this.ds.signUp({name:this.nameProp, email:this.emailProp.toLowerCase(), password:this.passwordProp ,phone:this.mobileNoProp})
            .subscribe((response)=>{
              if(response.status=="ok")
              {
                  this.dvs.sendMail({clientemail:this.emailProp,name:this.nameProp}).subscribe(res=>
                    {
                      alert(res.err)
                    })

                  alert("Sign Up Successfull you will be redirected to sign in ");

                  this.router.navigate(['/mainpage/signin']);
              }
            })
          }
          else{
            alert("confirmed password not matched!")
          }
      }


      // if(response.status=="ok")
      // {

      //   response.data.forEach(element => {
      //     if(element.email==this.emailProp){
        
      //       console.log(element.email,this.emailProp)
      //     acFound=true
      //     }
        
      //   });
      // }
      // if(acFound){
      //   alert("Account Already Exist")
      // }
      // else if(this.passwordProp==this.confirmPassProp){
      //        this.ds.signUp({name:this.nameProp, email:this.emailProp, password:this.passwordProp ,phone:this.mobileNoProp})
      //   .subscribe((response)=>{
      //     if(response.status=="ok")
      //     {
      //         alert("Sign Up Successfull you will be redirected to sign in ");
      //         this.router.navigate(['/mainpage/signin']);
      //     }
      //   })
      // }
      // else{
      //   alert("confirmed password not matched!")
      // }
    })
  }
  else{
    alert("fill all filds!")
  }
  
}
}
