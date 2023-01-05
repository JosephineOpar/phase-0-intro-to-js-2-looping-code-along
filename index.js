// function writeCards(["Charlie", "Samip", "Ali"], "birthday") {
function writeCards(namesOfFriends, event = "birthday") {
    let messages = []
    for (let i = 0; i < namesOfFriends.length; i = i + 1) {
        messages.push(`Thank you, ${namesOfFriends[i]}, for the wonderful ${event} gift!`)
    }
    // console.log(messages)
    return messages
}

writeCards(["Charlie", "Samip", "Ali"], "birthday")

function countDown(n) {
    while (n >= 0) {
        console.log(n)
        n=n-1
    }
}
