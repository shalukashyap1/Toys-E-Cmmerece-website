import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiongamesComponent } from './actiongames.component';

describe('ActiongamesComponent', () => {
  let component: ActiongamesComponent;
  let fixture: ComponentFixture<ActiongamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiongamesComponent]
    });
    fixture = TestBed.createComponent(ActiongamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
