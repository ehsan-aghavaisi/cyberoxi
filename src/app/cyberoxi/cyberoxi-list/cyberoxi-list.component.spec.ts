import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberoxiListComponent } from './cyberoxi-list.component';

describe('CyberoxiListComponent', () => {
  let component: CyberoxiListComponent;
  let fixture: ComponentFixture<CyberoxiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberoxiListComponent]
    });
    fixture = TestBed.createComponent(CyberoxiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
