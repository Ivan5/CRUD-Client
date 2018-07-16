<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="sneaker in sneakers" :key="sneaker._id">
      <v-card>
        <v-card-media
          :src="sneaker.image"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{sneaker.name}}</h3>
            <div>${{sneaker.price}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">View</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import API from '@/lib/api'
export default {
  data () {
    return {
      sneakers : ''
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      API.getSneakers()
        .then(sneakers => {
          this.sneakers = sneakers
        })
    }
  }
}
</script>
<style scoped>

</style>
