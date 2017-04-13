import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagTabComponent } from './mag-tab.component';

describe('MagTabComponent', () => {
  let component: MagTabComponent;
  let fixture: ComponentFixture<MagTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
