import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbrirChamadoComponent } from './aplicacao/abrir-chamado/abrir-chamado.component';
import { AdministracaoComponent } from './aplicacao/administracao/administracao.component';
import { SetorComponent } from './aplicacao/administracao/cadastro/setor/setor.component';
import { TipoChamadoComponent } from './aplicacao/administracao/cadastro/tipo-chamado/tipo-chamado.component';
import { UsuarioComponent } from './aplicacao/administracao/cadastro/usuario/usuario.component';
import { FilaChamadoComponent } from './aplicacao/fila-chamado/fila-chamado.component';
import { HomeComponent } from './aplicacao/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'administracao', component: AdministracaoComponent },
  { path: 'filaChamados', component: FilaChamadoComponent },
  { path: 'abrirChamado', component: AbrirChamadoComponent },
  { path: 'cadastrarSetor', component: SetorComponent },
  { path: 'cadastrarUsuario', component: UsuarioComponent },
  { path: 'cadastrarTipoChamado', component: TipoChamadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
