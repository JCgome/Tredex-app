import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailSalesComponent } from './more-detail-sales.component';

describe('MoreDetailSalesComponent', () => {
  let component: MoreDetailSalesComponent;
  let fixture: ComponentFixture<MoreDetailSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreDetailSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreDetailSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
