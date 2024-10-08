import {Component, ContentChild, HostListener, Input, OnChanges, OnInit, TemplateRef} from "@angular/core";

@Component({
  selector: "virtual-scroll",
  templateUrl: "./virtualScroll.component.html",
  styleUrls: ["./virtualScroll.component.scss"]
})
export class VistualScrollComponent implements OnChanges{

  @Input() numOfItems = 10;
  @Input() itemHeight = 10;
  @Input() buffer = 10;
  @Input() items:any[] = [];

  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  visibleItems: any[] = null;
  scrollTop:number = 0;
  startIndex:number = 0;
  endIndex:number = 0;

  constructor() {

  }

  @HostListener("window:scroll", ['$event'])
  onScroll(event){
    console.log("scroll", event);

    this.scrollTop = event.srcElement.scrollingElement.scrollTop;
    this.calculateVisible();
  }

  ngOnChanges(): void {
    this.calculateVisible();
  }

  calculateVisible(){
    const viewportIndex = Math.floor(this.scrollTop / this.itemHeight);
    this.startIndex = Math.max(0, viewportIndex - this.buffer);
    this.endIndex = Math.min(this.items.length, this.startIndex + this.numOfItems + this.buffer);
    console.log(`start = ${this.startIndex}, end = ${this.endIndex}, top scroll = ${this.scrollTop}, num if items = ${this.items.length}`)
    this.visibleItems = this.items.slice(this.startIndex, this.endIndex);
  }

}
