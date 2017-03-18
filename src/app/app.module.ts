import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';

import {NewsModule} from './news/news.module';

import AppRouting from './app.routing';
import { AppComponent } from './app.component';


// import { NewsComponent } from './news/news.component';
// import { NewsListComponent } from './news/news-list/news-list.component';
// import { NewsDetailComponent } from './news/news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NewsModule,
    RouterModule.forRoot(AppRouting)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
