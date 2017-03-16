import { Injectable } from '@angular/core';

@Injectable()
export class StylingService {

  constructor() { }

  expandedInfoDrawer: boolean = false;

  expandedInfo() {
    console.log("and in here")
    if (this.expandedInfoDrawer === true) {
      this.expandedInfoDrawer = false;
    }
    else if (this.expandedInfoDrawer === false) {
      this.expandedInfoDrawer = true;
    }
  }


}
