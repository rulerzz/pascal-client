import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './explorer.component';
import { OpenDirectoryComponent } from './open-directory/open-directory.component';



@NgModule({
  declarations: [
    ExplorerComponent,
    OpenDirectoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ExplorerComponent, OpenDirectoryComponent]
})
export class ExplorerModule { }
