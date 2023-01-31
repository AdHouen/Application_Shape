import { EditMuscleComponent } from './components/admin/muscle/edit-muscle/edit-muscle/edit-muscle.component';
import { ListMuscleComponent } from './components/admin/muscle/list-muscle/list-muscle/list-muscle.component';
import { MuscleComponent } from './components/admin/muscle/muscle/muscle.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMuscleComponent } from './components/admin/muscle/add-muscle/add-muscle/add-muscle.component';

const routes: Routes = [
  {
    path: 'muscle',
    component : MuscleComponent
  },
  {
    path: 'addMuscle',
    component : AddMuscleComponent
  },
  {
    path: 'muscle/:id',
    component : ListMuscleComponent
  },
  {
    path: 'editMuscle/:id',
    component : EditMuscleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
