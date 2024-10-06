import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsListComponent} from "./posts/postsList/postsList.component";
import {PostComponent} from "./posts/post/post.component";

const routes: Routes = [
  { path: "", component: PostsListComponent },
  {path: "post/:id", component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
