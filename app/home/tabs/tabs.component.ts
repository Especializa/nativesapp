import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import * as application from 'application';

@Component({
    moduleId: module.id,
    selector: 'ns-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public selectedIndex: number;
  constructor(
    @Inject('platform') public platform,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.selectedIndex = this.platform.isAndroid ? 1 : 3;

    if (this.platform.isAndroid) {
      application.android.on(
        application.AndroidApplication.activityBackPressedEvent,
        (args: any) => {
          if (this.selectedIndex !== 1) {
            this.selectedIndex = 1;
            args.cancel = true;
            this.changeDetectorRef.detectChanges();
          }
        }
      );
    }
  }
}
