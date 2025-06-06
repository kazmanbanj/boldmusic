<template>
        <!-- Header -->
    <header id="header" class="bg-gray-700">
      <nav class="container mx-auto flex justify-start items-center py-5 px-4">
        <!-- App Name -->
        <router-link class="text-white font-bold uppercase text-2xl mr-4" to="/" exact-active-class="no-active">
          Bold Music
        </router-link>

        <div class="flex flex-grow items-center">
          <!-- Primary Navigation -->
          <ul class="flex flex-row mt-1">
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'about' }">About</router-link>
            </li>

            <!-- Navigation Links -->
            <li v-if="! userStore.userLoggedIn">
              <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">Login / Register</a>
            </li>
            <template v-else>
              <li>
                <router-link class="px-2 text-white" :to="{ name: 'manage' }">Manage</router-link>
              </li>
              <li>
                <a class="px-2 text-white" href="#" @click.prevent="signOut">Logout</a>
              </li>
            </template>
          </ul>

          <ul class="ml-auto">
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="changeLocale">
                {{ currentLocale }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
import { mapStores, mapState, mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";

export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModalStore, useUserStore),          // used for mapping the entire store e.g. !this.mapStores.isOpen
    ...mapWritableState(useModalStore, ["isOpen"]),  //  used for mapping the properties passed in the second argument e.g. !this.isOpen
    ...mapState(useModalStore, ["isOpen"]), //  used for mapping the properties passed in the second argument. readonly, can't edit
    currentLocale() {
      return this.$i18n.locale === "fr" ? "French" : "English";
    }
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    },
    signOut() {
      this.userStore.signOut();

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: "home" });
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === "fr" ? "en" : "fr";
    }
  }
}
</script>