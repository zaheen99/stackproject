import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StackQuestionComponent} from './stack-question/stack-question.component';
const routes: Routes = [
  { path: '', component: StackQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
