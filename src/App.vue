<template>
    <app-header></app-header>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <app-player />

    <auth />

</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import Auth from "@/components/Auth.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";
import AppPlayer from "@/components/Player.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Auth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  }
}
</script>

<style>
  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all 0.2s linear;
  }

  .fade-leave-to {
    transition: all 0.2s linear;
    opacity: 0;
  }
</style>