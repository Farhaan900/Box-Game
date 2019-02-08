import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBox4Component } from './play-box4.component';

describe('PlayBox4Component', () => {
  let component: PlayBox4Component;
  let fixture: ComponentFixture<PlayBox4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayBox4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
