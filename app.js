var dogtype = prompt('What dogs do you like the most? Big Dogs, Medium Dogs, Small Dogs');
var dogresponse;

if (dogtype == 'Big Dogs') {
    dogresponse = 'Big Dogs are great';
} else if (dogtype == 'Medium Dogs') {
    dogresponse = 'I Love Medium Dogs'
} else if (dogtype == 'Small Dogs') {
        dogresponse = ('Ohh you picked the wrong type')
    }
    else {
    dogresponse = ("Invalid Response")
    }

    console.log ("evaluation ", dogresponse)
    document.write ('your response ', dogresponse)