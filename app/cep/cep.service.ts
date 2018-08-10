import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { Cep } from './cep.model';

@Injectable()
export class CepService {
    private urlBase:String = 'https://viacep.com.br/ws';
    
    constructor(private http:HttpClient){

    };

    getCep(cep:string){
        let url = `${this.urlBase}/${cep}/json/`;
        return this.http.get(url, {headers: this.createRequestHeader()})
    }

    private createRequestHeader():HttpHeaders {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
         });

        return headers;
    }
}