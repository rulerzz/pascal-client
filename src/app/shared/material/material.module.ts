import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [DragDropModule, MatIconModule],
  exports: [DragDropModule, MatIconModule],
})
export class MaterialModule {}
