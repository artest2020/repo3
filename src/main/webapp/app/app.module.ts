import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Repo3SharedModule } from 'app/shared/shared.module';
import { Repo3CoreModule } from 'app/core/core.module';
import { Repo3AppRoutingModule } from './app-routing.module';
import { Repo3HomeModule } from './home/home.module';
import { Repo3EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Repo3SharedModule,
    Repo3CoreModule,
    Repo3HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Repo3EntityModule,
    Repo3AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Repo3AppModule {}
