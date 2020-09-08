import { PerfilUsuario } from './enum/perfil-usuario.enum';

export class UsuarioDto {
    
    public nome: string;

    public imagemDePerfil: string;

    public matricula: string;

    public email: string;

    public usuario: string;

    public senha: string;

    public idSetor: number;

    public ramal: string;

    public perfil: PerfilUsuario;

    public dataNascimento: string;
    
}

