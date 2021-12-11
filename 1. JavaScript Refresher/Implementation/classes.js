class Human {
  constructor() {
    this.gender = `M`;
  }

  printGender() {
    console.log(this.gender);
  }
}

// Inherits the Human class in Person Class
class Person extends Human {
  constructor() {
    super();
    this.name = `Adnan`;
    this.gender = `Male`;
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();

// * Newer Syntax

class People {
  gend = `M`;

  print_gender = () => {
    console.log(this.gend);
  };
} 

class Indiviual extends People {
  iName = `Naeem`;
  gend = `Male`;

  print_name = () => {
    console.log(this.iName);
  };
}

const individual = new Indiviual();
individual.print_name();
individual.print_gender();
