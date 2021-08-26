function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DmOrS2yNC/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
    if(error)
    {
    console.error(error);       
    }
    else
    {
    console.log(results);
    }

    var dog = 0
    var cat = 0
    var lion = 0

    image1 = document.getElementById("img_LOL")
    random_r = Math.floor(Math.random()* 255) +1;
    random_g = Math.floor(Math.random()* 255) +1;
    random_b = Math.floor(Math.random()* 255) +1;
    document.getElementById("result_label").innerHTML = " Detected voice -" +  results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Dectected Dog - '+dog+' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

     if (results[0].label == "Dog barking") 
    { 
        image1.src = 'dog.gif';
         dog = dog+1; 
    } 
    else if (results[0].label == "cat")
    {
         image1.src = '77c095cea46447df0f8edad61bff05e7.gif'; 
         cat = cat + 1;
    } 
    else if (results[0].label == "Roar")
    { 
    image1.src = 'lion.gif';
    lion = lion + 1;
    }
    else 
    {
    image1.src = 'sound icon.jpg'
    }
  }

