import { Component, OnInit } from "@angular/core";
import { alert } from 'ui/dialogs';

import { CepService } from '~/cep/cep.service';

import { Cep } from './cep.model';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./cep.component.html",
    providers:[CepService]
})
export class CepComponent implements OnInit {

    cep:Cep = new Cep();

    constructor(private cepService:CepService) {

    }

    ngOnInit(): void {
    }

    public getCep(){
        this.cepService.getCep(this.cep.cep)
            .subscribe((result) => {
                console.log('RESULT', this.cep.cep);
                this.cep = Object.assign(result);
            }, (error) => {
                console.log('ERROR', this.cep.cep);
                let options = {
                    title: "CEP",
                    message: `O CEP ${this.cep.cep} não foi encontrado`,
                    okButtonText: "OK"
                };

                alert(options).then(() => {
                    console.log("O CEP não foi encontrado!");
                });
            });
    }
}
