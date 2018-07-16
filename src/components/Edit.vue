<template>
  <SneakerForm :sneaker="sneaker" :onSubmit="submit" />
</template>

<script>
import API from '@/lib/api'
import SneakerForm from '@/components/SneakerForm'
export default {
  components:{
    SneakerForm
  },
 data () {
   return {
     sneaker:{},
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
    submit(){
     //console.log(this.sneaker);
      console.log('Valid');
      API.updateSneaker(this.sneaker)
        .then((result) => {
          this.$router.push({
            name: 'Sneakers'
          })
          
        })
   }
  }
}
</script>

<style>

</style>
