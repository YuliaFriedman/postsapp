import {Component, Input, OnInit} from "@angular/core";
import {PostModel} from "../../store/posts/postModel";
import {PostsService} from "../postsService";

@Component({
  selector: "posts-list",
  templateUrl: "./postsList.component.html",
  styleUrls: ["./postsList.component.scss"]
})
export class PostsListComponent implements OnInit{

  constructor(public postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.LoadPosts();
  }

}
