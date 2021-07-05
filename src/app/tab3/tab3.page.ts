import { Component } from '@angular/core';
import { CatService } from '../apis/cat.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public catS: CatService) {}
  retreiveFavs(): any[] {
    return this.catS.favoritesArray;
  }
}
