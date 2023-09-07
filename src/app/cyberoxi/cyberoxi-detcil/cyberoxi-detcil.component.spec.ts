import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberoxiDetcilComponent } from './cyberoxi-detcil.component';

describe('CyberoxiDetcilComponent', () => {
  let component: CyberoxiDetcilComponent;
  let fixture: ComponentFixture<CyberoxiDetcilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberoxiDetcilComponent]
    });
    fixture = TestBed.createComponent(CyberoxiDetcilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
