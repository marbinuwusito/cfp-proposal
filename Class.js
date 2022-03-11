class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  showName(name) {
    console.log(`Hello my name is: ${name}`);
  }

  getLastName() {
    return this.lastname;
  }

  setNewName(newName) {
    this.name = newName;
  }

}

const marbin = new Person('Marbin', 'Orellana');

marbin.setNewName("Melbin");

marbin.showName(marbin.name);

marbin.getLastName();

console.log(marbin.lastname);
