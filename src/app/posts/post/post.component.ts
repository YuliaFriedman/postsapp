import {Component, Input, ViewChild} from "@angular/core";
import {PostModel} from "../../store/posts/postModel";
import {Router} from "@angular/router";
import {NavigationService} from "../../navigationService";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
  host: {
    "(click)": "postClicked($event)"
  }
})
export class PostComponent{
  @Input() postModel: PostModel;

  constructor(private navigationService: NavigationService) {
  }

  postClicked($event){
    this.navigationService.navigateToPost(this.postModel.id);
  }
}
