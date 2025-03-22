import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";

export const usePeople = defineStore("people", {
  state: () => ({
    person: ref({}),
    peopleList: ref([]),
    loading: ref(false),
  }),

  getters: {
    getPerson() {
      return this.person;
    },
    getPeopleList() {
      return this.peopleList;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async searchPeopleAction(name, page = 1) {
      try {
        this.loading = true;
        const response = await httpClient.get(`people`, {
          params: {
            q: name,
            page: page,
          },
        });
        if (response) {
          this.peopleList = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

    async getPersonDetailAction(id) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.access}`,
        };
        const response = await httpClient.get(`people/${id}`, {
          headers,
        });
        this.person = response.data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    resetPeopleData() {
      this.person = {};
      this.peopleList = [];
    },
  },
});
