import { LoginComponent } from './components/user/login/login/login.component';
import { ListMensurationDataComponent } from './components/user/mensuration-data/list-mensuration-data/list-mensuration-data.component';
import { AddMensurationDataComponent } from './components/user/mensuration-data/add-mensuration-data/add-mensuration-data.component';
import { EditMensurationDataComponent } from './components/user/mensuration-data/edit-mensuration-data/edit-mensuration-data.component';
import { MensurationDataComponent } from './components/user/mensuration-data/mensuration-data/mensuration-data.component';
import { ContactComponent } from './components/user/contact/contact/contact.component';
import { ExerciceIdeeComponent } from './components/user/exerciceIdee/exercice-idee/exercice-idee.component';
import { CalculBmiComponent } from './components/user/calcul-bmi/calcul-bmi/calcul-bmi.component';
import { AccueilComponent } from './components/user/accueil/accueil.component';
import { UploadFileComponent } from './components/user/upload-file/upload-file.component';
import { PlanningComponent } from './components/user/planning/planning/planning.component';
import { ListEntrainementComponent } from './components/admin/entrainement/list-entrainement/list-entrainement.component';
import { AddEntrainementComponent } from './components/admin/entrainement/add-entrainement/add-entrainement.component';
import { EntrainementComponent } from './components/admin/entrainement/entrainement/entrainement.component';
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
import { EditEntrainementComponent } from './components/admin/entrainement/edit-entrainement/edit-entrainement.component';

const routes: Routes = [
   // DEBUT - EXERCICE
   {
    path:'entrainement',
    component: EntrainementComponent
   },
   {
    path:'addEntrainement',
    component: AddEntrainementComponent
   },
   {
    path:'entrainement/:id',
    component: ListEntrainementComponent
   },
   {
    path:'editEntrainement/:id',
    component: EditEntrainementComponent
   },
   // FIN - ENTRAINEMENT

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

  // PLANNING
  {
    path : 'planning',
    component: PlanningComponent
  },

  // GALLERIE
  {
    path: 'gallerie',
    component:UploadFileComponent

  },

   // ACCUEIL
   {
    path: 'accueil',
    component:AccueilComponent

  },
  {
    path: '',
    component:AccueilComponent

  },

  // LOGIN
  {
    path: 'login',
    component:LoginComponent

  },


   // BMI
   {
    path: 'bmi',
    component:CalculBmiComponent

  },

   // EXERCICE IDEE
   {
    path: 'exerciceIdee',
    component:ExerciceIdeeComponent

  },
   // CONTACT
   {
    path: 'contact',
    component:ContactComponent

  },

  // MENSURATION DATA
  {
    path: 'mensurationData',
    component:MensurationDataComponent

  },
  {
    path: 'editMensurationData/:id',
    component : EditMensurationDataComponent

  },
  {
    path: 'ajouterMensurationData',
    component : AddMensurationDataComponent
  },
  {
    path: 'mensurationData/:id',
    component : ListMensurationDataComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
