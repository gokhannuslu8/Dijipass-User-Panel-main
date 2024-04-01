<script>
import MainInformations from '@/components/MainInformations.vue';
import SocialMedias from '@/components/SocialMedias.vue';

export default {
  name: 'HomeView',
  components: {
    MainInformations,
    SocialMedias
  }
}
</script>

<template>
  <MainInformations />
  <SocialMedias />
</template>