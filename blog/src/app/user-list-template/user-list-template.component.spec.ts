import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTemplateComponent } from './user-list-template.component';

describe('UserListTemplateComponent', () => {
  let component: UserListTemplateComponent;
  let fixture: ComponentFixture<UserListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
