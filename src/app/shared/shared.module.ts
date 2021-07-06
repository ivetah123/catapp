import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from "./components/shared/shared.component";
import { CatCardComponent } from '../components/cat-card/cat-card.component';


@NgModule({
  declarations: [CatCardComponent, SharedComponent],
  imports: [
    CommonModule
  ],
  exports: [CatCardComponent, SharedComponent]
})
export class SharedModule { }
