<template>
    <div class="searchBar">
          <form action="" @submit.prevent = "handleSearch">
            <input type="text" v-model="search" class="search" :placeholder="placeHolder">
            <input type="submit" name="submit" class="submit" alt="soumettre">
          </form>
        </div>
</template>

<script>

export default {
    name : 'searchBar', 
    props: {
        placeHolder: {
            type : String,
        }
    },
    data(){

        return{
        search: '',
        }
    },
    methods:{
        handleSearch(){
            this.$emit('search', this.search);
        }
    }
}
</script>

<style>
.search{
  width: 75%;
}

.searchBar input[type="submit"]{
  width: 50px;
  height: 50px;
  background-image: url(https://cdn-icons-png.flaticon.com/512/6671/6671414.png);
  background-repeat: no-repeat;
  background-size: contain;
  color:transparent;
  background-color: transparent;
  cursor: pointer;
  
}
</style>