import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMensurationComponent } from './edit-mensuration.component';

describe('EditMensurationComponent', () => {
  let component: EditMensurationComponent;
  let fixture: ComponentFixture<EditMensurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMensurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMensurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
