function Dognumber() {
    var dogamount = prompt('How many dogs do you own?')
    var response
    var invalid = prompt('Sorry your response was invald')
    
    if (dogamount === 1) {
    response = ('Ohh 1 dog is great!');
    } else if (dogamount === 2) {
    response = ('Ohh boy 2 dogs is even better!')
    } else if (dogamount === 3) {
    response = ('Wow 3 dogs! That is the best!')
    }else {
    response = ('Invalid selection')
    }

    console.log('Dog amount listed as')
    document.write('So cool to see you own ' + dogamount)
}

function changecolor() {
    var backcolor = prompt('What is your fav color??')
    var el = document.body.style.background = backcolor
}

//



Dognumber()
changecolor()