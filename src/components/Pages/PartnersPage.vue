<template>
    <div class="section teams">
        <div class="container">
            <h3 class="large-heading teams-2 space-bottom">Партнеры</h3>
            <p>Наша киберспортивная организация HRONIX развивается с каждым днем, но для развития в любой сфере нужно иметь поддельников. Это страница создана специально для них, поскольку эти компании, которые помогают нам с каждой проблемой очень сильно продвигают нас выше и дальше.</p>
            <p>Производитель игровой переферии: <span>Logitech</span></p>
            <p class="tp">Производитель энергетических напитков: <span>Red Bull</span></p>
            <p class="tp">Производитель игровых мониторов: <span>OMEN</span></p>
            <p class="tp">Производитель брендовой одежды: <span>PUMA</span></p>
            <p class="tp">Производитель игровых кресел: <span>SECRETLAB</span></p>
            <p class="tp">Киберспортивная платформа: <span>FACEIT</span></p>
            <p class="tp">Ставки на спорт: <span>BETBOOM</span></p>

            <p class="info"><span>HRONIX ESPORTS</span> ОЧЕНЬ ВАМ БЛАГОДАРНА ЗА ВСЕ ГОДЫ РАБОТЫ С ВАМИ! НАДЕЕМСЯ НА ПЛОДОТВОРНОЕ СОТРУДНИЧЕСТВО И ДАЛЬШЕ!</p>
        </div>
    </div>
    </template>
    
    <style scoped>
    .section.teams {
        color: #fff;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding-left: 50px;
        padding-right: 50px;
        display: block;
        position: static;
    }
    
    .section {
        justify-content: flex-start;
        margin-top: 0;
        margin-bottom: 67px;
        padding: 40px 20px;
        display: block;
        position: static;
    }
    
    .container {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        background-color: transparent;
        border: 1px #000;
        flex-direction: column;
        flex: 0 auto;
        justify-content: center;
        align-self: center;
        align-items: flex-start;
        width: 100%;
        max-width: 100%;
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0;
        padding: 0 0 10px;
        display: flex;
        position: static;
    }
    
    .large-heading.teams-2.space-bottom {
        align-self: flex-start;
        margin-bottom: 20px;
        padding-top: 40px;
    }
    
    .large-heading.teams-2 {
        text-transform: uppercase;
        font-size: 60px;
        line-height: 80px;
    }
    
    .space-bottom {
        -webkit-text-fill-color: inherit;
        background-clip: border-box;
        max-width: none;
    }
    
    .content-width.players {
        flex-direction: row;
        align-self: flex-start;
        margin-bottom: 0;
        padding-top: 0;
        display: flex;
    }
    
    p {
        margin-top: 50px;
        margin-bottom: 10px;
        letter-spacing: 1px;
        font-size: 20px;
        max-width: 1600px;
        line-height: 125%;
    }
    span {
        color: var(--gold);
        font-size: 18px;
        font-weight: 600;
    }
    .tp {
        margin-top: 10px;
        margin-bottom: 10px;
        letter-spacing: 1px;
        font-size: 18px;
        max-width: 850px;
        line-height: 125%;
    }
    .info {
        margin-top: 100px;
    }
    </style>