import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Admin } from './admin';

describe('Admin', () => {
  let component: Admin;
  let fixture: ComponentFixture<Admin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Admin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the static route directory', () => {
    expect(fixture.nativeElement.textContent).toContain('Route control room.');
    expect(fixture.nativeElement.textContent).toContain('/user/profile');
    expect(fixture.nativeElement.textContent).toContain('STATIC DATA');
  });
});
