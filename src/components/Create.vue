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
     sneaker:{
       name:'',
       price:0,
       image:''
     },
   }
 },
 methods :{
   submit(){
     //console.log(this.sneaker);
      console.log('Valid');
      API.createSneaker(this.sneaker)
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
