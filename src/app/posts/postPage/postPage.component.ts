import {Component, Input, ViewChild} from "@angular/core";
import {PostModel} from "../../store/posts/postModel";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsProducer} from "../../store/posts/postsProducer";
import {Observable} from "rxjs";

@Component({
  selector: "post-page",
  templateUrl: "./postPage.component.html",
  styleUrls: ["./postPage.component.scss"],
})
export class PostPageComponent {

  id = null;
  post$:Observable<PostModel> = null;

  constructor(private activeRoute: ActivatedRoute, private postsProducer:PostsProducer) {

  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    let numberId = Number(this.id);
    if(isNaN(numberId)){

    }
    else{
      this.post$ = this.postsProducer.getPost(numberId)
    }

  }

}
