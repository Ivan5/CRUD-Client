<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-media
          :src="sneaker.sneaker.image"
          height="600px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{sneaker.sneaker.name}}</h3>
            <div>${{sneaker.sneaker.price}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange" 
                 >View</v-btn>
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
      sneaker : {}
    }
  },
  mounted () {
    const { id } = this.$route.params;
    this.load(id)
  },
  methods: {
    load(id){
      API.getSneaker(id)
        .then((sneaker) => {
          this.sneaker = sneaker;
        })
    }
  }
}
</script>
<style scoped>

</style>
