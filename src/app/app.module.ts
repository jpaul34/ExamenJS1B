import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {MatDatepickerModule, MatNativeDateModule, MatRadioModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { ActorArruselComponent } from './actor/actor-arrusel/actor-arrusel.component';
import { ActorCardComponent } from './actor/actor-card/actor-card.component';
import { ActorFormComponent } from './actor/actor-form/actor-form.component';
import { ActorInfoComponent } from './actor/actor-info/actor-info.component';
import { PeliculaFormComponent } from './pelicula/pelicula-form/pelicula-form.component';
import { PeliculaTableComponent } from './pelicula/pelicula-table/pelicula-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorArruselComponent,
    ActorCardComponent,
    ActorFormComponent,
    ActorInfoComponent,
    PeliculaFormComponent,
    PeliculaTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    InputTextModule,
    AccordionModule,
    TableModule,
    CardModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
