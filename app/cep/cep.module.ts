import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {NativeScriptFormsModule} from "nativescript-angular/forms"

import { CepRoutingModule } from "~/cep/cep-routing.module";
import { CepComponent } from "~/cep/cep.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        CepRoutingModule
    ],
    declarations: [
        CepComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CepModule { }
