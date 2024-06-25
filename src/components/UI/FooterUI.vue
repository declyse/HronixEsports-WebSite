<template>
    <footer class="footer">
        <div class="menu">
            <a class="menu__item" href="#/brandbook">Брендбук</a>
            <a class="menu__item" href="#/privacy">Политика конфиденциальности</a>
            <a class="menu__item" href="#/contact">Контакты</a>
        </div>
        <a class="menu__item__2">HRONIX ESPORTS LLC, 2024</a>
        <div class="shop">
            <a class="shop__item" href="https://vk.com/sunketsu">Вконтакте</a>
            <a class="shop__item" href="https://vk.com/sunketsu">Телеграм канал</a>
            <a class="shop__item" href="https://vk.com/sunketsu">HLTV</a>
        </div>
    </footer>
    </template>
    
    <style scoped>

    .footer {
        border-top: 5px solid var(--gold);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        grid-template-rows: auto;
        grid-template-columns: 1fr max-content 1fr;
        grid-auto-columns: 1fr;
        justify-content: space-between;
        align-items: center;
        justify-items: stretch;
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 20px;
        padding-left: 100px;
        padding-right: 100px;
        padding-bottom: 20px;
        display: grid;
    }

    .menu__item__2 {
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-left: 0;
        margin-right: 0;
        padding: .5rem 1rem;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.2em;
        text-decoration: none;
    
        vertical-align: top;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        text-decoration: none;
        display: inline-block;
        position: relative;
    
        font-weight: 600;
    }
    
    .menu__item {
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-left: 0;
        margin-right: 0;
        padding: .5rem 1rem;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.2em;
        text-decoration: none;
    
        vertical-align: top;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        text-decoration: none;
        display: inline-block;
        position: relative;
    
        font-weight: 600;
    }
    .menu__item:hover {
        color: var(--gold);
    }
    
    .shop {
        grid-area: span 1/span 1/span 1/span 1;
        justify-self: end;
    }
    
    .shop__item {
        background-color: var(--gold);
        color: white;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 14px 20px 12px;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.2em;
        text-decoration: none;
    
        transition: 0.3s ease all;
    }
    .shop__item:hover {
        background-color: var(--gold-trans);
    }
    
    .logotype {
        width: 60px;
        height: 60px;
    }
    
    img {
        mix-blend-mode: normal;
        border: 0;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
    }
    </style>