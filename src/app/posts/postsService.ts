import {Injectable} from "@angular/core";
import {PostModel} from "../store/posts/postModel";
import {map, mergeMap, Observable, of, tap} from "rxjs";
import {NetworkService} from "../network/networkService";
import {PostsProducer} from "../store/posts/postsProducer";
import {addPost, addPostCompleted, loadPosts, setPosts} from "../store/posts/postsActions";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {NavigationService} from "../navigationService";

@Injectable()
export class PostsService {

  constructor(
    private networkService:NetworkService,
    private postsProducer:PostsProducer,
    private actions$: Actions,
    private navigationService:NavigationService
  ) {
  }

  LoadPosts(){
    this.postsProducer.loadPosts();

    // OPTION 1
    /*let unsubscribe = this.networkService.getPosts().pipe(
      // @ts-ignore
      map((serverPosts:any[]) => serverPosts.map(post => {return {id: "", title: "aaa"} as PostModel})),
    ).subscribe(posts => {
      this.postsProducer.setPosts(posts);
      unsubscribe.unsubscribe();
    });*/
  }

  // OPTION 2
  loadEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadPosts),
    mergeMap((action) => {
      return this.networkService.getPosts().pipe(
        // @ts-ignore
        map((posts:PostModel[]) => setPosts({posts: posts})));
    })));

  getPosts():Observable<PostModel[]>{
    return this.postsProducer.getPosts();
  }

  addPost$ = createEffect(() => this.actions$.pipe(
    ofType(addPost),
    mergeMap((post) => {
      // @ts-ignore
      return this.networkService.addPost(post).pipe(
        map((result:PostModel) => addPostCompleted(result))
      )
    })
  ));

  addPostCompoeted$ = createEffect(() => this.actions$.pipe(
    ofType(addPostCompleted),
    tap((post) => {
      this.navigationService.navigateToPost(post.id);
    })
  ), { dispatch: false });

  addPost(post: PostModel){
    this.postsProducer.addpost(post);
  }
}
