const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,
        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: "GAMBURGER",
        price: 20500,
        amount: 0,
        kcall: 400,
        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }

    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 800,
        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }

    }
}
const btn = [...document.querySelectorAll('.main__product-btn')]

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        prepare(this)

    })
}

function prepare(elBtn) {
    let parent = elBtn.closest(".main__product")
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector(".main__product-num")
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')


    let sym = elBtn.getAttribute('data-symbol')

    let count = foods[parentId].amount
    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    foods[parentId].amount = count
    num.innerHTML = count

    price.innerHTML = foods[parentId].calcSum
    kcall.innerHTML = foods[parentId].kcallSum


}




// [1-100 LVL]

let headerTimerExtra = document.querySelector('.header__timer-extra')

function TimerWeb() {
    headerTimerExtra.innerHTML++

    if (headerTimerExtra.innerHTML < 70) {
        setTimeout(() => {
            TimerWeb()
        }, 50);
    } else if (headerTimerExtra.innerHTML >= 70 && headerTimerExtra.innerHTML < 90) {
        setTimeout(() => {
            TimerWeb()
        }, 250);
    } else if (headerTimerExtra.innerHTML >= 90 && headerTimerExtra.innerHTML < 100) {
        setTimeout(() => {
            TimerWeb()
        }, 1000);
    } else if (headerTimerExtra.innerHTML == 100) {
        setInterval(setTimeout)
    }


}
TimerWeb()
