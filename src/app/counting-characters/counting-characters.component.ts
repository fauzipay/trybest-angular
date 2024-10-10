import { Component } from '@angular/core';

@Component({
  selector: 'app-counting-characters',
  templateUrl: './counting-characters.component.html',
  styleUrls: ['./counting-characters.component.css']
})
export class CountingCharactersComponent {
  paragraph: string = '';
  vowelCount: number = 0;
  consonantCount: number = 0;

  countCharacters(): void {
    const vowels = 'aeiouAEIOU';
    this.vowelCount = 0;
    this.consonantCount = 0;

    for (let char of this.paragraph) {
      if (vowels.includes(char)) {
        this.vowelCount++;
      } else if (char.match(/[a-zA-Z]/)) {
        this.consonantCount++;
      }
    }
  }
}
