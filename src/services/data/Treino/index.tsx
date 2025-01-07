import {api} from "../../api";

export interface ITreino {
    idTreino?: number,
    dia?: string,
    local?: string,
    horarioInicio?: string,
    horarioFim?: string,
    observacao?: string,
    responsavel?: string,
    nomeModalidade?: string,
    numeroMaximoParticipantes?: number,
    genero?: string,
    vagasOcupadas?: string,
    publico?: number,
}

export interface ICheckin {
    idAluno?: string,
    idTreino?: string,
}

export interface IResponseTreino {
    dados: ITreino[]
    checkins: ICheckin[]
}

export interface IdAluno {
    idAluno?: number
}

class ReservaData {
    index(data: IdAluno) {
        return api.post<IResponseTreino>('/api/listarTreinos', data)
    }
    realizarChekin(data: ICheckin) {
        return api.post("/api/realizarChekin", data)
    }
    cancelarCheckin(data: ICheckin) {
        return api.post<IResponseTreino>('/api/cancelarChekin', data)
    }
    mostrarCheckins(data: IdAluno) {
        return api.post<IResponseTreino>('/api/mostrarChekins', data)
    }
}

export default new ReservaData()