import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeairDetailsComponent } from './feair-details.component';

describe('FeairDetailsComponent', () => {
  let component: FeairDetailsComponent;
  let fixture: ComponentFixture<FeairDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeairDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeairDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
