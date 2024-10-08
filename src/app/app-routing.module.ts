import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsListComponent} from "./posts/postsList/postsList.component";
import {PostPageComponent} from "./posts/postPage/postPage.component";
import {NewPostComponent} from "./posts/newPost/newPost.component";

const routes: Routes = [
  { path: "", component: PostsListComponent },
  {path: "post/:id", component: PostPageComponent},
  {path: "newpost", component: NewPostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
