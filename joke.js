function badBackground(){

    if (document.querySelector('.new-background')) {
        var num = Math.floor(Math.random() * 20)+1
        if( num==1){
            document.body.classList.toggle("new-background")
        document.body.classList.toggle("bad-background")
        document.querySelector('#bingo').innerHTML = "I hope you enjoy this Jimmy"
        }
       
    }
    console.log(num)
}