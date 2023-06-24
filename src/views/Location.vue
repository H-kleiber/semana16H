<script setup>
import axios from 'axios';
import { ref } from 'vue';

const location= ref([]);
const getData2 = async () => {
	const response = await axios.get(`https://rickandmortyapi.com/api/location`);
  location.value = response.data.results;
};
getData2()

</script>
<template>
   <div class="container">
        <div class='card2' v-for="element2 in location">
            <div class='item-location'>{{ element2.name }}</div>
            <div class='item-location'>{{ element2.type }}</div>
            <div class='item-location'>{{ element2.dimension }}</div>
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
 .card2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4px;
  width: 300px;
  height: 100px;
  border: 1px solid rgb(225, 222, 222);
  border-radius: 5px;
 }
 .item-location{
  align-self: center;
 }
</style>

