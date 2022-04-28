import { createWebHistory, createRouter } from "vue-router";
import PlayersList from "../components/PlayersList.vue";
import GameWeeks from "../components/GameWeeks.vue";
import App from '../App.vue';

console.log(App.data().testdata);

const gwData = App.data().testdata;

const routes = [
  {
    path: "/players",
    name: "PlayersList",
    component: PlayersList, 
  },
  {
    path: "/gameweeks",
    name: "GameWeeks",
    component: GameWeeks,
    props: { gameweeks: gwData }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;