<script setup>
import axios from 'axios';
import { ref } from 'vue';

const episodio= ref([]);
const getData = async () => {
	const response = await axios.get(`https://rickandmortyapi.com/api/episode`);
  episodio.value = response.data.results;
  console.log(episodio.value)

};
getData()
</script>
<template>
    <div class="container">
        <div class='card3' v-for="element3 in episodio">
            <div class='item-location'>{{ element3.name }}</div>
            <div class='item-location'>{{ element3.air_date }}</div>
            <div class='item-location'>{{ element3.episode }}</div>
        </div>
    </div>
  </template>
  
  <style>
.container{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
 .card3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4px;
  width: 270px;
  height: 100px;
  gap: 5px;
  border: 1px solid rgb(225, 222, 222);
  border-radius: 5px;
 }
 .item-location{
  align-self: center;
 }
</style>

