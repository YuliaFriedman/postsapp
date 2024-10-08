import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {PostModel} from "./postModel";
import {addPost, loadPosts, setPosts} from "./postsActions";
import {postsSelector} from "./postsSelectors";
import {map, Observable} from "rxjs";

@Injectable()
export class PostsProducer{
  constructor(private store: Store) {
  }

  loadPosts(){
    this.store.dispatch(loadPosts());
  }

  setPosts(posts: PostModel[]){
    this.store.dispatch(setPosts({posts}));
  }

  getPosts():Observable<PostModel[]>{
    return this.store.select(postsSelector);
  }

  getPost(id: number):Observable<PostModel>{
    return this.store.select(postsSelector).pipe(
      map(posts => posts.find(post => post.id === id))
    );
  }

  addpost(post:PostModel){
    this.store.dispatch(addPost(post));
  }
}
