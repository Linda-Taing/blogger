<template>
  <div class="card mb-3 mt-3">
    <h5 class="card-title p-3">{{ blog.title }}</h5>
    <img class="blogImg" :src="blog.imgUrl" :alt="blog.title">
    <div class="card-body">
    <div class="pb-2 fs-2 bolder" >{{ blog.title }}</div>
    <div class="previewTxt pb-2">{{ blog.body }}</div>
    <!-- The line below keeps saying that it's true that it is published... so I commented it out. -->
    <!-- <div class="pb-2">{{ blog.published }}</div> -->
    <!-- <button @click="setActiveBlog()" class="btn btn-danger" data-bs-toggle="modal"
    data-bs-target="#exampleModal">View Blog</button>
  </div> -->
<!-- </div> -->
</div>
    <router-link :to= "{name: 'Profile', params: {creatorId: blog.creatorId}}">
      <div class="d-flex justify-content-end p-3" >
<img class="rounded-circle" height="70" width="70" :src="blog.creator.picture" :alt="blog.creator.name" title="View Blogger Profile!"></div>
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

  setup(props){
    return {
      seActiveBlog(){
      blogsService.setActiveBlog(props.blogs)
     }    
   };
  },
}
</script>


<style lang="scss" scoped>

.blogImg{
  height: 30vh;
  width: 100%;
  object-fit: cover;

}
.previewTxt{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.card{
  border-color: black;
  border-radius: 2%;
}


</style>