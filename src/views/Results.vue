<template>
  <div class="container">
    <search-bar></search-bar>
    <div class="row mt-3">
      <b-table striped hover bordered :items="results"></b-table>
    </div>
  </div>
</template>

<script>
  import SearchService from "../util/SearchService";
  import SearchBar from "../components/SearchBar";
  export default {
    components: {SearchBar},
    data() {
      return {
        results: []
      }
    },
    mounted() {
      if(this.$route.params.queryType === 'artist'){
        SearchService.searchArtist(this.$route.query.query).then(response => {
          this.results = response.data.artists.map(artist => {
            return {
              name: artist.name,
              country: artist.country,
              tags: artist.tags ? artist.tags.map(tag => tag.name).join(', ') : ''
            }
          })
        })
      } else {
        SearchService.searchAlbum(this.$route.query.query).then(response => {
          this.results = response.data['release-groups'].map(release => {
            let artist = ""
            let joinArtists = ""
            release['artist-credit'].forEach(artistCredit => {
              if(artistCredit.joinphrase){
                joinArtists += artistCredit.joinphrase + artistCredit.artist.name
              } else {
                artist = artistCredit.artist.name
              }
            })
            return {
              title: release.title,
              artist: artist + joinArtists,
              release_type: release['primary-type']
            }
          })
        })
      }
    }
  }
</script>