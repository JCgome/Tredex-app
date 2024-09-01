import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPanelComponent } from './sales-panel.component';

describe('SalesPanelComponent', () => {
  let component: SalesPanelComponent;
  let fixture: ComponentFixture<SalesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
