import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `<div>
    <router-outlet></router-outlet>
  </div>
  <footer>&copy; FooBar</footer>`
})
export class AppComponent {
  title = 'app';
}
