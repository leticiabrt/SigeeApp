import {api} from "../../api";

export interface INoticia {
    idNoticias?: number,
    titulo?: string,
    noticia?: string,
    dia?: string,
    horario?: string
}

export interface IResponseNoticia {
    dados: INoticia[]
}

class NoticiaData {
    index() {
        return api.get<IResponseNoticia>('/api/listarNoticias')
    }
}

export default new NoticiaData()