<template>
    <div id="cover">
          <form action="" @submit.prevent = "handleSearch">
            <div class="tb">
              <div class="td"><input type="text" v-model="search" :placeholder="placeHolder"></div>
              <div class="td" id="s-cover">
                <button type="submit" name="submit" class="submit">
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
            </div>
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

input, 
.submit{
  color: #fff;
  font-family: 'Jost';
  padding: 0;
  margin: 1em;
  border: 0;
  background-color: transparent;
}

#cover{
  width: 100%;
  padding: 1em;
  margin: 3em auto 0 auto;
  background-color: #a09bf3;
  border-radius: 20px;
  box-shadow: 0 10px 40px #F0AEF6ff, 0 0 0 20px #ffffffeb;
  transform: scale(0.6);
}

input[type="text"]{
  width: 100%;
  height: 90%;
  font-size: 2em;
  line-height: 1;
}

input[type="text"]:focus{
  outline: none;
}

input[type="text"]::placeholder {
  color:#F6D7F6ff;
}

#s-cover{
  width: 1px;
  padding-left: 30%;
}

.tb{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submit{

  position: relative;
  display: block;
  width: 3em;
  height: 3em;
  cursor: pointer;

}

#s-circle {
  position: relative;
  left: -7em;
  top: -0.8em;
  width: 3em;
  height: 3em;
  margin-top: 0;
  border-width: 15px;
  border: 8px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s ease all;
}

.submit span {
  position: relative;
  left: -3.7em;
  top: 0;
  display: block;
  width: 0.6em;
  height: 0.8em;
  background-color: transparent;
  border-radius: 5px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;
}

.submit span:before,
.submit span:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2.5em;
  height: 0.8em;
  background-color: #fff;
  border-radius: 10px;
  transform: rotateZ(0);
  transition: 0.5s ease all;
}

#s-cover:hover #s-circle {
  top: 0px;
  width: 4em;
  height: 0.8em;
  border-width: 0;
  background-color: #fff;
  border-radius: 20px;
}

#s-cover:hover span {
  top: 0;
  left: -4em;
  width: 25px;
  margin-top: -9px;
  transform: rotateZ(0);
}

#s-cover:hover button span:before {
  bottom: 11px;
  transform: rotateZ(52deg);
}

#s-cover:hover button span:after {
  bottom: -11px;
  transform: rotateZ(-52deg);
}
#s-cover:hover button span:before,
#s-cover:hover button span:after {
  right: -6px;
  width: 40px;
  background-color: #fff;
}







/* .search{
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
  
} */
</style>