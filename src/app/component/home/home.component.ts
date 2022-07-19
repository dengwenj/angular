import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list: string[] = ['111', '222', '333']

  flag: boolean = false
  number: number = 1
  color: string = '#ddd'

  today: number = Date.now()

  constructor() { }

  ngOnInit(): void {
  }

}
