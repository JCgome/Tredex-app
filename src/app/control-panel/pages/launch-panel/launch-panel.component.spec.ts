import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPanelComponent } from './launch-panel.component';

describe('LaunchPanelComponent', () => {
  let component: LaunchPanelComponent;
  let fixture: ComponentFixture<LaunchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
