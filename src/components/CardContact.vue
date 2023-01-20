<template>
  <div>
    <h2>{{ contact.name }}</h2>
    <p>📞 <span>{{ contact.tel }}</span></p>
    <button>Appeler</button>
  </div>
</template>

<script>
export default {
  name: "CardContact",
  props: ["contact"],
};
</script>

<style scoped>
div {
  width: 300px;
  margin: 0 auto;
  height: 150px;
  background-color: #2c2c2d;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}
button {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #2c56c9;
  color: white;
  font-weight: bold;
  margin-top: 15px;
  
}
button:hover{
  background-color: #3e71fd;
}

p{
  color: #eeeeee;
  font-weight: bolder;
}
span{
  color: #eeeeee;
  font-weight: 400;
}
h2{
  color: white;
  font-weight: bolder;
  margin: 0;
  padding: 0;
}
</style>
