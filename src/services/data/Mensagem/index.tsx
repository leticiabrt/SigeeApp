import {api} from "../../api";

export interface IMensagem {
    idMensagem?: number,
    conteudo?: string,
    dia?: string,
    horario?: string,
}

export interface IResponseMensagem {
    mensagens: IMensagem[]
}

export interface IdAluno {
    idAluno?: number
}

class MensagemData {
    index(data: IdAluno) {
        return api.post<IResponseMensagem>('/api/listarMensagens', data)
    }
}

export default new MensagemData()