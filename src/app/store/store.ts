//import {PostsState} from "./posts/postsState";
import {ActionReducer} from "@ngrx/store";
import {PostsReducer} from "./posts/postsReducer";
import {PostModel} from "./posts/postModel";

export interface AppState {
  posts: PostModel[]
}

export interface AppStore {
  posts: ActionReducer<PostModel[]>
}

export const appStore: AppStore = {
  posts: PostsReducer
}
