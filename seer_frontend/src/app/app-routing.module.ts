import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvidencesListComponent } from './components/evidences-list/evidences-list.component';
import { EvidenceDetailsComponent } from './components/evidence-details/evidence-details.component';
import { AddEvidenceComponent } from './components/add-evidence/add-evidence.component';

const routes: Routes = [
  { path: '', redirectTo: 'evidences', pathMatch: 'full' },
  { path: 'evidences', component: EvidencesListComponent },
  { path: 'evidences/:id', component: EvidenceDetailsComponent },
  { path: 'add', component: AddEvidenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
