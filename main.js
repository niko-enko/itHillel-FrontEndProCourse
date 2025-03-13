let ladder = {
    step: 0,
    up: function () { this.step++; return this
    },
    down: function () { if (this.step === 0) {
            console.error('Поточна сходинка = 0. Ви не можете спуститись нижче останньої сходинки')
        } else {
            this.step--;
            return this
        }
    },
    showStep: function () { console.log(this.step); return this
    }
};

ladder
    .up()
    .up()
    .up()
    .down()
    .down()
    .showStep() // 1
    .up()
    .showStep(); // 2

