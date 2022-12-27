import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedChartBorderWidthComponent } from './stacked-chart-border-width.component';

describe('StackedChartBorderWidthComponent', () => {
  let component: StackedChartBorderWidthComponent;
  let fixture: ComponentFixture<StackedChartBorderWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedChartBorderWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedChartBorderWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
