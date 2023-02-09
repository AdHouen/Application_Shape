import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceIdeeComponent } from './exercice-idee.component';

describe('ExerciceIdeeComponent', () => {
  let component: ExerciceIdeeComponent;
  let fixture: ComponentFixture<ExerciceIdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceIdeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
