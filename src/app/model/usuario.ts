import { StatusAtivoInativo } from './enum/status-ativo-inativo.enum';
import { Setor } from './setor';

export class Usuario {

    public constructor(

        public id: number,

        public nome: string,

        public imagemDePerfil: string,

        public matricula: string,

        public email: string,

        public usuario: string,

        public senha: string,

        public setor: Setor,

        public ramal: string,

        public status: StatusAtivoInativo,

        public statusIcone: string,

        public perfil: string,

        public dataNascimento: string
    ) { }
}
