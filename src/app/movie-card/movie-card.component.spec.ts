import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render 'HELLO WORLD'`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('HELLO WORLD');
  });

  it(`must contain movie!==null to render`, () => {
    component.movie = null;

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.wrapper'))).toBeNull();
  });
});
