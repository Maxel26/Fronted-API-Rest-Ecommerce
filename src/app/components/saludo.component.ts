import { Component } from "@angular/core";



@Component({
    selector: 'app-saludo',
    templateUrl: './saludo.component.html',
    styleUrls : ['./saludo.component.css']
})
export class Saludo {         // SaludoComponent
    saludo = 'La buena sapoperro desde Angular' ;
}     