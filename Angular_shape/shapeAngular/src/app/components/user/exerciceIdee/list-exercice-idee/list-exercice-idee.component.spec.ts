import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExerciceIdeeComponent } from './list-exercice-idee.component';

describe('ListExerciceIdeeComponent', () => {
  let component: ListExerciceIdeeComponent;
  let fixture: ComponentFixture<ListExerciceIdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExerciceIdeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExerciceIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
