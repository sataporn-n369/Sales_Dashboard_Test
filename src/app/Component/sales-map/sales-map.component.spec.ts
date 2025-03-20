import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMapComponent } from './sales-map.component';

describe('SalesMapComponent', () => {
  let component: SalesMapComponent;
  let fixture: ComponentFixture<SalesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
