import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPairingComponent } from './add-pairing.component';

describe('AddPairingComponent', () => {
  let component: AddPairingComponent;
  let fixture: ComponentFixture<AddPairingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPairingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
