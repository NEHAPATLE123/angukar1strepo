import { Component, OnInit } from '@angular/core';
import { posts } from '../shared/const/post';
import { Ipost } from '../shared/model/student';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  postArray! : Array<Ipost>
  constructor() { }

  ngOnInit(): void {
    this.postArray = posts
    console.log(this.postArray)
  }

}
