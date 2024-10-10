import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {PostModel} from "../../store/posts/postModel";
import {Router} from "@angular/router";
import {NavigationService} from "../../navigationService";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
  host: {
    //"(click)": "postClicked($event)"
    "(click)": "onClick.emit(this.postModel.id)"
  }
})
export class PostComponent implements AfterViewInit{
  @Input() postModel: PostModel;
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('title') titleElmRef: ElementRef;

  constructor(private navigationService: NavigationService) {
  }

  postClicked($event){
    //this.navigationService.navigateToPost(this.postModel.id);
    //this.onClick.emit(this.postModel.id);
  }

  ngAfterViewInit(): void {
    this.titleElmRef.nativeElement.innerHTML = "@@@ " + this.titleElmRef.nativeElement.innerHTML;
  }

  changeColor(color:string){
    this.titleElmRef.nativeElement.style.color = color;
  }
}
