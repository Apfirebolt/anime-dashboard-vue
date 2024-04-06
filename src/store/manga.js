import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";

export const useManga = defineStore("manga", {
  state: () => ({
    manga: ref({}),
    mangaList: ref([]),
    loading: ref(false),
  }),

  getters: {
    getManga() {
      return this.manga;
    },
    getMangaList() {
      return this.mangaList;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async searchMangaAction(name, page = 1) {
      try {
        this.loading = true;
        const response = await httpClient.get(`manga`, {
          params: {
            q: name,
            page: page,
          },
        });
        if (response) {
          this.mangaList = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

    async getMangaDetailAction(id) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.access}`,
        };
        const response = await httpClient.get("groups?page=" + page, {
          headers,
        });
        this.manga = response.data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    resetMangaData() {
      this.manga = {};
      this.mangaList = [];
    },
  },
});
