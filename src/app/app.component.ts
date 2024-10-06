import {Component, OnInit} from '@angular/core';
import {PostsProducer} from "./store/posts/postsProducer";
import {PostsService} from "./posts/postsService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(public postsService: PostsService) {
  }


  title = "aaA";


}
