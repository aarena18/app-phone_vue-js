<template>
  <div class="home">
    <h1>Votre historique d'appels</h1>

    <div class="list" v-for="appel in journalAppel" :key="appel.id">
      <h2>{{ appel.name }}</h2>
      <span>{{ appel.tel }}</span>
      <button class="test" @click="call(appel.name, appel.tel)">appler</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  computed: {
    journalAppel() {
      return this.$store.state.journalAppel;
    },
    
  },
  methods: {
    addCall(name, tel) {
      this.$store.commit("call", { name, tel });
    },
  },
};
</script>

<style scoped></style>
