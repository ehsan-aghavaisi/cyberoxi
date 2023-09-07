import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberoxiAddComponent } from './cyberoxi-add.component';

describe('CyberoxiAddComponent', () => {
  let component: CyberoxiAddComponent;
  let fixture: ComponentFixture<CyberoxiAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberoxiAddComponent]
    });
    fixture = TestBed.createComponent(CyberoxiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
