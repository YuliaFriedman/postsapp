import {Component, ContentChild, Input, ViewChild} from "@angular/core";
import {NetworkService} from "../../network/networkService";
import {NavigationService} from "../../navigationService";
import {PostModel} from "../../store/posts/postModel";
import {PostsProducer} from "../../store/posts/postsProducer";
import {PostsService} from "../postsService";

@Component({
  selector: "new-post",
  templateUrl: "./newPost.component.html",
  styleUrls: ["./newPost.component.scss"]
})
export class NewPostComponent {

  title:string = "";
  body:string = "";


  constructor(private postsService:PostsService) {
  }

  addPost(){
    this.postsService.addPost({title: this.title, body: this.body, userId: 1});
  }
}
