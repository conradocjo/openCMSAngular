import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Setor } from 'src/app/model/setor';
import { PerfilService } from 'src/app/services/perfil.service';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'cms-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public setores: Setor[];

  public setorSelecionado: Setor;

  public perfis: Array<string>;

  public formulario: FormGroup = new FormGroup({
    "nome": new FormControl(this.data.usuario.nome != null ? this.data.usuario.nome : "", Validators.required),
    "matricula": new FormControl(this.data.usuario.matricula != null ? this.data.usuario.matricula : "", [Validators.required, Validators.maxLength(20)]),
    "email": new FormControl(this.data.usuario.email != null ? this.data.usuario.email : "", [Validators.required, Validators.maxLength(50)]),
    "setor": new FormControl(this.data.usuario.setor != null ? this.data.usuario.setor : "", Validators.required),
    "usuario": new FormControl(this.data.usuario.usuario != null ? this.data.usuario.usuario : "", [Validators.required, Validators.maxLength(20)]),
    "senha": new FormControl(this.data.usuario.senha != null ? this.data.usuario.senha : "", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    "ramal": new FormControl(this.data.usuario.ramal != null ? this.data.usuario.ramal : "", [Validators.minLength(2), Validators.maxLength(9)]),
    "dataNascimento": new FormControl(this.data.usuario.dataNascimento != null ? this.data.usuario.dataNascimento : ""),
    "perfil": new FormControl("", Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public setorService: SetorService,
    public perfilService: PerfilService
  ) { }

  ngOnInit(): void {
    this.carregarListaDeSetores();
    this.carregarListaDePerfis();
    this.setorSelecionado = this.data.usuario.setor;


    console.log(this.data)

    console.log(this.setorSelecionado.nome)
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
