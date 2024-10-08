import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class NavigationService{

 constructor(private router:Router) {
 }

 navigateToPost(id: number){
   this.router.navigate(["/post", id]);
 }

 navigateToNewPost(){
   this.router.navigate(["/newpost"]);
 }

}
