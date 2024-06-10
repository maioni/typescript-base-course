
function returnKeys<T extends Object>(arg: T){

    console.log(Object.keys(arg));
    return arg;

}

returnKeys({
    abc: 'def',
});

interface Person<T> {
    name: string;
    age: number;
    special: T;
}

const John: Person<string> = {
   special: 'This is my special proper',
   name: 'John',
   age: 30,
};

class Observable <T extends Person<string>>{


    subsribe(arg: T){
        console.log(`Subscribed to ${arg.name}`);
    }



}

new Observable<typeof John>().subsribe(John);