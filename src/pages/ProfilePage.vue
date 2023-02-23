<template>
  <div class="component">


  </div>
</template>


<script>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
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

    onMounted(() => {
      getProfileById();
    })
    return {
      profile: computed(() => AppState.profile)
    }
  }

}
</script>


<style lang="scss" scoped>

</style>