import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDisplayComponent } from './pipe-display.component';

describe('PipeDisplayComponent', () => {
  let component: PipeDisplayComponent;
  let fixture: ComponentFixture<PipeDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeDisplayComponent]
    });
    fixture = TestBed.createComponent(PipeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
