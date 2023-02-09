import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMensurationDataComponent } from './list-mensuration-data.component';

describe('ListMensurationDataComponent', () => {
  let component: ListMensurationDataComponent;
  let fixture: ComponentFixture<ListMensurationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMensurationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMensurationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
