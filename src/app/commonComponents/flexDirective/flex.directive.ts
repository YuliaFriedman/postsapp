import {
  AfterContentInit,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  OnInit,
  TemplateRef
} from "@angular/core";

@Directive({
  selector: "[flex]", // the breakets indicates attribute directive <x flex></x>
  standalone: true
})
export class FlexDirective implements OnInit{

  @Input() flex: string;

constructor(private elemRef: ElementRef) {


}

  ngOnInit(): void {
    this.elemRef.nativeElement.style.display = "flex";
    this.elemRef.nativeElement.style.flexDirection = this.flex;
  }

}
