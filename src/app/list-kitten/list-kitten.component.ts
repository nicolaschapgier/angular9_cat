import { Component, Output, EventEmitter } from '@angular/core';
import { CatModel } from '../models/catmodel';
@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent {
  catSPA: CatModel[] = [
    {
      name: 'Hasbulla',
      race: 'Russe',
      date: new Date(),
      image:
        'https://i.pinimg.com/736x/85/3b/eb/853beb1ca96bb4af58169ae4d28ad2fd.jpg',
      survol: true,
    },
    {
      name: 'Hasbu',
      race: 'Russian',
      date: new Date(),
      image: 'https://pbs.twimg.com/media/E8PvXDdUUAEs4oE.jpg',
      survol: true,
    },
  ];

  // newCat: any = [];
  // selectedCat!: any;

  onGetCat(event: any): void {
    // this.newCat = event;
    this.catSPA.push(event);

  }

  @Output() catToAdopt: EventEmitter<any> = new EventEmitter();
  //à exporter dans user-kitten

  addToAdopt(cat: any): void {
    // this.selectedCat = cat;
    this.catToAdopt.emit(cat);
    console.log(cat);
    this.catSPA = this.catSPA.filter((item) => item !== cat);
  }

  printInfos(item: any) {
    console.log('coucou');
    console.log(item);
    item.survol = !item.survol
  }
}
