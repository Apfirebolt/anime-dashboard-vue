import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";

export const useAnime = defineStore("anime", {
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
    async searchAnimeAction(name, page = 1) {
      try {
        this.loading = true;
        const response = await httpClient.get(`anime`, {
          params: {
            q: name,
            page: page,
          },
        });
        if (response) {
          this.animeList = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
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
        return error;
      }
    },

    resetAnimeData() {
      this.anime = {};
      this.animeList = [];
    },
  },
});
