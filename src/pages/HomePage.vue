<template>
  <div v-if="blogs.length" class="container-fluid">
    <div class="row justify-content-center">
    <div v-for="b in blogs" class="col-md-10 ">
      <BlogCard :blog = "b"/>
      </div>
    </div>
  </div>
<div v-else class="container-fluid">

</div>
 
</template>

<script>
import { onMounted, computed } from "vue";
// import{BlogCard} from "../components/BlogCard.vue"
import { blogsService } from "../services/BlogsService"
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";

export default {
  setup() {

async function get_blogs(){
  try {
    await blogsService.get_blogs()
  } catch (error) {
    Pop.error(error.message)
    logger.log(error)
  }
}

onMounted(() => {
  get_blogs();
})

    return {
      blogs: computed(()=>AppState.blogs)
    }
  },
  // components: {BlogCard}
}
</script>

<style scoped lang="scss">
</style>
