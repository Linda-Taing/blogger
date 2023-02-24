<template>
 <div v-if="profile" class="container">
    <div class="row">
      <div class="col-12">
          <img class=" mt-5 rounded-circle" height="100" width="100" :src="profile.picture" alt="">
       </div>
       <div class="col-12">
         <div>
           <img class="opacity-60 coverImg mt-5" :src="profile.coverImg" alt="">
          </div>
        </div>
        <div class="fs-3"> {{ profile.bio }}</div>
        <div>{{ profile.class }}</div>
        <div>{{ profile.body }}</div>
     </div>
  </div>


</template>


<script>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import{blogsService} from "../services/BlogsService.js"
import { profilesService } from "../services/ProfilesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup(){
    const route = useRoute();

    async function getProfileById(){
      try {
        const creatorId = route.params.creatorId;
        await profilesService.getProfileById(creatorId)
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }
    async function getBlogsByCreatorId() {
      try {
        const creatorId = route.params.creatorId;
        await blogsService.getBlogsByQuery({ creatorId: creatorId });
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }

    onMounted(() => {
      getProfileById();
      getBlogsByCreatorId();
    })
    return {
      profile: computed(() => AppState.profile),
      blogs: computed(()=> AppState.blogs)
    }
  }

}
</script>


<style lang="scss" scoped>
.coverImg{
  height: 30em;
  width:  100%;
  object-fit: cover;
}

</style>