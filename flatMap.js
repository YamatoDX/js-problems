const inputElements = [1, 2, 3, 4, 5];

const legacy = inputElements
    .map(each => [each])
    .reduce((prev, current) => [...prev, ...current], []);

const flat = inputElements.flatMap(each => [each]);

console.log("legacy is", legacy);
console.log("flat is", flat);
