import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit{

  @Input() files: any;
  @Input() activeView: any;
  @Output() popFile: EventEmitter<any> = new EventEmitter();
  @Output() createNewFile: EventEmitter<any> = new EventEmitter();
  @Output() ViewFile: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

  }

  removeFile(name: any){
    this.popFile.emit(name);
  }

  createNewFileEvent(e: any){
    e.stopPropagation();
    this.createNewFile.emit('Untitled');
  }

  viewContentsOf(fileName: any){
    this.ViewFile.emit(fileName);
  }
}
