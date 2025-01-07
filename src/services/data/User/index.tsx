import {api} from "../../api";

export interface IUser {
    name?: string
    email?: string
    password?: string
}

export interface IResponseUser {
    name?: string
    email?: string
    created_at: string
    update_at: string
    id: number
}

export interface IAuthenticated {
    data: {
        token: string;
        expires_at: string;
        email: string;
        status: string;
        id: number;
        name: string;
        curso: string;
        turma: string;
        descricaoEsportiva: string;
        matricula: string;
        dtNascimento: string;
        genero: string;
        tipo: string
    };
    user: IResponseUser;
    message: string;
    status: string;
}


class UserData {
    register(data: IUser) {
        return api.post<IResponseUser>('/api/register', data)
    }
    login(data: IUser) {
        return api.post<IAuthenticated>('/api/login', data)
    }
}

export default new UserData()