import { Component } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-my-purchases-backup',
  standalone: true,
  imports: [IGX_LIST_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent],
  templateUrl: './my-purchases-backup.component.html',
  styleUrls: ['./my-purchases-backup.component.scss']
})
export class MyPurchasesBackupComponent {}
