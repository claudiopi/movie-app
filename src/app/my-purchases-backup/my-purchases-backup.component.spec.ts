import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { MyPurchasesBackupComponent } from './my-purchases-backup.component';

describe('MyPurchasesBackupComponent', () => {
  let component: MyPurchasesBackupComponent;
  let fixture: ComponentFixture<MyPurchasesBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MyPurchasesBackupComponent, NoopAnimationsModule, FormsModule, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPurchasesBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
