import { Component, OnInit } from '@angular/core';
import { EvidenceService } from 'src/app/services/evidence.service';

@Component({
  selector: 'app-add-evidence',
  templateUrl: './add-evidence.component.html',
  styleUrls: ['./add-evidence.component.css']
})
export class AddEvidenceComponent implements OnInit {
  // evidence schema
  evidence = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private evidenceService: EvidenceService) { }

  ngOnInit(): void {
  }

  // passes the evidence schema as response
  saveEvidence(): void {
    const data = {
      title: this.evidence.title,
      description: this.evidence.description
    };

    this.evidenceService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  // default evidence
  newEvidence(): void {
    this.submitted = false;
    this.evidence = {
      title: '',
      description: '',
      published: false
    };
  }

}
