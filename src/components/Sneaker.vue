<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-media
          :src="sneaker.image"
          height="600px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{sneaker.name}}</h3>
            <div>${{sneaker.price}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn color="primary" :to="{name:'Edit',params:{id:sneaker._id}}">Edit</v-btn>
          <v-btn color="info" :to="{name:'Sneakers'}">All Sneakers</v-btn>
          <v-btn color="error" @click="remove">Delete Sneaker</v-btn>
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
          this.sneaker = sneaker.sneaker;
        })
    },
    remove(){
      const { id } = this.$route.params;
      API.deleteSneaker(id)
        .then(() => {
          this.$router.push({
            name: 'Sneakers'
          })
        })
    }
  }
}
</script>
<style scoped>

</style>
