import { AppState } from "../AppState"
import { Profile } from "../models/Account"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService.js"

class ProfilesService{

  async getProfileById(creatorId){
    const res = await api.get('api/profiles/'+ creatorId)
    logger.log('get IDs', res.data)
    AppState.profile = new Profile(res.data)
  }

}
export const profilesService = new ProfilesService()