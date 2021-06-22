const title = document.querySelector('.details')

function getTitle(doc) {
    let li = document.createElement('li')
    let name = document.createElement('span')
}


db.collection('jobs').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        getTitle(doc)
    })
})




