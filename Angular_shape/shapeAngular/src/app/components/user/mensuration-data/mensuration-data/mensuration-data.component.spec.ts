import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensurationDataComponent } from './mensuration-data.component';

describe('MensurationDataComponent', () => {
  let component: MensurationDataComponent;
  let fixture: ComponentFixture<MensurationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensurationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensurationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
