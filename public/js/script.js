$(document).ready(()=>{
    $('.scrape-new').on("click", ()=>{
        $.get('/api/scrape')
    })
})