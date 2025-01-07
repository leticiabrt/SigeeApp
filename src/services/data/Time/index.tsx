import {api} from "../../api";

//interface para receber os dados dos times
export interface ITime {
    idTime?: number,
    modalidade?: string,
    genero?: string,
    competicao?: string
}

export interface IAluno {
    idAluno?: number,
    name?: string,
    turma?: string,
    curso?: string
}

export interface IResponseTime {
    times: ITime[],
    alunos: IAluno[]
}

//interface para receber os dados dos jogos
export interface IJogo {
    idJogo?: number,
    horarioInicio?: string,
    horarioFim?: string,
    dia?: string,
    local?: string,
    observacao?: string
}

export interface IResponseJogo {
    jogos: IJogo[]
}

//Interfaces para pedir os dados
export interface IdAluno {
    idAluno?: number
}

export interface idTime {
    idTime?: number
}

class TimeData {
    index(data:IdAluno) {
        return api.post<IResponseTime>('/api/listarTimes', data)
    }

    indexJogos(data:idTime) {
        return api.post<IResponseJogo>('/api/listarJogos', data)
    }

    indexAlunos(data:idTime) {
        return api.post<IResponseTime>('/api/listarAlunos', data)
    }
}

export default new TimeData()