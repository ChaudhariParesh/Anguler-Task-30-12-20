import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutandcssComponent } from './withoutandcss.component';

describe('WithoutandcssComponent', () => {
  let component: WithoutandcssComponent;
  let fixture: ComponentFixture<WithoutandcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutandcssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutandcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
