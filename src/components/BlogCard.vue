<template>
  <div class="card mb-3 mt-3">
    <img class="blogImg" :src="blog.imgUrl" :alt="blog.title">
    <div class="pb-2" >{{ blog.title }}</div>
    <div class="pb-2">{{ blog.body }}</div>
    <!-- <div class="pb-2">{{ blog.tags }}</div> -->
    <div class="pb-2">{{ blog.published }}</div>

    <router-link :to= "{name: 'Profile', params: {creatorId: blog.creatorId}}">
<img class="rounded-circle" height="70" width="70" :src="blog.creator.picture" :alt="blog.creator.name">
    </router-link>
    


  </div>
</template>


<script>
import { Blog } from "../models/Blog.js";
import { blogsService } from "../services/BlogsService.js";



export default {
  props:{
    blog: {
    type: Blog, required: true}
  },

  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

.blogImg{
  height: 30vh;
  width: 30vh;
  object-fit: cover;

}


</style>