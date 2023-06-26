import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeDisplayComponent } from './Components/pipe-display/pipe-display.component';

const routes: Routes = [
  {path:"",redirectTo:"dis",pathMatch:"full"},
  {path:"dis",component:PipeDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
