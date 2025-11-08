import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mayuscula } from './mayuscula';

describe('Mayuscula', () => {
  let component: Mayuscula;
  let fixture: ComponentFixture<Mayuscula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mayuscula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mayuscula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
