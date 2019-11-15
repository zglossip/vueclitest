import axios from 'axios'

export default class SearchService {
  static searchArtist(query){
    return axios.get(`http://musicbrainz.org/ws/2/artist/?fmt=json&query=artist:${query}`)
  }

  static searchAlbum(query){
    return axios.get(`http://musicbrainz.org/ws/2/release-group/?query=release:${query}&fmt=json`)
  }
}