//Problem-01
function filterEvenNumbers(numbers: number[]):number[]{
    const evenNumber = numbers.filter((num)=>num%2===0)
    return evenNumber;
}

const getEvenNumber = filterEvenNumbers([1,2,3,4,5,6]);
//console.log(getEvenNumber);

//problem-02
const reverseString = (text: string):string=>{

    const reverse = text.split('').reverse().join('');
    return reverse;

}

const reverseWord = reverseString("typescript")
//console.log(reverseWord);


//problem-03
type StringOrNumber = string | number;

const checkType = (value:StringOrNumber):string=>{

    if(typeof value ==='string'){
        return "String";
    }
    else{
        return "Number"
    }
}

//console.log(checkType("Hello"))
//console.log(checkType(42))

//problem-04
function getProperty<T, K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
//console.log(getProperty(user, "name"))


//problem-05
interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book,isRead:boolean=true):Book & {isRead: boolean}{
    return {
        ...book,
        isRead,
    };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

//console.log(toggleReadStatus(myBook))

//problem-06
class Person{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name= name;
        this.age= age;
    }
}

class Student extends Person{
    grade: string;

    constructor(name: string, age: number,grade: string){
        super(name, age);
        this.grade =grade;
    }

    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice",20,"A")
//console.log(student.getDetails())

//problem-07
function getIntersection(arr1:number[], arr2: number[]):number[]{

    const result = arr1.filter((num)=>arr2.includes(num));
    return [...new Set(result)]
}

const intersection = getIntersection([1,2, 3, 4, 5], [3, 4, 5, 6, 7]);

//console.log(intersection);