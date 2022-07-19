import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  dwj = 'dengwenjie'

  constructor() { }

  get() {
    return 'this is service'
  }
}
