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

@NgModule({
  declarations: [
    AppComponent,
    MuscleComponent,
    AddMuscleComponent,
    EditMuscleComponent,
    ListMuscleComponent
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
