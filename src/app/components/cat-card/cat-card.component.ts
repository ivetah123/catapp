import { Component, Input, OnInit } from '@angular/core';
import { CatService } from 'src/app/apis/cat.service';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
})
export class CatCardComponent implements OnInit {
  @Input() catObject: any;
  constructor(private catS: CatService) { }

  ngOnInit() { }
  
  handleClick() {
    this.catS.addToFav(this.catObject);
    // Audio
    const sound = new Audio();
    sound.src = '../../../assets/sounds/love.mp3';
    sound.load();
    sound.play();
  }
}