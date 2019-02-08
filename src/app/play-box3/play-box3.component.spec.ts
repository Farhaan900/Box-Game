import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBox3Component } from './play-box3.component';

describe('PlayBox3Component', () => {
  let component: PlayBox3Component;
  let fixture: ComponentFixture<PlayBox3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayBox3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
