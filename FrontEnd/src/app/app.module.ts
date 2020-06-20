import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageHeaderComponent } from './mainpage-header/mainpage-header.component';
import { MainpageFooterComponent } from './mainpage-footer/mainpage-footer.component';
import { MainpageHomeComponent } from './mainpage-home/mainpage-home.component';
import { MainPageComponent } from './main-page/main-page.component';
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

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { WhoYouAreComponent } from './who-you-are/who-you-are.component';
import { DeveloperDashBoardComponent } from './developer-dash-board/developer-dash-board.component';
@NgModule({
  declarations: [
    AppComponent,
    MainpageHeaderComponent,
    MainpageFooterComponent,
    MainpageHomeComponent,
    MainPageComponent,
    LoginComponent,
    ContactComponent,
    SignupComponent,
    AboutUsComponent,
    TermsOfServicesComponent,
    PrivacyPolicyComponent,
    AccessibilityComponent,
    ResourcesComponent,
    CustomerSupportComponent,
    CustomerStoriesComponent,
    BusinessResourcesComponent,
    FreelancersBySkillComponent,
    FindDevelopersComponent,
    WhoYouAreComponent,
    DeveloperDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
