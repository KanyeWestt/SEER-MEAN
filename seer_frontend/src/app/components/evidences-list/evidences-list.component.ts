/*
  Evidence list uses API functions from EvidenceService.ts.
  This file handles the evidence list.
  Can refresh, remove, set active, search by title, and retrieve all evidences.
*/

import { Component, OnInit } from '@angular/core';
import { EvidenceService } from 'src/app/services/evidence.service';

@Component({
  selector: 'app-evidences-list',
  templateUrl: './evidences-list.component.html',
  styleUrls: ['./evidences-list.component.css']
})
export class EvidencesListComponent implements OnInit {

  evidences: any;
  currentEvidence = null;
  currentIndex = -1;
  title = '';

  constructor(private evidenceService: EvidenceService) { }

  ngOnInit(): void {
    this.retrieveEvidences();
  }

  // GET all evidences
  retrieveEvidences(): void {
    this.evidenceService.getAll()
      .subscribe(
        data => {
          this.evidences = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // refreshes evidence list
  refreshList(): void {
    this.retrieveEvidences();
    this.currentEvidence = null;
    this.currentIndex = -1;
  }

  // places current evidence on index
  setActiveEvidence(evidence, index): void {
    this.currentEvidence = evidence;
    this.currentIndex = index;
  }

  // clears all evidences
  removeAllEvidences(): void {
    this.evidenceService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveEvidences();
        },
        error => {
          console.log(error);
        });
  }

  // searches by evidence title
  searchTitle(): void {
    this.evidenceService.findByTitle(this.title)
      .subscribe(
        data => {
          this.evidences = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
