import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagTabsComponent } from './mag-tabs.component';

describe('MagTabsComponent', () => {
  let component: MagTabsComponent;
  let fixture: ComponentFixture<MagTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
