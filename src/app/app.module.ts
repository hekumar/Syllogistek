import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PeopleComponent } from './people/people.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { NgbModalModule, NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { AboutComponent } from './about/about.component';
import { AcademiaComponent } from './academia/academia.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PeopleComponent,
    ReadMoreComponent,
    ContactUsFormComponent,
    EnterpriseComponent,
    AboutComponent,
    AcademiaComponent,
    EnrollFormComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbModule,
    NgbCarouselModule
  ],
  entryComponents: [ ReadMoreComponent, EnrollFormComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
