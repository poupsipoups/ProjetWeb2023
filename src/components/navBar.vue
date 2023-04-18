<template>
       <nav>
    <div class="gauche">
      <img alt="Vue logo" src="https://cdn-icons-png.flaticon.com/512/5722/5722057.png" height="40">
      <p><strong>Poups</strong>' corner</p>
   </div>
   <div class="onglets">
        <router-link to="/anime" class="link">Anime List</router-link>
        <router-link to="/manga" class="link">Manga List</router-link>
    </div>
    <div class="droite" id="endNav">
      <p>Mon profil</p>
      <a href="..\assets\icons\hamburger.png" class="icon" @click="displayMenu"/>
    </div>
  </nav>
</template>

<script>


export default{
 name: 'NavBar',
 methods:{
  displayMenu(){
    var x = document.getElementById("endNav");
    if(x.className === "droite"){
      x.className += " responsive";
    }
    else{
      x.className = "droite";
    }
  },

 }
}
</script>


<style>
nav{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #EEE1D9ff;
  overflow: hidden;
  color: white;
  padding: 0 30px;
  margin: 8px;
  border-radius: 20px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

nav .gauche{
  display: flex;
  flex-wrap: wrap;
 
}

nav .gauche img{
  padding-top: 5px;
  margin-right: 5px;
}

nav .onglets .link{
  margin-left: 10px;
  margin-left: 20px;
  color: pink;
  text-decoration: none;
}

nav .onglets .link:hover{
  color: white;
}


</style>