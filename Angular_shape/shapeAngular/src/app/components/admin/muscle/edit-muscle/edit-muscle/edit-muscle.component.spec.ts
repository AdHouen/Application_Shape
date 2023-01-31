import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMuscleComponent } from './edit-muscle.component';

describe('EditMuscleComponent', () => {
  let component: EditMuscleComponent;
  let fixture: ComponentFixture<EditMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMuscleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
