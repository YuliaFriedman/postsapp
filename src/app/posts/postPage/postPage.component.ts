import {Component, Input, ViewChild} from "@angular/core";
import {PostModel} from "../../store/posts/postModel";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsProducer} from "../../store/posts/postsProducer";

@Component({
  selector: "post",
  templateUrl: "./postPage.component.html",
  styleUrls: ["./postPage.component.scss"],
})
export class PostPageComponent {

  id = null;
  post$: ;

  constructor(private activeRoute: ActivatedRoute, private postsProducer:PostsProducer) {

  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.postsProducer.getPost(this.id)
  }

}
