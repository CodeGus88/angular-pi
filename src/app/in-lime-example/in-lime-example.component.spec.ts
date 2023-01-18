import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InLimeExampleComponent } from './in-lime-example.component';

describe('InLimeExampleComponent', () => {
  let component: InLimeExampleComponent;
  let fixture: ComponentFixture<InLimeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InLimeExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InLimeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
