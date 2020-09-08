import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioDto } from 'src/app/model/usuario-dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cms-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public formularioUsuario = new FormGroup({
    "nome": new FormControl("",Validators.required),
    "imagemDePerfil": new FormControl(""),
    "matricula": new FormControl("",Validators.required),
    "email": new FormControl(""),
    "usuario": new FormControl("",Validators.required),
    "senha": new FormControl("",Validators.required),
    "idSetor": new FormControl("", Validators.required),
    "ramal": new FormControl(""),
    "perfil": new FormControl("",Validators.required),
    "dataNascimento": new FormControl("")
  })

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  public cadastrarUsuario():void {
    if(this.formularioUsuario.valid) {
      this.usuarioService.cadastrarUsuario(this.formularioUsuario.value);
    }
  }

}
