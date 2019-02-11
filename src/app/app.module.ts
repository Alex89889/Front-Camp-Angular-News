import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{path:'', component: HomeComponent},
	{path:'edit', component: EditComponent},
	{path:'add', component: AddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
	RouterModule.forRoot(appRoutes),
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
//
