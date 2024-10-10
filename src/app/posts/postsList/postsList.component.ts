import {Component, OnInit, ViewChildren} from "@angular/core";
import {PostsService} from "../postsService";
import {NavigationService} from "../../navigationService";
import {PostComponent} from "../post/post.component";

@Component({
  selector: "posts-list",
  templateUrl: "./postsList.component.html",
  styleUrls: ["./postsList.component.scss"]
})
export class PostsListComponent implements OnInit{

  constructor(public postsService: PostsService, private navigationService: NavigationService) {

  }

  @ViewChildren(PostComponent) posts: PostComponent[];

  ngOnInit(): void {
    this.postsService.LoadPosts();
  }

  showNewPostPage(){
    this.navigationService.navigateToNewPost();
  }

  postClicked(postId:number){
    this.navigationService.navigateToPost(postId);
  }

  changeColor(){
    this.posts.forEach(post => post.changeColor("red"));
  }

}
