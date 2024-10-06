import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PostModel} from "../store/posts/postModel";

export enum Urls {
  allPosts= "https://jsonplaceholder.typicode.com/posts"
}

@Injectable()
export class NetworkService{
  constructor(private http: HttpClient) {
  }

  getPosts(){
    return this.http.get(Urls.allPosts);
  }
}
