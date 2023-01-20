<template>
  <div class="home">
    <h1>Votre historique d'appels</h1>
  </div>
  <div class="list">
    <CardContact
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
    />
  </div>
</template>

<script>
import CardContact from '@/components/CardContact.vue';
export default {
  name: "HomeView",
  components: {
    CardContact,
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};

</script>

<style scoped></style>
