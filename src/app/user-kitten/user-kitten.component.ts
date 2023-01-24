import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent {
  catToAdopt2: any[] = [];
  catAdopted: any;
  onGetAdopt(event: any): void {
    // this.catAdopted = event;
    this.catToAdopt2.push(event);
  }
}

