import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestName } from './test-name';

describe('TestName', () => {
  let component: TestName;
  let fixture: ComponentFixture<TestName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestName]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
