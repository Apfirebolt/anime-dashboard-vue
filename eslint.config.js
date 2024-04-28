import pluginVue from 'eslint-plugin-vue'
export default [
    ...pluginVue.configs['flat/recommended'],
    // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
    {
        rules: {
            // override/add rules settings here, such as:
            // 'vue/no-unused-vars': 'error'
            'no-console': 'error' // Enable console statements.
        }
    }
]