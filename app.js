const audio = document.querySelector('audio')
const canvas = document.querySelector('canvas')

const ctx = canvas.getcontext('2d')
const context = new AudioContext()
const analyser = context.createAnalyser()
const source = context.createMediaElementSourcce(audio)

const fbc_array = new Uint8Array(analyser.frequencyBinCount)

window.addEventListener('load',() =>{
    source.connect(analyser)
    analyser.connect(context.destination)

    loop()
}, false)

function loop () {
    window.requestAnimationFrame(loop)
    analyser.getByteFrequencyData(fbc_array)
    ctx.clearRect(0,0, canvas.width, canvas,hight)
    ctx.fillstyle = '#ff0000'

    let bar_x
    let bar_width
    let bar_height
    let bars = 100

    for (let i = 0; i<bar_height;i++){
        bar_x = i*3
        bar_width = 2
        bar_height = -(fbc_array[i]/2)
        ctx.fillReact(bar_x,canvas.height,bar_width,bar_height)

    }

}