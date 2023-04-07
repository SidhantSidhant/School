import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeairComponent } from './feair.component';

describe('FeairComponent', () => {
  let component: FeairComponent;
  let fixture: ComponentFixture<FeairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
