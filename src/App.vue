<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <p>main app page</p>

  <div id="nav">

      <router-link to="/players">Players</router-link> |
      <router-link to="/gameweeks">Gameweeks</router-link>

      <!-- <p>{{ gameweeks }}</p> -->

      <!-- <div v-for="gameweek in gameweeks" :key="gameweek.id">
        {{ gameweek.id }}
      </div> -->

  </div>

  <router-view />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {

  name: 'App',

  data() {

      return {

          gameweeks: [],
          // loading: true,
          testdata: ['random', 234535, {key: 'string'}, {key2: 234324}]

      }
  },
  
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

      // const proxyURL = 'https://cors-anywhere.herokuapp.com/';
      const baseURL = 'https://fantasy.premierleague.com/api/bootstrap-static/';
      
      axios.get(  baseURL, header)

        .then( response => {
    
            let events = response.data.events;

            this.gameweeks = events;

            console.log(this.gameweeks);
      })
        .catch( error => {
    
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
