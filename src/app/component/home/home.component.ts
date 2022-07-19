import { Component, OnInit } from '@angular/core';

import { StorageService } from 'src/app/services/storage.service';

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

  constructor(public storage: StorageService) {

  }

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

  handleKeywords() {
    this.storage.dwj = 'zww'
    console.log(this.keywords);
  }

}
