<template>
  <div class="contacts">
    <h1>This is the contact page</h1>
    <CardAdd @addContact="addContact"/>
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
import CardAdd from "@/components/CardAdd.vue";
import CardContact from "@/components/CardContact.vue";
export default {
  name: "ContactsView",
  components: {
    CardContact,
    CardAdd,
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>

<style></style>
