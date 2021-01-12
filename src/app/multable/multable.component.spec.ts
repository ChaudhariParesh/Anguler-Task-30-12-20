import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultableComponent } from './multable.component';

describe('MultableComponent', () => {
  let component: MultableComponent;
  let fixture: ComponentFixture<MultableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
