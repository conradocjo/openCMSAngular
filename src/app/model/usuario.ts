import { Setor } from './setor';
import { StatusAtivoInativo } from './enum/status-ativo-inativo.enum';

export class Usuario {

    public id: number;

    public nome: string;

    public imagemDePerfil: string;

    public matricula: string;

    public email: string;

    public usuario: string;

    public senha: string;

    public setor: Setor;

    public ramal: string;

    public status: StatusAtivoInativo;

    public statusIcone: string;

    public perfil: string;

    public dataNascimento: string;

}
