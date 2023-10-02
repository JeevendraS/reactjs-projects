import config from "../config/config";
import {Client, ID , Databases, Storege, Query} from "appwrite"


export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client);    
    }
}


const service = new Service();
export default service