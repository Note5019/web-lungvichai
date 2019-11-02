import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiShowComponent } from './ui-show.component';

describe('UiShowComponent', () => {
  let component: UiShowComponent;
  let fixture: ComponentFixture<UiShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
