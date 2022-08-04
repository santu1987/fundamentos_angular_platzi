import { Component } from '@angular/core';
//Decorador indicando el template, css
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Gianni';
  edad = 25;
  img ="https://source.unsplash.com/random";
  btnDisabled = true;
  //Trabajando con un objketo para su render en el view
  person = {
    name:"Gianni",
    age:35,
    avatar:this.img,
  }
}
