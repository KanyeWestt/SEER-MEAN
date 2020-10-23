import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceDetailsComponent } from './evidence-details.component';

describe('EvidenceDetailsComponent', () => {
  let component: EvidenceDetailsComponent;
  let fixture: ComponentFixture<EvidenceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
