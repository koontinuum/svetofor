let $sred = document.querySelectorAll('.sred')
let $sorange = document.querySelectorAll('.sorange')
let $sgreen = document.querySelectorAll('.sgreen')
let $wred = document.querySelectorAll('.wred')
let $worange = document.querySelectorAll('.worange')
let $wgreen = document.querySelectorAll('.wgreen')
let $rgb = document.querySelectorAll('.rgb')
// let $p1 = document.querySelectorAll('.p1')
// let $p2 = document.querySelectorAll('.p2')
// let $p3 = document.querySelectorAll('p3')
// let $p4 = document.querySelectorAll('p4')

let red = true
let orange = false
let green = false
// let wgreen = false
// let wgreenTime
// let worangeTime
// let worange = false
// let wred = true
let redTime
let orangeTime
let greenTime
let redInterval = setInterval(function () {
    clearInterval(greenTime)
    $sred[0].style.backgroundColor = "red"
    $sred[1].style.backgroundColor = "red"
    $wgreen[0].style.backgroundColor = "greenyellow"
    $wgreen[1].style.backgroundColor = "greenyellow"
    $worange[0].style.backgroundColor = "black"
    $worange[1].style.backgroundColor = "black"
    $sgreen[0].style.backgroundColor = "black"
    $sgreen[1].style.backgroundColor = "black"
    $wred[0].style.backgroundColor = "black"
    $wred[1].style.backgroundColor = "black"
    $sorange[0].style.backgroundColor = "black"
    $sorange[1].style.backgroundColor = "black"
    $rgb[0].style.backgroundColor = 'red'

    red = false
    orange = true
    $sred[0].innerHTML = "2"
    $sred[1].innerHTML = "2"
    $wgreen[0].innerHTML = '2'
    $wgreen[1].innerHTML = "2"
    redTime = setInterval(function () {
        $sred[0].textContent = $sred[0].textContent - 1
        $sred[1].textContent = $sred[0].textContent
        $wgreen[0].textContent = $wgreen[0].textContent - 1
        $wgreen[1].textContent = $wgreen[0].textContent
    }, 1000)
    let orangeInterval = setTimeout(function () {
        clearInterval(redTime)
        $sred[0].style.backgroundColor = "black"
        $sred[1].style.backgroundColor = "black"
        $sorange[0].style.backgroundColor = "orange"
        $sorange[1].style.backgroundColor = "orange"
        $wred[0].style.backgroundColor = 'red'
        $wred[1].style.backgroundColor = 'red'
        $wgreen[0].style.backgroundColor = "black"
        $wgreen[1].style.backgroundColor = "black"
        orange = false
        green = true
        $sorange[0].innerHTML = "1"
        $sorange[1].innerHTML = "1"
        $worange[0].innerHTML = "1"
        $worange[1].innerHTML = "1"
        orangeTime = setInterval(function () {
            $sorange[0].textContent = $sorange[0].textContent - 1
            $sorange[1].textContent = $sorange[0].textContent
            $worange[0].textContent = $worange[0].textContent - 1
            $worange[1].textContent = $worange[0].textContent
        }, 1000)
    }, 3000)
    let greenInterval = setTimeout(function () {
        if (green) {
            clearInterval(orangeTime)
            $sgreen[0].style.backgroundColor = "greenyellow"
            $sgreen[1].style.backgroundColor = "greenyellow"
            $sorange[0].style.backgroundColor = "black"
            $sorange[1].style.backgroundColor = "black"
            $wred[0].style.backgroundColor = "red"
            $wred[1].style.backgroundColor = "red"
            $wgreen[0].style.backgroundColor = "black"
            $wgreen[1].style.backgroundColor = "black"
            $worange[0].style.backgroundColor = "orange"
            $worange[1].style.backgroundColor = "orange"
            $wred[0].style.backgroundColor = "black"
            $wred[1].style.backgroundColor = "black"
            $rgb[0].style.backgroundColor = 'green'
            red = true
            green = false
            $sgreen[0].innerHTML = "2"
            $sgreen[1].innerHTML = "2"
            $wred[0].innerHTML = "2"
            $wred[1].innerHTML = "2"
            greenTime = setInterval(function () {
                $sgreen[0].textContent = $sgreen[0].textContent - 1
                $sgreen[1].textContent = $sgreen[0].textContent
                $wred[0].textContent = $wred[0].textContent - 1
                $wred[1].textContent = $wred[0].textContent
            }, 1000)
        }
    }, 5000)
}, 8000)

// let wgreenInterval = setTimeout(function () {
//     if (wgreen) {
//         clearInterval(worangeTime)
//         wred = true
//         wgreen = false
//         $wgreen[0].innerHTML = "2"
//         $wgreen[1].innerHTML = "2"
//         wgreenTime = setInterval(function () {
//             $wgreen[0].textContent = $wgreen[0].textContent - 1
//             $wgreen[1].textContent = $wgreen[0].textContent
//         }, 1000)
//     }
// })