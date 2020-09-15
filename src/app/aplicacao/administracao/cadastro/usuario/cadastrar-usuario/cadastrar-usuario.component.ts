import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Setor } from 'src/app/model/setor';
import { PerfilService } from 'src/app/services/perfil.service';
import { SetorService } from 'src/app/services/setor.service';
@Component({
  selector: 'cms-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  public setores: Setor[];

  public perfis: Array<string>;

  public formulario: FormGroup = new FormGroup({
    "nome": new FormControl("", Validators.required),
    "matricula": new FormControl("", [Validators.required, Validators.maxLength(20)]),
    "email": new FormControl("", [Validators.required, Validators.maxLength(50)]),
    "setor": new FormControl("", Validators.required),
    "usuario": new FormControl("", [Validators.required, Validators.maxLength(20)]),
    "senha": new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    "ramal": new FormControl("", [Validators.minLength(2), Validators.maxLength(9)]),
    "dataNascimento": new FormControl(""),
    "perfil": new FormControl("", Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<CadastrarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public setorService: SetorService,
    public perfilService: PerfilService
  ) { }

  ngOnInit(): void {
    this.carregarListaDeSetores();
    this.carregarListaDePerfis();
  }

  public carregarListaDeSetores(): void {
    this.setorService.retornarListaDeSetores().then((resposta) => {
      this.setores = resposta;
    })
  }

  carregarListaDePerfis(): void {
    this.perfilService.retornaPerfisDeUsuario().then((resposta) => {
      this.perfis = resposta;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public gravarConteudo(): void {
    console.log(this.formulario.value);
  }

}
