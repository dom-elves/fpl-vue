<template>
    <div>
        <p class="text-3xl">Gameweeks component</p>
        <p> {{ this.gameweeks }}</p>
    </div>
</template>

<script>

export default {

  name: 'GameWeeks',

  props: ['gameweeks'],

  
}
</script>