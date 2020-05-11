import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-progress-bar',
  templateUrl: './ngx-progress-bar.component.html',
  styleUrls: ['./ngx-progress-bar.component.scss'],
})
export class NgxProgressBarComponent implements OnInit {
  @Input() showPerc: boolean;
  @Input() width: number;
  @Input() colorMeta: { [key: string]: number[] };

  get widthColor(): string {
    return Object.keys(this.colorMeta).filter((key: string) => {
      return (
        this.colorMeta[key][0] <= this.width &&
        this.width <= this.colorMeta[key][1]
      );
    })[0];
  }

  constructor() {}

  ngOnInit(): void {}
}
