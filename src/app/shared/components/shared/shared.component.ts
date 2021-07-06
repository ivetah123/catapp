import { Component, OnInit } from '@angular/core';
import { CatCardComponent } from 'src/app/components/cat-card/cat-card.component';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
