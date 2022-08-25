import { Component } from '@angular/core';
//Decorador indicando el template, css
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Gianni';
  edad = 25;
  img ="https://source.unsplash.com/random";
  btnDisabled = true;
  //Trabajando con un objketo para su render en el view
  person = {
    name:"Gianni",
    age:18,
    avatar:this.img,
  }

  //Trabajaando con eventos para el event bingding
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  
}
