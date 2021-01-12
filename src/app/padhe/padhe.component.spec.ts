import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadheComponent } from './padhe.component';

describe('PadheComponent', () => {
  let component: PadheComponent;
  let fixture: ComponentFixture<PadheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
