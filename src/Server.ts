

import { Comp1 } from '@components/Comp1';

export interface IServer {

    startServer(): void;
    stopServer(): void;

}

class Server implements IServer {

    public port: number;
    public address: string;
    public comp1 = new Comp1();
    public date: string = '';

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
        // this.date = '';
    }

    async startServer(){
        const data = await this.getData();
        console.log(`Starting server at : ${this.address}:${this.port}`);
        return function(){
            //this.date = 5;
        }
    }

    stopServer(): void {};

    async getData(): Promise<string>{
        return '{}';
    }

}

const someServer: IServer =  new Server(8080, 'localhost');
someServer.startServer();