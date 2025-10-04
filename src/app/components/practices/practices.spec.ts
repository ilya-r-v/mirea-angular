import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practices } from './practices';

describe('Practices', () => {
  let component: Practices;
  let fixture: ComponentFixture<Practices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Practices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
