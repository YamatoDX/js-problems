const CustomClass = function (name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.allElements = [];
};

CustomClass.prototype.push = function (currentElement) {
    this.allElements.push(currentElement);
    return true;
};

CustomClass.prototype.pop = function () {
    const poppedElement = this.allElements.pop();
    return poppedElement;
};

CustomClass.prototype.length = function () {
    return this.allElements.length;
};

CustomClass.prototype.getInfo = function () {
    const allInfoObject = {
        name: this.name,
        age: this.age,
        profession: this.profession,
        allElements: this.allElements
    };
    return allInfoObject;
};

const myFunction = new CustomClass("Piyal", 28, "Web Developer");
console.log(myFunction.push(1));
console.log(myFunction.push(2));
console.log(myFunction.getInfo());

// class methods

class Custom {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.allElements = [];
        this.length = 0;
    }

    push(x) {
        this.allElements.push(x);
        this.length++;
        return true;
    }

    pop() {
        const y = this.allElements.pop();
        return y;
    }

    getInfo() {
        const allInfoObject = {
            name: this.name,
            age: this.age,
            profession: this.profession,
            allElements: this.allElements
        };
        return allInfoObject;
    }
}

console.log("-------------");
const _myFunction = new Custom("Piyal", 28, "Web Developer");
console.log(_myFunction.push(1));
console.log(_myFunction.push(2));
console.log(_myFunction.getInfo());
