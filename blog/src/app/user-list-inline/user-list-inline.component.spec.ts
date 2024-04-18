import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListInlineComponent } from './user-list-inline.component';

describe('UserListInlineComponent', () => {
  let component: UserListInlineComponent;
  let fixture: ComponentFixture<UserListInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListInlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
