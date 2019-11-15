<template>
  <div class="container h-100">
    <search-bar />
  </div>
</template>

<script>
  import SearchBar from "../components/SearchBar";

  export default {
    components: {SearchBar}
  }
</script>

<style>
  html,
  body,
  #app{
    height: 100%
  }
</style>