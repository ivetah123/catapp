import { Component } from '@angular/core';
import { CatService } from '../apis/cat.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  breedsArray = [];
  daCat = '';
  constructor(private catS: CatService) {}
  ngOnInit() {
    this.loadBreeds();
  }
  async loadBreeds() {
    const result = await this.catS.getBreeds();
    console.log(result[1].name);
    this.breedsArray = result;
  }
  async selectBreed(breed: string) {
    const result = await this.catS.getCatByBreed(breed);
    this.daCat = result[0];
    console.log(this.daCat);
    
  }

}
