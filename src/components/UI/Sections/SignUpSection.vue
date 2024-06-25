<template>
<section class="section">
    <div class="block-container layout-block-container w-container"></div>
</section>
</template>

<style scoped>
.section {
    background-image: linear-gradient(to bottom,var(--opacity-25),var(--opacity-25)),url(https://cdn.prod.website-files.com/5f9bee46b9797ea7bdf87204/66549cbfd57e1fcbf8c8a176_Untitled-1.png);
    background-position: 0 0,50% 100%;
    background-size: auto,cover;
    background-attachment: scroll,fixed;
    padding-top: 300px;
    padding-bottom: -400px;
}

.block-container {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-flow: column;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-self: flex-start;
    align-items: center;
    width: 70vw;
    max-width: none;
    padding-left: 0;
    display: flex;
}

.layout-block-container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.w-container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
}
.w-container:before {
    content: " ";
    grid-area: 1/1/2/2;
    display: table;
}
</style>