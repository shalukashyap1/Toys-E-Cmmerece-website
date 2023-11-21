import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasComponent } from './purchas.component';

describe('PurchasComponent', () => {
  let component: PurchasComponent;
  let fixture: ComponentFixture<PurchasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasComponent]
    });
    fixture = TestBed.createComponent(PurchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
