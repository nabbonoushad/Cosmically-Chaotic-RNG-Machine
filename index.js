function getRandHelper(n){
    let rngLi = []
    for (let i = 0; i < n; i++) {
        rngLi.push(Math.floor(Math.random()*n))
    }
    return rngLi[Math.floor(Math.random()*rngLi.length)]
}
function getRand(n){
    if(n == 0){
        n++
        return getRandHelper(n)
    }else{
        return getRandHelper(n)
    }
}
function getRNG(n){
    let rngList = {}
    let rand = []
    for (let i = 0; i < n; i++) {
        let rngArrToAdd = []
        for (let i1 = 0; i1 < n; i1++) {
            let rngToAdd = Math.floor(Math.random()*n)
            rngArrToAdd.push(rngToAdd)
            rand.push(Math.floor(Math.random()*n))
        }
        rngList[i] = rngArrToAdd
        rand.push(Math.floor(Math.random()*n))
    }
    let rngArr = rngList[Math.floor(Math.random()*n)]
    let rng = rngArr[Math.floor(Math.random()*rngArr[Math.floor(Math.random()*Math.floor(Math.random()*rand[Math.floor(Math.random()*getRand(rand[Math.floor(Math.random()*n)]))]))])]
    return rng
}
console.log(getRNG(100))