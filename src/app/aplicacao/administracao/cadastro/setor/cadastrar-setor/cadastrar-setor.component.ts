import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Setor } from 'src/app/model/setor';
import { UsuarioDto } from 'src/app/model/usuario-dto';
import { PerfilService } from 'src/app/services/perfil.service';
import { SetorService } from 'src/app/services/setor.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'cms-cadastrar-setor',
  templateUrl: './cadastrar-setor.component.html',
  styleUrls: ['./cadastrar-setor.component.css']
})
export class CadastrarSetorComponent implements OnInit {

  public setores: Setor[];

  public perfis: Array<string>;

  public formulario: FormGroup = new FormGroup({
    "nome": new FormControl("", Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<CadastrarSetorComponent>,
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

  public carregarListaDePerfis(): void {
    this.perfilService.retornaPerfisDeUsuario().then((resposta) => {
      this.perfis = resposta;
    })
  }

  public onNoClick(): void {
    let confirmacao = confirm("Deseja realmente cancelar?");
    if (confirmacao)
      this.dialogRef.close();
  }

  public gravarConteudo(): void {
    if (this.formulario.valid) {
      alert(`${this.formulario.value.nome} cadastrado com sucesso.`)
      this.setorService.cadastrarSetor(this.formulario.value.nome).catch((error) => {
        alert(`Erro: ${error.message}`)
        console.log(error)
      })
      this.dialogRef.close();
    }
  }

}
