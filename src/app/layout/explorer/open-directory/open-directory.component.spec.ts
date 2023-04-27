import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDirectoryComponent } from './open-directory.component';

describe('OpenDirectoryComponent', () => {
  let component: OpenDirectoryComponent;
  let fixture: ComponentFixture<OpenDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
