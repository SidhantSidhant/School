import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeairCardComponent } from './feair-card.component';

describe('FeairCardComponent', () => {
  let component: FeairCardComponent;
  let fixture: ComponentFixture<FeairCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeairCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeairCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
