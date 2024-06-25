<template>
<div class="section bg">

    <div class="container" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
        <div class="shedule-title">ГЛАВНЫЕ ПРЕДСТОЯЩИЕ МАТЧИ</div>
        <h3 class="large-heading teams space-bottom">COUNTER-STRIKE - MAIN</h3>

        <div class="block-157">
            <div class="shedule">

                <div class="block-38">

                    <div class="partner-logos"></div>
                    <div class="block-39">
                        <div id="sheduleitem" class="shedule-item">
                            <div id="sheduleitem" class="date">
                                5 Июня - 9 Июня, 2024
                            </div>

                            <a href="#/shedule" id="sheduleitem" class="w-inline-block">
                                <div id="sheduleitem" class="medium-heading text-link uppercase">
                                    <strong>IEM KATOWICE 2024</strong>
                                </div>
                            </a>

                            <div>
                                <a href="#/">Check out the full match schedule</a>
                            </div>
                        </div>

                        <div id="sheduleitem" class="shedule-item">
                            <div id="sheduleitem" class="date">
                                5 Июня | 21:00 GMT+5
                            </div>

                            <a href="#/shedule" id="sheduleitem" class="w-inline-block">
                                <div id="sheduleitem" class="medium-heading text-link uppercase">
                                    <p>VS ASTRALIS</p>
                                </div>
                            </a>

                            <div>
                                <a href="#/">Check out the full match schedule</a>
                            </div>
                        </div>

                        <div id="sheduleitem" class="shedule-item">
                            <div id="sheduleitem" class="date">
                                5 Июня | 23:00 GMT+5
                            </div>

                            <a href="#/shedule" id="sheduleitem" class="w-inline-block">
                                <div id="sheduleitem" class="medium-heading text-link uppercase">
                                    <p>VS NATUS VINCERE</p>
                                    
                                </div>

                            </a>

                            <div>
                                <a href="#/">Check out the full match schedule</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <a href="#/shedule" class="button w-button">РАСПИСАНИЕ ВСЕХ МАТЧЕЙ</a>
        
    </div>
</div>
</template>

<style scoped>

.section.bg {
    color: #fff;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 100px;
    padding-right: 100px;
    display: block;
    position: static;
}

.section {
    margin-top: 0;
    margin-bottom: 0;
    padding: 40px 20px;
    display: block;
    position: static;
    padding-top: 5rem;
    padding-bottom: 4rem;

    border-top: 5px solid var(--gold-trans);
    border-bottom: 5px solid var(--gold-trans);
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

.large-heading.teams.space-bottom {
    align-self: flex-start;
    margin-bottom: 20px;
    padding-top: 40px;
}

.large-heading.teams {
    text-transform: uppercase;
    font-size: 60px;
    line-height: 80px;
}

.large-heading {
    text-align: left;
    letter-spacing: 0;
    margin-top: 0;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 700;
}

.space-bottom {
    -webkit-text-fill-color: inherit;
    background-clip: border-box;
    max-width: none;
}

.block-157 {
    width: 100%;
}

.shedule {
    flex-direction: column;
    flex: 1;
    order: 1;
    width: 100%;
    margin-top: 0;
    display: flex;
}

.block-38 {
    flex-direction: column;
    width: 100%;
    display: flex;
}

.partner-logos {
    filter: none;
    background-color: transparent;
    flex-direction: column;
    order: 1;
    justify-content: flex-end;
    align-self: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 40px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
}

.block-39 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-content: start;
    justify-content: space-between;
    display: grid;
}

#sheduleitem {
    grid-area: span 1/span 1/span 1/span 1;
}

.shedule-item {
    grid-column-gap: 21px;
    grid-row-gap: 16px;
    border-bottom: 1px solid var(--gray);
    flex-direction: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr .75fr;
    grid-auto-columns: 1fr;
    margin-top: 10px;
    padding-bottom: 0;
    padding-right: 0;
    display: grid;
}

.w-inline-block {
    max-width: 100%;
    display: inline-block;
}

.medium-heading.text-link.uppercase {
    color: var(--gold);
    text-transform: uppercase;
}

.medium-heading.text-link {
    opacity: 1;
    transition: opacity .2s;
}

.medium-heading {
    letter-spacing: -.03em;
    align-self: flex-start;
    margin-bottom: 13px;
    font-family: Roboto,Arial,sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    display: block;
}

strong {
    letter-spacing: -.03em;
    align-self: flex-start;
    margin-bottom: 13px;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    display: block;
    font-weight: 600;
    color: var(--gold);
    transition: 0.25s ease all;
}
strong:hover {
    color: var(--gold-trans);
}

p {
    letter-spacing: 1px;
    align-self: flex-start;
    margin-bottom: 13px;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    display: block;
    font-weight: 500;
    color: var(--gold);
    transition: 0.25s ease all;
}
p:hover {
    color: var(--gold-trans);
}

a {
    border-bottom: 3px none var(--sauna);
    color: var(--gold);
    text-transform: none;
    font-weight: 400;
    text-decoration: none;
    background-color: transparent
}
a:hover {
    color: var(--gold-trans);
}

.date {
    font-family: Roboto, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
    line-height: 125%;
}

div {
    display: block;
}

.shedule-title {
    font-size: 16px;
    color: var(--white);
    letter-spacing: 1px;
    font-weight: 500;
}

.list.partner {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    opacity: 1;
    text-align: left;
    object-fit: fill;
    flex-flow: wrap;
    flex: 0 auto;
    order: 0;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: column dense;
    align-content: center;
    justify-content: flex-start;
    align-self: flex-start;
    align-items: center;
    justify-items: start;
    width: 100%;
    height: auto;
    margin: 20px 0;
    padding-left: 0;
    padding-right: 0;
    list-style-type: none;
    display: flex;
    position: relative;
    left: 0;
    right: auto;
    overflow: auto;
}

.partners {
    opacity: 1;
    text-align: center;
    flex: 0 auto;
    width: 120px;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 12px;
    list-style-type: none;
    display: flex;
    position: static;
}

li {
    margin-bottom: 5px;
    font-size: 16px;
}

.logitechg {
    margin-left: 0;
}

img {
    vertical-align: 'middle';
    mix-blend-mode: normal;
    max-width: 100%;
    display: inline-block;
    border: 0;
}

a.button {
    background-color: var(--gold);
    letter-spacing: 3px;
    text-transform: uppercase;
    border-bottom-style: none;
    margin-top: 30px;
    padding: 14px 15px 12px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,.2);
    transition: 0.3s ease all;
}
.button:hover {
    background-color: var(--gold-trans);
}

a.w-button {
    color: #fff;
    cursor: pointer;
    border: 0;
    border-radius: 0;
    text-decoration: none;
    display: inline-block;
}
</style>