import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GolfFormComponent } from './golf-form/golf-form.component';
import { GolfListComponent } from './golf-list/golf-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GolfFormComponent,
    GolfListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
