import { Component } from '@angular/core';
import { CatService } from '../apis/cat.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  cat = '';
  race = '';
  description = '';

  constructor(private catS: CatService) {}

  ngOnInit() {
    this.generateCat();
  }
  async generateCat() {
    const result = await this.catS.getRandomCat();
    console.log(result);
    this.cat = result[0].url;
    this.race = result[0].breeds[0].name;
    this.description = result[0].breeds[0].description;
    console.log(this.description);
  }
}
