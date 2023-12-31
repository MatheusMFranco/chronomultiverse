import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewlyAddedComponent } from './newly-added.component';

describe('NewlyAddedComponent', () => {
  let component: NewlyAddedComponent;
  let fixture: ComponentFixture<NewlyAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewlyAddedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewlyAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
