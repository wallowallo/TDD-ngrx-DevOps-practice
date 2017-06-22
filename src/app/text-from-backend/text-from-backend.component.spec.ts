import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFromBackendComponent } from './text-from-backend.component';

describe('TextFromBackendComponent', () => {
  let component: TextFromBackendComponent;
  let fixture: ComponentFixture<TextFromBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFromBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFromBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
