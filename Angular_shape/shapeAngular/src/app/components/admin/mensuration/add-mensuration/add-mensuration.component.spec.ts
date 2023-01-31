import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMensurationComponent } from './add-mensuration.component';

describe('AddMensurationComponent', () => {
  let component: AddMensurationComponent;
  let fixture: ComponentFixture<AddMensurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMensurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMensurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
