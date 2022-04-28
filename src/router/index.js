import { createWebHistory, createRouter } from "vue-router";
import PlayersList from "../components/PlayersList.vue";
import GameWeeks from "../components/GameWeeks.vue";

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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;