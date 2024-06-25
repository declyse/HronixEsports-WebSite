<template>
<div class="dialog">
    <div class="regform">
      <p class="title">Связь с клубом</p>

      <div class="reg-form">
        <input type="text" placeholder="Введите ваше имя">
        <input type="text" placeholder="Введите вашу почту">
        <input type="text" placeholder="Введите ваше сообщение">
      </div>

      <div class="privacy-radio">
        <input class="checkbox-text" type="checkbox" style="margin-left: -235px;"><p class="text">Нажимая на кнопку, вы соглашаетесь c <span>политикой конфиденциальности</span> и даете согласие на обработку собственных персональных данных</p>
      </div>

      <button class="button">Связаться</button>
    </div>
</div>
</template>

<script>
import toggleMixin from '../mixins/ToggleMixin'

export default {
    name:'my-dialog',
    mixins: [toggleMixin],
    props:{
        show:{
            type: Boolean,
            default:true
        }
    },
    data(){
    
    },
    methods:{
      fill_checker(){
        let policy_chb_main_elem = document.getElementById("policy_chb_main")
        let s_a_a_main_elem = document.getElementById("s_a_a_main")
        let name_main_elem = document.getElementById('name_main')
        let phone_main_elem = document.getElementById("phone_main")

        if(name_main_elem.value !== "" & phone_main_elem.value !== "" & policy_chb_main_elem.checked){
          s_a_a_main_elem.className = "regformbutton"
        }
        else{ 
          s_a_a_main_elem.className = "regformbutton_deact"
        }
      }
        
    }
}


</script>

<style scoped>
.dialog {
  top:0;
  bottom: 0;
  right: 0;
  left:0%;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  z-index: 499;
}

p.title {
  max-width: 100%;
  width: 100%;
  justify-content: center;
  text-align: center;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 4vh;
  margin-top:3vh;
  z-index: 501;
}

.regform {
  position: absolute;
  margin-left: 64vh;
  margin-top: 10%;
  width: 70vh;
  height: 70vh;
  margin-bottom: 2%;
  z-index: 501 !important;
}

input {
  margin-top: 2vh;
  display: block;
  font-size: 23px;
  width:60vh;
  margin-left:5vh;
  z-index: 501;
  border: 1px solid var(--gold);
  padding: 15px;
}

.reg-form {
  margin-top: 50px;
  z-index: 501 ;
  font-size: 3vh!important;
}

p.text {
  display: inline-block;
  position: relative;
  font-size: 16px;
  margin-top: -16px;
  margin-left: 75px;
  padding-right: 40px;
}

span {
  color: var(--gold);
}
span:hover {
  cursor: pointer;
  color: var(--gold-trans);
}

.privacy-radio {
  margin-top: 50px;
}

button {
  justify-items: center;
  justify-content: center;
  position: center;
}

.button {
  margin-top: 50px;
  padding: 20px 0px;
  background-color: var(--gold);
  cursor: pointer;
  width: 100%;
  font-size: 24px;
  text-transform: uppercase;
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
}
</style>