import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";

export const useCharacter = defineStore("character", {
    state: () => ({
        character: ref({}),
        characterList: ref([]),
        loading: ref(false),
    }),

    getters: {
        getCharacter() {
            return this.character;
        },
        getCharacterList() {
            return this.characterList;
        },
        isLoading() {
            return this.loading;
        },
    },

    actions: {
        async searchCharacterAction(name, page = 1) {
            try {
                this.loading = true;
                const response = await httpClient.get(`characters`, {
                    params: {
                        q: name,
                        page: page,
                    },
                });
                if (response) {
                    this.characterList = response.data;
                    this.loading = false;
                }
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        },

        async getCharacterDetailAction(id) {
            try {
                const response = await httpClient.get(`characters/${id}`);
                this.character = response.data;
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        resetCharacterData() {
            this.character = {};
            this.characterList = [];
        },
    },
});
