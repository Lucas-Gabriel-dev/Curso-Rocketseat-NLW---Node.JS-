import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService{
    static execute(user_id: string) {
        throw new Error("Method not implemented.");
    }
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id,
            },
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService }