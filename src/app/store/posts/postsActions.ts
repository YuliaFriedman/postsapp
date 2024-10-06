import {createAction, props} from "@ngrx/store";
import {PostModel} from "./postModel";

export const loadPosts = createAction("Get all posts");

export const setPosts = createAction(
  "Set Posts",
  props<{posts: PostModel[]}>()
);

export const addPost = createAction(
  "Add Post",
  props<PostModel>()
);

export const addPostCompleted = createAction(
  "Add Post Completed",
  props<PostModel>()
);


