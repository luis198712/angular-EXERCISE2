import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
})
export class TestComponent implements OnInit {
  @Input() inputData: string[];

  constructor() {}

  ngOnInit() {}
}
