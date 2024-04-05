import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";

export const useAnime = defineStore("item", {
  state: () => ({
    anime: ref({}),
    animeList: ref([]),
    loading: ref(false),
  }),

  getters: {
    getAnime() {
      return this.anime;
    },
    getAnimeList() {
      return this.animeList;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async searchAnimeAction(name) {
      try {
        const response = await httpClient.get(`anime?q=${name}&sfw`);
        if (response) {
            console.log('Anime list response ')
            this.animeList = response.data;
        }
        console.log(response);
      } catch (error) {
        console.log(error);
        
      }
    },

    async getAnimeDetailAction(id) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.access}`,
        };
        const response = await httpClient.get("groups?page=" + page, {
          headers,
        });
        this.anime = response.data;
      } catch (error) {
        console.log(error);
        return error
      }
    },

    resetAnimeData() {
      this.anime = {};
      this.animeList = [];
    },
  },
});