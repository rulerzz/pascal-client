import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit{
  title: string = 'pascal-client';
  public explorerActivePanel = 'home';
  @ViewChild('explorer', { static: false }) explorer: ElementRef<HTMLElement> =
    {} as ElementRef;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}

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
    this.resizeData.startWidth = this.explorer.nativeElement.offsetWidth;
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
      this.explorer.nativeElement.style.width = newWidth + 'px';
    }
  }
  mouseup(e: any) {
    if (this.resizeData.tracking) this.resizeData.tracking = false;
  }
  ngOnInit(): void {
    this.toggleActiveTheme();
  }
  toggleActiveTheme() {
    let html = this.document.getElementsByTagName('html')[0];
    if (html.classList.length === 0) html.classList.add('default');
    else if (html.classList.length > 0 && html.classList.contains('default')) {
      html.classList.remove('default');
      html.classList.add('light');
    } else if (html.classList.length > 0 && html.classList.contains('light')) {
      html.classList.remove('light');
      html.classList.add('default');
    }
  }
  changeExplorerContent(e: any){
    this.explorerActivePanel = e;

    console.log(this.explorerActivePanel)
  }
}
