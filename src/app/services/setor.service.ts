import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Setor } from '../model/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private apiSetor: string = "http://localhost:8080/api/setor";

  constructor(private http: HttpClient) { }

  public cadastrarSetor(setor:String):Promise<Setor> {
    return this.http.post<Setor>(`${this.apiSetor}/cadastrarSetor/${setor}`,setor).toPromise().then((resposta)=>{
      return resposta;
    })
  }

  public retornarListaDeSetores():Promise<Array<Setor>> {
    return this.http.get<Setor[]>(`${this.apiSetor}/listarSetores`).toPromise().then((resposta)=>{
      return resposta;
    })
  }

  public deletarSetor(setor:Setor):Promise<Setor>  {
    return this.http.delete<Setor[]>(`${this.apiSetor}/deletarSetor/${setor.id}`).toPromise().then(()=>{
      return null;
    }).catch((erro)=>{
      return erro;
    })
  }

  public bloquearOuDesbloquearSetor (idSetor: number):Promise<Setor> {
    return null;
  }

  public testeDocker ():void {
    this.http.get(`${this.apiSetor}/testar`)
  }

}
