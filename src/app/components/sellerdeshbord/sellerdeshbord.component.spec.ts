import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerdeshbordComponent } from './sellerdeshbord.component';

describe('SellerdeshbordComponent', () => {
  let component: SellerdeshbordComponent;
  let fixture: ComponentFixture<SellerdeshbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerdeshbordComponent]
    });
    fixture = TestBed.createComponent(SellerdeshbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
