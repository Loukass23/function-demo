// I - Questions on previous exercises?

// II - funtions

function exampleFunction() {
    var greetingText = "hi"
    console.log(greetingText)
    return greetingText
}
var text = exampleFunction()
console.log('text', text)

exampleFunctionWithParam("hi", "girls")

// 1 function declaration/definition/statement
function exampleFunctionWithParam(param, person) { //params
    // body

    var greetings = param + " " + person
    // template literals
    var greetingsLitteral = `${param} ${person}`
    console.log(greetingsLitteral)
    return greetingsLitteral

}

// 3 function call, arguments
exampleFunctionWithParam("Anyone", "hallo") //args
// exampleFunctionWithParam("anything")

// function declaration (hoisted) vs expression
// myFunctionExpression('au revoir')

var myFunctionExpression = function (text) {
    console.log('text', text)
}

myFunctionExpression("bonjour")

// Shopping Cart Data
var myIphone = { brand: "apple", price: 9999 }
var myS200 = { brand: "samsung", price: 9998 }
var myAndroid = { brand: "google", price: 5000 }

var cart1 = [myAndroid, myIphone]
var cart2 = [myAndroid, myIphone, myS200, myIphone]
var discount1 = 10



var sumC1 = sumOfCart(cart1)
console.log('sumC1', sumC1)

var sumC2 = sumOfCart(cart2, discount1)
console.log('sumC2', sumC2)


// => sum of carts
// => order of paremeters matters!
function sumOfCart(cart, promo) {
    console.log('cart', cart)
    var sum = 0
    for (var i = 0; i < cart.length; i++) {
        console.log('cart[i].price', cart[i].price)
        //  sum = sum + cart[i].price
        sum += cart[i].price

    }

    if (promo) {
        sum -= 10 * sum / 100
        return Math.round(sum)
    }
    else return sum

}


// destructuring
var iphonePrice = myIphone.price

var { price } = myIphone
console.log('price', price)

var shopObject1 = {
    discount: discount1,
    cart: cart2,
}
console.log(sumOfCartDestructured(shopObject1))

function sumOfCartDestructured({ cart, discount }) {
    // var { cart, discount } = shopObject
    var sum = 0
    for (var i = 0; i < cart.length; i++) {
        console.log('cart[i].price', cart[i].price)
        //  sum = sum + cart[i].price
        sum += cart[i].price

    }

    if (discount) {
        sum -= 10 * sum / 100
        return Math.round(sum)
    }
    else return sum

}

// Next week:
// DOM manipulation
// Arrow syntax & Moder JS / let & const


// IV Github recap

// 1 => git init(once only!)
// 2 => git add <Files> (. for all files)
// 3=> git commit -m "message"
// 4=> git remote add <Name or remote> <GitHubUrl>