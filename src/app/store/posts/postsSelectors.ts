import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostModel} from "./postModel";
//import {PostsState} from "./postsState";

export const postsSelector = createFeatureSelector<PostModel[]>("posts");

//export const postsSelector = createSelector(postsStateSelector, posts => posts.posts);
