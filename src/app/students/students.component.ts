import { Component, OnInit } from '@angular/core';
import { Istudent } from '../shared/model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  countryinfo: Istudent[] = [
    {
        name: "USA",
        population: 331002651,
        area: 9833520,
        capital: "Washington, D.C.",
        language: "English"
    },
    {
        name: "Canada",
        population: 37411047,
        area: 9984670,
        capital: "Ottawa",
        language: "English and French"
    },
    {
        name: "Mexico",
        population: 127575529,
        area: 1964375,
        capital: "Mexico City",
        language: "Spanish"
    },
    {
        name: "France",
        population: 66710000,
        area: 640679,
        capital: "Paris",
        language: "French"
    },
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
