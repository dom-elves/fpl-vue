<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <p>main app page</p>

  <div id="nav">

      <router-link to="/players">Players</router-link> |
      <router-link to="/gameweeks">Gameweeks</router-link>

  </div>

  <router-view />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {

  name: 'App',
  
  mounted() {

    this.apiRequest()

  },

  methods: {
    
    apiRequest() {

      const header = {
                         headers: {
                                      'Access-Control-Allow-Origin': 'https://localhost:8080',
                                      'Content-Type': 'application/json',
                                      'Access-Control-Allow-Methods': 'GET',
                                    },
                     }

      const proxyURL = 'https://cors-anywhere.herokuapp.com/';
      const baseURL = 'https://fantasy.premierleague.com/api/bootstrap-static/';
      
      axios.get( proxyURL + baseURL, header)

        .then(function (response) {
    
        let overview = response.data;
        console.log(overview);
      })
        .catch(function (error) {
    
        console.log(error);
      })
  
    }
    
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
