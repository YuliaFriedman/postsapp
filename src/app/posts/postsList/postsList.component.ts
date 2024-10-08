import {Component, OnInit} from "@angular/core";
import {PostsService} from "../postsService";
import {NavigationService} from "../../navigationService";

@Component({
  selector: "posts-list",
  templateUrl: "./postsList.component.html",
  styleUrls: ["./postsList.component.scss"]
})
export class PostsListComponent implements OnInit{

  constructor(public postsService: PostsService, private navigationService: NavigationService) {

  }

  ngOnInit(): void {
    this.postsService.LoadPosts();
  }

  showNewPostPage(){
    this.navigationService.navigateToNewPost();
  }

}
