import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "../models/Blog.js"
class BlogsService {

async get_blogs(){
  const res = await api.get('api/blogs')
  logger.log(res.data)
  AppState.blogs = res.data.map(b => new Blog(b))
  console.log(AppState.blogs);
}

}

export const blogsService = new BlogsService()