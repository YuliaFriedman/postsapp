import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NetworkService} from "./network/networkService";
import {PostsService} from "./posts/postsService";
import {PostsProducer} from "./store/posts/postsProducer";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {appStore} from "./store/store";
import {EffectsModule} from "@ngrx/effects";
import {PostComponent} from "./posts/post/post.component";
import {PostsListComponent} from "./posts/postsList/postsList.component";
import {NavigationService} from "./navigationService";
import {PostPageComponent} from "./posts/postPage/postPage.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsListComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(appStore),
    EffectsModule.forRoot([PostsService])
  ],
  providers: [
    NetworkService,
    PostsService,
    PostsProducer,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
