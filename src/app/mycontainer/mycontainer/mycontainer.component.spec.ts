import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycontainerComponent } from './mycontainer.component';

describe('MycontainerComponent', () => {
  let component: MycontainerComponent;
  let fixture: ComponentFixture<MycontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
