import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainpageHomeComponent } from './mainpage-home/mainpage-home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsOfServicesComponent } from './terms-of-services/terms-of-services.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { ResourcesComponent } from './resources/resources.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { CustomerStoriesComponent } from './customer-stories/customer-stories.component';
import { BusinessResourcesComponent } from './business-resources/business-resources.component';
import { FreelancersBySkillComponent } from './freelancers-by-skill/freelancers-by-skill.component';
import { FindDevelopersComponent } from './find-developers/find-developers.component';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';
import { DeveloperDashBoardComponent } from './developer-dash-board/developer-dash-board.component';


const routes: Routes = [{path:'',component:MainPageComponent,
                          children:[{path:'',component:MainpageHomeComponent},
                          {path:'home',component:MainpageHomeComponent},
                          {path:'signin',component:LoginComponent},
                          {path:'contact',component:ContactComponent},
                          {path:'signup',component:SignupComponent},
                          {path:'aboutUs',component:AboutUsComponent},
                          {path:'termsOfService',component:TermsOfServicesComponent},
                          {path:'privacyPolicy',component:PrivacyPolicyComponent},
                          {path:'accessibility',component:AccessibilityComponent},
                          {path:'resources',component:ResourcesComponent},
                          {path:'customerSupport',component:CustomerSupportComponent},
                          {path:'customerStories',component:CustomerStoriesComponent},
                          {path:'businessResources',component:BusinessResourcesComponent},
                          {path:'freelancersBySkill',component:FreelancersBySkillComponent},
                          {path:'findDevelopers',component:FindDevelopersComponent},
                          {path:'who-you-are',component:WhoYouAreComponent}
                         
                          ]
                          },
                          {path:'dev-dashboard',component:DeveloperDashBoardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
