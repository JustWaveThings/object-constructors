const video = {
    title: 'a',
    play() {
        console.log(this)
    }
}

video.play();

function Video(title, grade) {
    this.title = title
    this.grade = 8
    console.log(this)
}


video.play();

const v = new Video('blue lagoon');