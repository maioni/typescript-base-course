

class BaseServer {

    private port: number;
    private address: string;

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    startServer(){
        console.log(`Starting server at : ${this.address}:${this.port}`);
    }

}

class DbServer extends BaseServer {
    constructor(port: number, address: string){
        super(port, address);
        console.log('calling db server');
    }
}

const someServer =  new DbServer(8080, 'localhost');
someServer.startServer();

const somePort = (someServer as any).port;
console.log(somePort);