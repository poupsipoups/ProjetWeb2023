<template>
  <header>
      <nav>
        <div class="gauche">
          <img alt="Vue logo" src="https://cdn-icons-png.flaticon.com/512/5722/5722057.png" height="40">
          <a href="#"><strong>Poups</strong>' corner</a>
        </div>
        <ul class="links">
            <li><router-link to="/anime" class="link">Anime List</router-link></li>
            <li><router-link to="/manga" class="link">Manga List</router-link></li>
        </ul>

        <a href="#" class="action_btn">My favorites</a>
        <div class="toggle_btn">
          <i class="fa-solid fa-bars"></i>
        </div>

        <div class="dropdown-nav">
          
        </div>
     
      </nav>
  </header>
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

li {
  list-style: none;
}

a{
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
}

a:hover{
  color: blue;
}

header{
  position: relative;
  padding: 0 2rem;
}

nav{
  width: 100%;
  height: 60px;
  max-width: 1200px;
  margin:0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav .gauche a{
  font-size: 1.5rem;
}

nav .links{
  display: flex;
  gap: 2rem;
}

nav .toggle_btn{
  color: #fff;
  font-size : 1.5rem;
  cursor :pointer;
  display: none;
}

.action_btn{
  background-color: blue;
  color : #fff;
  padding: 0.5rem 1rem;
  border : none;
  outline: none;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: scale 0.2 ease;
}

.action_btn:hover{
  scale: 1.05;
  color:#fff;
}

.action_btn:active{
  scale: 0.95;
}

@media(max-width : 800px){
  nav .links, 
  nav .action_btn{
    display: none;
  }

  nav .toggle_btn{
    display: block;
  }
}



/* nav{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #EEE1D9ff;
  color: white;
  padding: 10px;
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
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-left: 20px;
  color: pink;
  text-decoration: none;
}

nav .onglets .link:hover{
  color: white;
}

@media screen and (max-width: 760px){
  nav{
    flex-direction: column;
  }

  nav .onglets{
    flex-direction: column;
    align-items: center;
  }

  nav .link {
    margin : 10px 0;
  }
} */


</style>