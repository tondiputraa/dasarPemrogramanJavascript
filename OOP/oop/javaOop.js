function person(firstName,lastName,name){
    this.firstName=firstName;
    this.lastName=lastName;
    this.sayHello = function(name){
        console.log(`Hello ${name}, My first name is ${this.firstName} and My last name is ${this.lastName}`);
    }
    }

    let tondi = new person ('Tondi','Putra');
    tondi.sayHello("Nafis")