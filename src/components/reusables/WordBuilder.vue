<template>
    <div class="word">
        <span v-for="(letter, key) in word" :key="key">
            {{ letter === ' ' ? '&nbsp;' : letter }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'WordBuilder',
    props: ['word']
}
</script>

<style lang="scss" scoped>
.word {
  display: flex;
  justify-content: space-between;
}
</style>