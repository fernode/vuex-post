import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    photos: [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
    ]
  },
  mutations: {
    getPhotos(state, payload) {
      state.photos = payload
    }
  },
  actions: {
    async getPhotos({ commit }) {
      try {
        await axios.get("https://jsonplaceholder.typicode.com/photos?_page=0&_limit=5")
        .then(response => commit("getPhotos", response.data))
      }
      catch (error) {
        console.log(error)
      }
    }
  }
})

export default store