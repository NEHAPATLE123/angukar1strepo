import { Component, OnInit } from '@angular/core';
import { Istudent } from '../shared/model/student';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {

  skillsArray: Array<string> = ["html", "ts", "js", "angular"]
  

  constructor() { }

  ngOnInit(): void {
  }

}
