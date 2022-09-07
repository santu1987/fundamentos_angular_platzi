import { Component } from '@angular/core';
import { Product} from './products.model';
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
  /*
  *  Para practicar ngFor
  */
  names: string[] =["Licett","ALan","Gianni"];
  newName:string="";
  /*
  *
  */

  /*
  *  Ngfor para Objetos: Tipandolos con una interface->products.model-ts
  */
     products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg'
    }
  ]
  /***/

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

  addName(){
    this.names.push(this.newName);
    this.newName ="";
  }

  deleteName(index:number){
    this.names.splice(index,1);
  }

}
