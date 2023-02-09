import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMensurationDataComponent } from './edit-mensuration-data.component';

describe('EditMensurationDataComponent', () => {
  let component: EditMensurationDataComponent;
  let fixture: ComponentFixture<EditMensurationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMensurationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMensurationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
