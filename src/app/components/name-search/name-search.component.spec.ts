import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSearchComponent } from './name-search.component';

describe('NameSearchComponent', () => {
  let component: NameSearchComponent;
  let fixture: ComponentFixture<NameSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
