rightWristY = 0;
leftWristY = 0;
song = "";
song2 = "";

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw() {
    image(VIDEO, 0, 0, 425, 425);
}

function Song_Name() {
}

function setup() {
    canvas = createCanvas(425, 425);
    canvas.position(490, 200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("POSENET IS INITIALIZED");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        rightWristY = results[0].pose.rightWrist.y;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWrist Y = " + leftWristY + "RightWrist Y = " + rightWristY);
    }

    if (rightWristY > leftWristY) {
        song.play("music.mp3");
        document.getElementById("button").innerHTML = "Song Name : " + "Harry Potter";
    }
    else {
        song2.play("music2.mp3");
        document.getElementById("button").innerHTML = "Song Name : " + "Guitar";
    }
}