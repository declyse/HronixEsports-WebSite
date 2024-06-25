<template>
    <div class="alert-box">
      <strong>Произошла критическая ошибка в работе сайта</strong>
      <br/>
        <slot />
    </div>
</template>
  
<style scoped>
.alert-box {
    padding: 20px;
    background-color: transparent;
    text-align: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;

    display: block;

    margin-bottom: 25px;
}
    
strong {
    color: rgb(163, 161, 255);
}
</style>