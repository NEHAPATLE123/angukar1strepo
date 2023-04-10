import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  framework : string = 'Angular'

  constructor() {}

  ngOnInit(): void {
  }
   
  onFrameWorkChange(eve : Event){
    console.log(eve);
    let val = (eve.target as HTMLElement).innerHTML
    this.framework = val;
    // this.framework = eve
  }
 

}
