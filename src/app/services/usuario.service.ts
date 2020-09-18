import { Injectable } from '@angular/core';
import { UsuarioDto } from '../model/usuario-dto';
import { Usuario } from '../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private apiUsuario: string = "http://localhost:8080/api/usuario";


  public bloquearOuDesbloquearUsuario(idUsuario: number): Promise<Usuario> {
    return this.http.get<Usuario>(`${this.apiUsuario}/bloquearUsuario/${idUsuario}`).toPromise().then((resposta) => {
      return resposta;
    })
  }

  public listarTodosUsuarios(): Promise<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUsuario}/retornaTodosUsuarios`).toPromise().then((resposta) => {
      return resposta;
    })
  }

  public cadastrarUsuario(usuarioDto: UsuarioDto): Promise<Usuario> {
    return this.http.post<Usuario>(`${this.apiUsuario}/adicionarUsuario`, usuarioDto).toPromise().then((resposta) => {
      return resposta;
    })
  }

  public editarUsuario(usuario: Usuario): Promise<Usuario> {
    return this.http.put<Usuario>(`${this.apiUsuario}/editarUsuario`, usuario).toPromise().then((resposta) => {
      return resposta;
    })
  }

  public deletarUsuario(user: Usuario): Promise<Usuario> {
    return this.http.delete<Usuario>(`${this.apiUsuario}/deletarUsuario/${user.id}`).toPromise().then(()=>{
      return null;
    }).catch((erro)=>{
      console.log(erro)
    })
  }


}
