import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { TodoComponent } from 'src/app/todo/todos/todo.component';
import { MuraliComponent } from './murali/murali.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'murali', component: MuraliComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {

}







