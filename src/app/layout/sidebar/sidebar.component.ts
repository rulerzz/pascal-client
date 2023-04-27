import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  public icons = ['menu', 'home', 'search', 'signpost', 'adb', 'extension', 'cast']
  @Output() changeExplorerContent = new EventEmitter();

  emitClicked(e: any){
    this.changeExplorerContent.emit(e);
  }
}
