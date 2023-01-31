import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMensurationComponent } from './list-mensuration.component';

describe('ListMensurationComponent', () => {
  let component: ListMensurationComponent;
  let fixture: ComponentFixture<ListMensurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMensurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMensurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
