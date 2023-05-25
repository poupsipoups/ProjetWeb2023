<template>
  <header>
      <nav>
        <div class="gauche">
          <img alt="Vue logo" src="https://cdn-icons-png.flaticon.com/512/5722/5722057.png" height="40">
          <router-link to="/anime"><p><strong>Poups</strong>' corner</p></router-link>
          <!-- <a href="/anime"><strong>Poups</strong>' corner</a> -->
        </div>
          <div class="milieu">
          <ul class="links">
              <li><router-link to="/anime" class="link">Anime List</router-link></li>
              <li><router-link to="/manga" class="link">Manga List</router-link></li>
          </ul>
          </div>
          <div class="droite">
          <a href="#" class="action_btn"><router-link to="/favorites">My favourites</router-link></a>
          <div class="toggle_btn" @click="toggleBtn">
            <i class="fa-solid fa-bars"></i>
          </div>
      </div>

        <div class="dropdown-nav">
          <li><router-link to="/anime" class="link">Anime List</router-link></li>
          <li><router-link to="/manga" class="link">Manga List</router-link></li>
          <a href="#" class="action_btn"> <router-link to="/favorites">My favorites</router-link> </a>
        </div>
     
      </nav>
  </header>
</template>

<script>


export default{
 name: 'NavBar',
 data(){
    return{
    }
 },
 methods: {

  toggleBtn(){
    const dropdownNav = document.querySelector('.dropdown-nav');
    dropdownNav.classList.toggle('open');
  }

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
  font-family: 'Jost', sans-serif;
}

a:hover{
  color: #AF56EBff;
}

header{
  position: relative;
  padding: 0 2rem;
}

nav{
  width: 100%;
  height: 5em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
  background-image: linear-gradient(to bottom,  #F0AEF6ff, transparent);
}

nav .gauche a{
  font-size: 1.5rem;
  margin: 0.5em;
}

nav .gauche{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .gauche p {
  font-family: 'Jost';
}

nav .links{
  display: flex;
  gap: 2rem;
  font-family: 'Jost';
}

nav .toggle_btn{
  color: #fff;
  font-size : 1.5rem;
  cursor :pointer;
  display: none;
}

.action_btn{
  background-color: #AF56EBff;
  color : #fff;
  font-family: 'Jost';
  padding: 0.5rem 1rem;
  border : none;
  outline: none;
  border-radius: 20px;
  font-size: 0.8rem;
  /* font-weight: bold; */
  cursor: pointer;
  transition: scale 0.2 ease;
}

.action_btn:hover{
  scale: 1.05;
  color:#fff;
}

.action_btn:hover a{
  color: #F0AEF6ff;
}


.action_btn:active{
  scale: 0.95;
}

/* Dropdown */

.dropdown-nav {
  display: none;
  position: absolute;
  right: 2rem;
  top: 60px;
  width: fit-content;
  height: 0px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(15px) ;
  border-radius: 10px;
  overflow: hidden;
  transition: height .2s cubic-bezier(0.175,0.885, 0.32, 1.275);
}

.dropdown-nav.open{
  height: fit-content;
}

.dropdown-nav li{
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-nav .action_btn{
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Responsive */

@media(max-width : 800px){
  nav .links, 
  nav .action_btn{
    display: none;
  }

  nav .toggle_btn{
    display: block;
  }

  .dropdown-nav{
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