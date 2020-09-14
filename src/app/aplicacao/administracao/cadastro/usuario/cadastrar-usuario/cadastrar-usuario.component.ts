import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Setor } from 'src/app/model/setor';
import { SetorService } from 'src/app/services/setor.service';
@Component({
  selector: 'cms-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  public setores: Setor[];

  public formulario: FormGroup = new FormGroup({
    "nome": new FormControl("", Validators.required),
  })

  constructor(
    public dialogRef: MatDialogRef<CadastrarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public setorService: SetorService
  ) { }

  ngOnInit(): void {
    this.carregarListaDeSetores();
  }

  public carregarListaDeSetores(): void {
    this.setorService.retornarListaDeSetores().then((resposta) => {
      this.setores = resposta;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public gravarConteudo(): void {

  }

}
