import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminelListComponent } from './criminel-list.component';

describe('CriminelListComponent', () => {
  let component: CriminelListComponent;
  let fixture: ComponentFixture<CriminelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriminelListComponent]
    });
    fixture = TestBed.createComponent(CriminelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
