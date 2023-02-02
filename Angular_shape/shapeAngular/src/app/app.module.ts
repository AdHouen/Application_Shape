import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuscleComponent } from './components/admin/muscle/muscle/muscle.component';
import { AddMuscleComponent } from './components/admin/muscle/add-muscle/add-muscle/add-muscle.component';
import { EditMuscleComponent } from './components/admin/muscle/edit-muscle/edit-muscle/edit-muscle.component';
import { ListMuscleComponent } from './components/admin/muscle/list-muscle/list-muscle/list-muscle.component';
import { MensurationComponent } from './components/admin/mensuration/mensuration/mensuration.component';
import { AddMensurationComponent } from './components/admin/mensuration/add-mensuration/add-mensuration.component';
import { ListMensurationComponent } from './components/admin/mensuration/list-mensuration/list-mensuration.component';
import { EditMensurationComponent } from './components/admin/mensuration/edit-mensuration/edit-mensuration.component';
import { MenuAdminComponent } from './components/admin/menu-admin/menu-admin.component';
import { ExerciceComponent } from './components/admin/exercice/exercice/exercice.component';
import { AddExerciceComponent } from './components/admin/exercice/add-exercice/add-exercice.component';
import { ListExerciceComponent } from './components/admin/exercice/list-exercice/list-exercice.component';
import { EditExerciceComponent } from './components/admin/exercice/edit-exercice/edit-exercice.component';
import { EntrainementComponent } from './components/admin/entrainement/entrainement/entrainement.component';
import { AddEntrainementComponent } from './components/admin/entrainement/add-entrainement/add-entrainement.component';
import { ListEntrainementComponent } from './components/admin/entrainement/list-entrainement/list-entrainement.component';
import { EditEntrainementComponent } from './components/admin/entrainement/edit-entrainement/edit-entrainement.component';
import { PlanningComponent } from './components/user/planning/planning/planning.component';
import { ListPlanningComponent } from './components/user/planning/list-planning/list-planning.component';
import { EditPlanningComponent } from './components/user/planning/edit-planning/edit-planning.component';
import { AddPlanningComponent } from './components/user/planning/add-planning/add-planning.component';
import { UploadFileComponent } from './components/user/upload-file/upload-file.component';
import { ListGallerieComponent } from './components/user/gallerie/list-gallerie/list-gallerie/list-gallerie.component';

@NgModule({
  declarations: [
    AppComponent,
    MuscleComponent,
    AddMuscleComponent,
    EditMuscleComponent,
    ListMuscleComponent,
    MensurationComponent,
    AddMensurationComponent,
    ListMensurationComponent,
    EditMensurationComponent,
    MenuAdminComponent,
    ExerciceComponent,
    AddExerciceComponent,
    ListExerciceComponent,
    EditExerciceComponent,
    EntrainementComponent,
    AddEntrainementComponent,
    ListEntrainementComponent,
    EditEntrainementComponent,
    PlanningComponent,
    ListPlanningComponent,
    EditPlanningComponent,
    AddPlanningComponent,
    UploadFileComponent,
    ListGallerieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
