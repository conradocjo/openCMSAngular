import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Funcionalidade } from 'src/app/model/funcionalidade';

@Component({
  selector: 'cms-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public funcionalidades: Funcionalidade[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.funcionalidades = this.menuService.retornaFuncionalidadesMenu();
  }

}
