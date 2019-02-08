import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBox1Component } from './play-box1.component';

describe('PlayBox1Component', () => {
  let component: PlayBox1Component;
  let fixture: ComponentFixture<PlayBox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayBox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
