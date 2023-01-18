<template>
  <div class="contacts">
    <h1>This is the contact page</h1>
  </div>
  <div>
    <CardContact
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
    />
  </div>
</template>

<script>
import CardContact from "@/components/CardContact.vue";
export default {
  name: "ContactsView",
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

<style></style>
