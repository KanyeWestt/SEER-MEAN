import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEvidenceComponent } from './components/add-evidence/add-evidence.component';
import { EvidenceDetailsComponent } from './components/evidence-details/evidence-details.component';
import { EvidencesListComponent } from './components/evidences-list/evidences-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEvidenceComponent,
    EvidenceDetailsComponent,
    EvidencesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
