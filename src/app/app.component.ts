import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'pascal-client';
  @ViewChild('sidebar', { static: false }) sidebar: ElementRef<HTMLElement> =
    {} as ElementRef;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef
  ) {}

  public resizeData = {
    tracking: false,
    startCursorScreenX: null,
    maxWidth: 500,
    minWidth: 0,
    startWidth: 0,
  };

  resize(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.resizeData.startWidth = this.sidebar.nativeElement.offsetWidth;
    this.resizeData.startCursorScreenX = e.screenX;
    this.resizeData.tracking = true;
  }
  mousemove(e: any) {
    if (this.resizeData.tracking) {
      const cursorScreenXDelta =
        e.screenX -
        (this.resizeData.startCursorScreenX
          ? this.resizeData.startCursorScreenX
          : 0);
      let newWidth = Math.min(
        this.resizeData.startWidth + cursorScreenXDelta,
        this.resizeData.maxWidth
      );
      newWidth = Math.max(this.resizeData.minWidth, newWidth);
      this.sidebar.nativeElement.style.width = newWidth + 'px';
    }
  }
  mouseup(e: any) {
    if (this.resizeData.tracking) this.resizeData.tracking = false;
  }
  ngOnInit(): void {}
}
