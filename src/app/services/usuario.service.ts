import { Injectable } from '@angular/core';
import { UsuarioDto } from '../model/usuario-dto';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private apiUsuario: string = "http://localhost:8080/api/usuario";

  private usuarios : Usuario[];

  public cadastrarUsuario(usuarioDto: UsuarioDto): void {

  }

  public editarUsuario(): void {

  }

  public bloquearOuDesbloquearUsuario(): void {

  }

  public listarTodosUsuarios(): Promise<Usuario[]> {
    return this.http.get(`${this.apiUsuario}/retornaTodosUsuarios`).toPromise().then()
  }

}
