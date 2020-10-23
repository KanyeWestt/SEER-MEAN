import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidencesListComponent } from './evidences-list.component';

describe('EvidencesListComponent', () => {
  let component: EvidencesListComponent;
  let fixture: ComponentFixture<EvidencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidencesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
