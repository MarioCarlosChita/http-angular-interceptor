import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, FormGroup } from "@angular/forms";

@Component({
     selector:'usuario-app', 
     templateUrl:'./usuario-app-component.html',
     styleUrls:['./usuario-app-component.css']
})

export class UsuarioAppComponent  implements OnInit{
     
    oForm:FormGroup;
    constructor(){}
    ngOnInit(): void {}
    
     
}