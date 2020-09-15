import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private apiPerfil: string = "http://localhost:8080/api/usuario";


  constructor(private http: HttpClient) { }

  public retornaPerfisDeUsuario(): Promise<Array<string>> {
    return this.http.get<string[]>(`${this.apiPerfil}/listarPerfilDeUsuario`).toPromise().then((retorno) => {
      return retorno;
    })
  }


}
