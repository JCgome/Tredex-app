import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReforceSectionComponent } from './reforce-section.component';

describe('ReforceSectionComponent', () => {
  let component: ReforceSectionComponent;
  let fixture: ComponentFixture<ReforceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReforceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReforceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
