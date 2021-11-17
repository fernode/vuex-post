<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="photos">
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          <figure>
            <img :src="photo.url" :alt="photo.title" />
            <figcaption>{{ photo.title }}</figcaption>
          </figure>
        </li>
      </ul>

      <div class="actions">
        <button @click="$store.dispatch('getPhotos')">Load more</button>
      </div>
    </div>

    <div class="filtered-photos">
      <img v-if="photoById.url" :src="photoById.url" :alt="photoById.title" />

      <div class="filter">
        <input
          type="number"
          min="1"
          :max="photos.length"
          placeholder="Enter the photo id"
          v-model="photoId"
        />
        <button
          :disabled="!photoId && 'disabled'"
          @click="$store.dispatch('getPhotoById', photoId)"
        >
          Get photo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    photos() {
      return this.$store.state.photos
    },
    photoById() {
      return this.photoId
        ? this.$store.getters.getPhotoById(this.photoId)
        : this.$store.getters.getPhotoById(1)
    },
  },
  data() {
    return {
      photoId: "",
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.photos {
  margin: 0 auto;
  width: 90%;
}

.photos ul {
  display: flex;
  justify-content: space-between;
}

.photos li {
  list-style: none;
  max-width: 25%;
}

.photos img {
  max-width: 100%;
}

.filtered-photos {
  margin-top: 40px;
}

.filtered-photos img {
  max-width: 30%;
}
</style>
