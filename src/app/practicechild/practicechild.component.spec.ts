import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticechildComponent } from './practicechild.component';

describe('PracticechildComponent', () => {
  let component: PracticechildComponent;
  let fixture: ComponentFixture<PracticechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
