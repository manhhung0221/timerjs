class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start.bind(this));
        this.pauseButton.addEventListener("click",this.pause.bind(this))
        this.interValID=null
    }
    start() {
        if (this.interValID === null) {
            this.interValID = setInterval(() => {
                if (this.durationInput.value > 0) {
                    this.durationInput.value = this.durationInput.value - 1
                }
                else {
                    console.log("Time Out")
                    clearInterval(this.interValID)
                    this.interValID = null
                }
            }, 1000)
        }
    }
    pause() {
        if (this.interValID!==null){
            clearInterval(this.interValID)
            this.interValID=null
            const notify=document.createElement("p")
            notify.innerText='Pause mẹ rồi'
            document.body.appendChild(notify)

        }
    }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const a = new Timer(durationInput, startButton, pauseButton);



