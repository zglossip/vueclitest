<template>
  <div class="row align-items-center h-100 mt-1">
    <div class="col-2">
      <b-form-select v-model="currentQueryType" :options="queryTypes"></b-form-select>
    </div>
    <div class="col-8">
      <b-form-input type="text" v-model="query" v-on:keyup.enter="search"></b-form-input>
    </div>
    <div class="col-2">
      <b-button v-on:click="search" class="w-100" id="search-button">Search</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        queryTypes: [
          {value: 'artist', text: 'Artist'},
          {value: 'album', text: 'Album'}
        ],
        currentQueryType: 'artist',
        query: ""
      }
    },
    methods: {
      search() {
        //TODO This the best way to handle this?
        this.$router.push(`/searchResults/${this.currentQueryType}?query=${this.query}`)
        this.$router.go()
      }
    }
  }
</script>