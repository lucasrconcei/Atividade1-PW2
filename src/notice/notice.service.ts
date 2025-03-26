import { Injectable } from '@nestjs/common';

@Injectable()
export class NoticeService {

    findAll() {
        return {message: "Todos as notícias"};
    }

    findOne(id: string) {
        return {message: `Valor recebido é ${id}`};
    }

    create(body: any) {
        return body;
    }

    update(body: any) {
        return body;
    }

    delete(id: string) {
        return {message: `Notícia ${id} excluído com sucesso`};
    }
}
