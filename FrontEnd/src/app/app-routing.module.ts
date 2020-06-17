import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainpageHomeComponent } from './mainpage-home/mainpage-home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [{path:'',component:MainPageComponent,
                          children:[{path:'',component:MainpageHomeComponent},
                          {path:'home',component:MainpageHomeComponent},
                          {path:'signin',component:LoginComponent},
                          {path:'contact',component:ContactComponent},
                          {path:'signup',component:SignupComponent}
                          ]
                          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
