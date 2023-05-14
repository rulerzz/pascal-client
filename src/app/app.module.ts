import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WorkspaceComponent } from './layout/workspace/workspace.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ExplorerModule } from './layout/explorer/explorer.module';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { StatusComponent } from './layout/status/status.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    WorkspaceComponent,
    WelcomeComponent,
    StatusComponent,
  ],
  imports: [ ReactiveFormsModule, HttpClientModule, ExplorerModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, CodeEditorModule.forRoot()],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
