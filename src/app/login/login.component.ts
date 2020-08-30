import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = new FormGroup({
    "usuario": new FormControl("",Validators.required),
    "senha" : new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  public limpar (): void {
    console.log("limpanado");
  }

  public logar(): void {
    console.log("logando..")
  }

}
