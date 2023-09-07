import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberoxiComponent } from './cyberoxi.component';

describe('CyberoxiComponent', () => {
  let component: CyberoxiComponent;
  let fixture: ComponentFixture<CyberoxiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberoxiComponent]
    });
    fixture = TestBed.createComponent(CyberoxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
