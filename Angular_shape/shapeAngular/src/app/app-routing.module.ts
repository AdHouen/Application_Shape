import { EditExerciceComponent } from './components/admin/exercice/edit-exercice/edit-exercice.component';
import { ListExerciceComponent } from './components/admin/exercice/list-exercice/list-exercice.component';
import { AddExerciceComponent } from './components/admin/exercice/add-exercice/add-exercice.component';
import { ExerciceComponent } from './components/admin/exercice/exercice/exercice.component';
import { EditMensurationComponent } from './components/admin/mensuration/edit-mensuration/edit-mensuration.component';
import { ListMensurationComponent } from './components/admin/mensuration/list-mensuration/list-mensuration.component';
import { AddMensurationComponent } from './components/admin/mensuration/add-mensuration/add-mensuration.component';
import { MensurationComponent } from './components/admin/mensuration/mensuration/mensuration.component';
import { EditMuscleComponent } from './components/admin/muscle/edit-muscle/edit-muscle/edit-muscle.component';
import { ListMuscleComponent } from './components/admin/muscle/list-muscle/list-muscle/list-muscle.component';
import { MuscleComponent } from './components/admin/muscle/muscle/muscle.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMuscleComponent } from './components/admin/muscle/add-muscle/add-muscle/add-muscle.component';

const routes: Routes = [
  // DEBUT - ABONNEMENT
  {
    path: 'abonnement',
    component : MensurationComponent
  },
  {
    path: 'addAbonnement',
    component : AddMensurationComponent
  },
  {
    path: 'abonnement/:id',
    component : ListMensurationComponent
  },
  {
    path: 'editAbonnement/:id',
    component : EditMensurationComponent
  },
  // FIN - ABONNEMENT

   // DEBUT - EXERCICE
   {
    path: 'exercice',
    component : ExerciceComponent
  },
  {
    path: 'addExercice',
    component : AddExerciceComponent
  },
  {
    path: 'exercice/:id',
    component : ListExerciceComponent
  },
  {
    path: 'editExercice/:id',
    component : EditExerciceComponent
  },
  // FIN - EXERCICE

  // DEBUT - MENSURATION
  {
    path: 'mensuration',
    component : MensurationComponent
  },
  {
    path: 'addMensuration',
    component : AddMensurationComponent
  },
  {
    path: 'mensuration/:id',
    component : ListMensurationComponent
  },
  {
    path: 'editMensuration/:id',
    component : EditMensurationComponent
  },
  // FIN - MENSURATION

  // DEBUT - MUSCLE
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
  // FIN - MUSCLE


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
