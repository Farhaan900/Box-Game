import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBox2Component } from './play-box2.component';

describe('PlayBox2Component', () => {
  let component: PlayBox2Component;
  let fixture: ComponentFixture<PlayBox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayBox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
