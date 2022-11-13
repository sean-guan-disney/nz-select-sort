import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-select-custom-template',
  template: `
    <br />
    <nz-select nzAllowClear nzPlaceHolder="Select OS" nzMode="multiple" [nzCustomTemplate]="multipleTemplate" (nzFocus)=onFocus($event)>
      <nz-option nzLabel="Windows" nzValue="windows"></nz-option>
      <nz-option nzLabel="Apple" nzValue="apple"></nz-option>
      <nz-option nzLabel="Android" nzValue="android"></nz-option>
    </nz-select>
    <ng-template #multipleTemplate let-selected>
      <div cdkDrag class="ant-select-selection-item-content" (click)="onClick()">
        <span  nz-icon [nzType]="selected.nzValue"></span>
        {{ selected.nzLabel }}
      </div>
    </ng-template>
  `,
  styles: [
    `
      nz-select {
        width: 100%;
      }
    `,
  ],
})
export class NzDemoSelectCustomTemplateComponent {
  onClick() {
    console.log('onClick');
  }

  onFocus() {
    console.log('onFocus');
  }
}
