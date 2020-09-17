import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Setor } from 'src/app/model/setor';
import { UsuarioDto } from 'src/app/model/usuario-dto';
import { PerfilService } from 'src/app/services/perfil.service';
import { SetorService } from 'src/app/services/setor.service';
import { UsuarioService } from 'src/app/services/usuario.service';
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
    public perfilService: PerfilService,
    public usuarioService: UsuarioService
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
    if (this.formulario.valid) {
      let usuario = new UsuarioDto(this.formulario.value.nome, null, this.formulario.value.matricula, this.formulario.value.email
        , this.formulario.value.usuario, this.formulario.value.senha, this.formulario.value.setor, this.formulario.value.ramal, this.formulario.value.perfil,
        this.formulario.value.dataNascimento);
        alert(`${usuario.nome} cadastrado com sucesso.`)
      this.usuarioService.cadastrarUsuario(usuario).catch((error) => {
        alert(error)
      })
    }
    this.dialogRef.close();
  }

}
