import {createReducer, on} from "@ngrx/store";
import {addPostCompleted, setPosts} from "./postsActions";
//import {PostsState} from "./postsState";
import {PostModel} from "./postModel";



const initialState:PostModel[] = [];

export const PostsReducer = createReducer(
  initialState,
  on(setPosts, (state:PostModel[], {posts}) =>
    {
      return posts;
    }
  ),
  on(addPostCompleted, (state, post) =>
  {
    return [...state, post]
  }
  )
)
