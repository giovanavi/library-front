import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroMainComponent } from './livro-main.component';

describe('LivroMainComponent', () => {
  let component: LivroMainComponent;
  let fixture: ComponentFixture<LivroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
