class Person {

    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`My name is ${this.name}`);
    }
}

class Developer extends Person {

    constructor(name, language) {
        super(name);
        this.language = language;
    }

    show() {
        console.log(`I am a ${this.language} developer`);
    }
}

let d1 = new Developer(`Sri`, `JavaScript`);

d1.display();
d1.show();