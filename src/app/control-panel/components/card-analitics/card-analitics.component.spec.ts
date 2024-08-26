import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnaliticsComponent } from './card-analitics.component';

describe('CardAnaliticsComponent', () => {
  let component: CardAnaliticsComponent;
  let fixture: ComponentFixture<CardAnaliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAnaliticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAnaliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
