/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotifyComponentComponent } from './notify-component.component';

describe('NotifyComponentComponent', () => {
  let component: NotifyComponentComponent;
  let fixture: ComponentFixture<NotifyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
