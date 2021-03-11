import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackQuestionComponent } from './stack-question/stack-question.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { preload: true, delay: 0 }
  },
  {
    path: 'filter', component: StackQuestionComponent,
    data: { preload: false, delay: 0 }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
