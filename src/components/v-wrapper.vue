<template>
  <div class="v-wrapper">BBBB
    <v-catalog/>
        <v-card/>
  </div>
</template>

<script>
import vCatalog from './v-catalog'
import vCard from './v-card'

export default {
  name: 'v-wrapper',
  components: {
   vCatalog,
   vCard
  },
}
</script>

<style>
.v-wrapper{
    max-width: 900px;
    margin: 0 auto;
}

</style>
