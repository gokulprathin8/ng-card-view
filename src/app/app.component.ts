import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  posts = [
    { title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: '@nature',
      content: 'I saw this tree at hiking today!'
    },
    { title: 'Snowy Mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: '@mountainLover',
      content: 'Here is a photo of a snowy mountain'
    },
    { title: 'Mountain Biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: '@rider',
      content: 'I did some biking today!'
    }
  ]
}
