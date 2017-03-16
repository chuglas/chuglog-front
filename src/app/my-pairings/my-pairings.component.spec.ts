import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPairingsComponent } from './my-pairings.component';

describe('MyPairingsComponent', () => {
  let component: MyPairingsComponent;
  let fixture: ComponentFixture<MyPairingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPairingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPairingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
