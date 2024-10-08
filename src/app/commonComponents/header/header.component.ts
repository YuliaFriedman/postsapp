import {AfterContentInit, Component, ContentChild, ElementRef, OnInit, TemplateRef} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements AfterContentInit{

  @ContentChild("center") center: ElementRef<any>;

  ngAfterContentInit(): void {
    if(this.center){
      this.center.nativeElement.style.color = "red";
    }
  }



}
