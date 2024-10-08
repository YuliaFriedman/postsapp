import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {setPosts} from "./postsActions";
import {map, mergeMap} from "rxjs";
import {NetworkService} from "../../network/networkService";
import {PostModel} from "./postModel";

@Injectable()
export class PostsEffects{

  constructor(private actions$: Actions, private networkService:NetworkService) {
  }

  loadEffect$ = createEffect(() => this.actions$.pipe(
    ofType(setPosts),
    mergeMap(() => this.networkService.getPosts().pipe(
      map((posts) => {return {id: "", title: "aaa"} as PostModel}))
    ),

  ));
}

