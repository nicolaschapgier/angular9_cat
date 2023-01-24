import { Component, Output, EventEmitter } from '@angular/core';
import { CatModel } from '../models/catmodel';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
  cat: CatModel = {
    name: '',
    race: '',
    image: '',
    date: new Date(),
    survol : true,
  };

  @Output()
  typeOfCat: EventEmitter<any> = new EventEmitter();

  addCatToGlobal(): void {
    this.typeOfCat.emit(this.cat);
  }
  //à exporté dans list kitten
}
