import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponentsComponent } from './sample-components.component';

describe('SampleComponentsComponent', () => {
  let component: SampleComponentsComponent;
  let fixture: ComponentFixture<SampleComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
