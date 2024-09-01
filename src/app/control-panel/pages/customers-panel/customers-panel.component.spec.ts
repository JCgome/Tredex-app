import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPanelComponent } from './customers-panel.component';

describe('CustomersPanelComponent', () => {
  let component: CustomersPanelComponent;
  let fixture: ComponentFixture<CustomersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
