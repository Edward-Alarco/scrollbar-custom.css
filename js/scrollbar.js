(function(){

    const trackColor = document.getElementsByTagName('body')[0].getAttribute('track')
    const thumbColor = document.getElementsByTagName('body')[0].getAttribute('thumb')
    
    let root = document.documentElement;
    
    //Window load for introduce the colors
    window.addEventListener("load", ()=>{
        root.style.setProperty('--thumbColor', thumbColor)
        root.style.setProperty('--trackColor', trackColor)
    })

}())