import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsListComponent} from "./posts/postsList/postsList.component";
import {PostPageComponent} from "./posts/postPage/postPage.component";

const routes: Routes = [
  { path: "", component: PostsListComponent },
  {path: "post/:id", component: PostPageComponent},
  {path: "test", component: PostPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
