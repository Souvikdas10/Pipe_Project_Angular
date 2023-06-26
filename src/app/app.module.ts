import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeDisplayComponent } from './Components/pipe-display/pipe-display.component';
import { SquarePipe } from './Pipe/square.pipe';
import { MultiplePipe } from './Pipe/multiple.pipe';
import { ConvertPipe } from './Pipe/convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeDisplayComponent,
    SquarePipe,
    MultiplePipe,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
