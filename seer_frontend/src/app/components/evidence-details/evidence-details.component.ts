/* This file pulls up all the evidence's details.
  Also uses the router dependency.
  Functions need evidence id to be passed.
 */
import { Component, OnInit } from '@angular/core';
import { EvidenceService } from 'src/app/services/evidence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evidence-details',
  templateUrl: './evidence-details.component.html',
  styleUrls: ['./evidence-details.component.css']
})
export class EvidenceDetailsComponent implements OnInit {
  currentEvidence = null;
  message = '';

  constructor(
    private evidenceService: EvidenceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEvidence(this.route.snapshot.paramMap.get('id'));
  }

  // get an evidence by id
  getEvidence(id): void {
    this.evidenceService.get(id)
      .subscribe(
        data => {
          this.currentEvidence = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // set publish to true
  updatePublished(status): void {
    const data = {
      title: this.currentEvidence.title,
      description: this.currentEvidence.description,
      published: status
    };

    this.evidenceService.update(this.currentEvidence.id, data)
      .subscribe(
        response => {
          this.currentEvidence.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  // updates an evidence by id
  updateEvidence(): void {
    this.evidenceService.update(this.currentEvidence.id, this.currentEvidence)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The evidence was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  // deletes an evidence by id
  deleteEvidence(): void {
    this.evidenceService.delete(this.currentEvidence.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/evidences']);
        },
        error => {
          console.log(error);
        });
  }
}