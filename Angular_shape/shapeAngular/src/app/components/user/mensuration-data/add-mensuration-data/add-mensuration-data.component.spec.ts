import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMensurationDataComponent } from './add-mensuration-data.component';

describe('AddMensurationDataComponent', () => {
  let component: AddMensurationDataComponent;
  let fixture: ComponentFixture<AddMensurationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMensurationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMensurationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
