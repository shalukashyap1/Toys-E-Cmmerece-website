import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EroorpageComponent } from './eroorpage.component';

describe('EroorpageComponent', () => {
  let component: EroorpageComponent;
  let fixture: ComponentFixture<EroorpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EroorpageComponent]
    });
    fixture = TestBed.createComponent(EroorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
