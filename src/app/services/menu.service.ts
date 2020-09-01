import { Injectable } from '@angular/core';
import { Funcionalidade } from '../model/funcionalidade';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private funcionalidadesMenu = [
    new Funcionalidade("Home", "home", "home"),
    new Funcionalidade("Administração", "administracao", "engineering"),
    new Funcionalidade("Fila de chamados", "filaChamados", "assignment"),
    new Funcionalidade("Abrir chamado", "abrirChamado", "bug_report"),
    new Funcionalidade("Sair", "login", "power_settings_new"),
  ]

  private funcionalidadesMenuQuadro = [
    new Funcionalidade("Cadastrar Setor", "cadastrarSetor", "add_business"),
    new Funcionalidade("Cadastrar Usuário", "cadastrarUsuario", "account_circle"),
    new Funcionalidade("Cadastrar Tipo de Chamado", "cadastrarTipoChamado", "addchart")
  ]

  public retornaFuncionalidadesQuadro(): Funcionalidade[] {
    return this.funcionalidadesMenuQuadro;
  }

  public retornaFuncionalidadesMenu(): Funcionalidade[] {
    return this.funcionalidadesMenu;
  }

  constructor() { }
}
