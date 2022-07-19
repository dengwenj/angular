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

  keywords = 'keywords'

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    console.log(this)
    this.number = 2
  }
  // handleClick = () => {
  //   console.log(this);
  // }

  handleKeydown(e: any) {
    console.log(e.target.value);

    console.log(this);

  }

}
