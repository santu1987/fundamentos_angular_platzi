const username: string = "santu1987";

const sum = (a:number, b:number)=>{
    return a+b;
}

sum(1,1);

//Patron orientado objeto:

class Person {
    age:number;
    lastName:string;

    constructor(age: number, lastName: string){
        this.age = age;
        this.lastName = lastName;
    }
}

//Otra forma sin asignar y declarar:
class Person2 {
  
    constructor(age: number, lastName: string){}
}    

const gianni = new Person(35,"Santucci");

