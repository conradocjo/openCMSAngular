import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Setor } from '../model/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private apiSetor: string = "http://localhost:8080/api/setor";

  constructor(private http: HttpClient) { }

  public retornarListaDeSetores():Promise<Array<Setor>> {
    return this.http.get<Setor[]>(`${this.apiSetor}/listarSetores`).toPromise().then((resposta)=>{
      return resposta;
    })
  }

}
