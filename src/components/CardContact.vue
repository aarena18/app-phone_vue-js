<template>
    <div>
        <h2>{{contact.name}}</h2>
        <span>numéro: +{{contact.tel}}</span>
    </div>
</template>
<script>
export default {
    name: "CardContact",
    props:[
        "contact"
    ]
}
</script>
<style scoped> 
    div {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    background-color: #42b983;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px; 
}
</style>