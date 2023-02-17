class forgout{
    static open(){
        const span = document.querySelector('.esqueceu')
        const modal = document.querySelector('.containerModal')
        span.addEventListener('click', (event) => {
            event.preventDefault()
            modal.style.display = "flex"
            
        })
    }

    static close(){
        const icon = document.querySelector('.uil-times-circle')
        const modal = document.querySelector('.containerModal')
        icon.addEventListener('click', (event) => {
            event.preventDefault()
            modal.style.display = "none"
        })
    }
}
forgout.open()
forgout.close()