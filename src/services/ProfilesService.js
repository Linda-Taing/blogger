import { logger } from "../utils/Logger"
import { api } from "./AxiosService.js"

class ProfilesService{

  async getProfileById(creatorId){
    const res = await api.get('api/profiles/'+ creatorId)
    logger.log('get IDs', res.data)

  }

}
export const profilesService = new ProfilesService()