<script>
import SectionNews from '../UI/Sections/HomeSectionNews.vue';
import SignUpSection from '../UI/Sections/SignUpSection.vue';
import LastMatches from '../UI/Sections/LastMatches.vue';

export default {
  name: 'home-page',
  components: {
    SectionNews, SignUpSection, LastMatches
  },
}
</script>

<template>
  <SectionNews></SectionNews>
  <LastMatches></LastMatches>
  <SignUpSection></SignUpSection>
</template>

<style scoped>

</style>