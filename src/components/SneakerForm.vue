<template>
<v-layout>
  <v-flex xs12>
  <v-form ref="form" v-model="valid">
    <v-text-field
    v-model="sneaker.name"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
    v-model="sneaker.price"
      :rules="priceRules"
      label="Price"
      required
    ></v-text-field>
    <v-text-field
    v-model="sneaker.image"
      label="Image"
      required
    ></v-text-field>
    <v-btn @click="submit">
      submit
    </v-btn>
  </v-form>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  props:['sneaker','onSubmit'],
 data () {
   return {
     valid: true,
     priceRules:[(price)=>{
       if(isNaN(price)) return 'Price must be a valid number'
       if(Number(price) <= 0 ) return 'Price must be greater then 0'
       return true
     }]
   }
 },

 methods:{
   submit(){
     if(this.valid){
      this.onSubmit();
     }
   }
 }
}
</script>

<style>

</style>
