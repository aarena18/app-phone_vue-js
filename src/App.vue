<template>
  <nav>
    <router-link to="/">Journal</router-link> |
    <router-link to="/contacts">Contacts</router-link> |
    <router-link to="/clavier">Clavier</router-link>
  </nav>

  <router-view />
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeeeee;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #eeeeee;
}

nav a.router-link-exact-active {
  color: #2c56c9;
}
</style>
