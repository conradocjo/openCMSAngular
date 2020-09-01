import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Funcionalidade } from 'src/app/model/funcionalidade';

@Component({
  selector: 'cms-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {

  public funcionalidadesMenu: Funcionalidade[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.funcionalidadesMenu = this.menuService.retornaFuncionalidadesQuadro();
  }

}
