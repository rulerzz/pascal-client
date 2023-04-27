import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.sass'],
})
export class ExplorerComponent implements OnInit {

  @Input('explorerActivePanel') explorerActivePanel: any;

  constructor() {}

  ngOnInit(): void {}
}
