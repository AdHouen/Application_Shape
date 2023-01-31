import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMuscleComponent } from './list-muscle.component';

describe('ListMuscleComponent', () => {
  let component: ListMuscleComponent;
  let fixture: ComponentFixture<ListMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMuscleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
