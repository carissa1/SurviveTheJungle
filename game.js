var canvas;
var ctx;
var keys = [];
var txt = "";
var i;
var speed;
var txtList;
var j;
var speed2;
var jungleSound = new Audio();
jungleSound.src = "jungleSound.mp3";
jungleSound.load()

var nextTxt = false;
var nextThing = false;
var nextDelete = false;

var win = false;
var lose = false;
var aloneTrue = false;
var helpTrue = false;
var btnShow = false;

var num1 = false; // First btn shows
var num1OnlyOnce = false; //num1 isn't true yet
var num2 = false; // first question Q1 - alone or help
// ALONE
var num3 = false;
var num4 = false;
var num5 = false;
var num5OnlyOnce = false; //makes sure that the Alone() only gets called once for num5 and it doesn't call it in num5A, num6, num7, etc.
var num5A = false; //Extra
var num6 = false;
var num7 = false;
var num8 = false;
var num9 = false;
// HELP
var num10 = false;
var num10OnlyOnce = false; //makes sure that the Alone() only gets called once for num10 and it doesn't call it in num11, num12, num13, etc.
var num11 = false;
var num12 = false;
var num13 = false;
var num14 = false;
var num15 = false;
var num16 = false;

var answer = "";
var Q1 = ""; //Yasuni National Park, Ecuador. Tumucumaque National Park, Brazil. Jau National Park, Brazil. Madidi National Park, Bolivia.
var Q2 = ""; //go alone or get help

window.onkeydown = function(event){
    keys[event.key] = true;
    console.log(event);
};

window.onkeyup = function(event){
    keys[event.key] = false;
};

function startGame(){
    btn = document.getElementById("btn1") // grabs first button
    btn2 = document.getElementById("btn2")
    btn3 = document.getElementById("btn3")
    btn4 = document.getElementById("btn4")
    btn5 = document.getElementById("btn5")
    btn6 = document.getElementById("btn6")
    input = document.getElementById("inputThing")
    canvas = document.getElementById("gc");
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx = canvas.getContext("2d");
    //1st txt
    txt = "Welcome to Survive the Jungle! You are a new ranger and you must survive your first day at work by rescuing an animal! Think you got what it takes?"
    i = 0;
    speed = 50;
    txtList = []
    speed2 = 15;
    type()
    window.setInterval(update, 10)
}
function update(){
    // if(nextThing){
    //     nextThingy();
    // }
    jungleSound.addEventListener("ended", function(){
        jungleSound.currentTime = 0;
        audio.play();
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function type(){
    if (i < txt.length) {
        document.getElementById("typed").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
    }
    else{
        i=0;
        setTimeout(function(){
            nextDelete = true;
            deleteTxt()
        }, 3000)
    }
}

function deleteTxt(){
    if(nextDelete == true){
        j=-(txt.length-1);
        if(j <= txtList.length){
            // txtList = txt.split("")
            // txtList.pop()
            // txt = txtList.join("")
            // console.log(txt)
            // txt.toString()
            // document.querySelector("#typed").innerHTML = document.querySelector("#typed").innerHTML.split("").reverse().reverse().pop().join("")
            // var popped = document.querySelector("#typed").innerHTML.split("").pop()
            // document.querySelector("#typed").innerHTML = document.querySelector("#typed").innerHTML.split("") - popped;
            // document.getElementById("typed").innerHTML = document.getElementById("typed").innerHTML -= txt.charAt(j);
            // console.log(txt.slice(0, txt.length - 1))
            document.getElementById("typed").innerHTML = txt.slice(0, txt.length - 1);
            txt = document.getElementById("typed").innerHTML;
            // console.log(document.querySelector("#typed").innerHTML);
            j++;
            setTimeout(deleteTxt, speed2)
        }
        else{
            setTimeout(function(){
                nextDelete = false;
                nextThing = true;
                if(num1OnlyOnce == false){
                    num1 = true;
                    num1OnlyOnce = true;
                    nextThingy()
                }
                if(btnShow == false){
                    btnShow = true;
                    if(nextThing == true){
                        nextThingy()
                    }
                    if(aloneTrue == true){
                        if(num5OnlyOnce == false){
                            num5OnlyOnce = true;
                            num5 = true;
                        }
                        Alone()
                    }
                    if(helpTrue == true){
                        if(num10OnlyOnce == false){
                            num10OnlyOnce = true;
                            num10 = true;
                        }
                        Help()
                    }
                    if(lose == true){
                        Lose()
                    }
                    if(win == true){
                        Win()
                    }
                }
            }, 1000)   
        }
    }
}

function nextThingy(){
    if(nextThing == true){
        jungleSound.play()
        if(num1 == true){
            btn.style.display = "inline-block"; 
            btn.innerHTML = "Start the adventure!";
            btn.onclick = function(){
                num2 = true;
                num1 = false;
                btn.style.display = "none"; 
                btnShow = false;
                nextThingy()
            };
        }
        if(num2 == true){
            if(btnShow == false){
                txt = "First choose which jungle widlife reserve you want to work in. Do you want to work in Yasuni National Park, Ecuador; Tumucumaque National Park, Brazil; Jau National Park, Brazil; or Madidi National Park, Bolivia?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Yasuni National Park, Ecuador"
                btn3.style.display = "inline-block"
                btn4.innerHTML = "Tumucumaque National Park, Brazil"
                btn4.style.display = "inline-block"
                btn5.innerHTML = "Jau National Park, Brazil"
                btn5.style.display = "inline-block"
                btn6.innerHTML = "Madidi National Park, Bolivia"
                btn6.style.display = "inline-block"
                btn3.onclick = function(){
                    answer = "Yasuni National Park, Ecuador"
                    btnShow = false;
                    btn3.style.display = "none"
                    btn4.style.display = "none"
                    btn5.style.display = "none"
                    btn6.style.display = "none"
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "Tumucumaque National Park, Brazil"
                    btnShow = false;
                    btn3.style.display = "none"
                    btn4.style.display = "none"
                    btn5.style.display = "none"
                    btn6.style.display = "none"
                    Analyzer()
                }
                btn5.onclick = function(){
                    answer = "Jau National Park, Brazil"
                    btnShow = false;
                    btn3.style.display = "none"
                    btn4.style.display = "none"
                    btn5.style.display = "none"
                    btn6.style.display = "none"
                    Analyzer()
                }
                btn6.onclick = function(){
                    answer = "Madidi National Park, Bolivia"
                    btnShow = false;
                    btn3.style.display = "none"
                    btn4.style.display = "none"
                    btn5.style.display = "none"
                    btn6.style.display = "none"
                    Analyzer()
                }
            }
        }
        if(num3 == true){
            btn.style.display = "none"
            btn2.style.display = "none"
            btn3.style.display = "none"
            btn4.style.display = "none"
            btn5.style.display = "none"
            input.style.display = "none";
            if(btnShow == false){
                txt = "THE FIRST DAY OF WORK";
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Continue";
                btn3.style.display = "inline-block";
                btn3.onclick = function(){
                    num4 = true;
                    num3 = false;
                    btnShow = false;
                    btn3.style.display = "none"
                    nextThingy()
                }
            }
        }
        if(num4 == true){
            if(btnShow == false){
                txt = "You are walking through the jungle on your first day of work when you hear an animal cry out in pain. Should you get help, or go alone?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Go alone";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Get help";
                btn4.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "go alone"
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btnShow = false;
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "get help"
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btnShow = false;
                    Analyzer()
                }
            }
        }        
    }
}

function Alone(){
    if(aloneTrue){
        if(num5 == true){
            if(btnShow == false){
                //You arrive at the site of the hurt animal. It is an ocelot! There is a huge gash in it\'s side and a thorn in its paw, and the ocelot has a light pulse. It is also unconscious and lays on it\'s side. Do you leave and let it die in peace or try to heal the ocelot?
                speed = 50;
                txt = "You arrive at the site of the hurt animal. It is an ocelot\! There is a huge gash in its side and a thorn in its paw, and the ocelot has a light pulse. It is also unconscious and lays on its side. Do you leave and let it die in peace or try to heal the ocelot\?";
                num5 = false;
                type()
            }
            else if(btnShow == true){
                btn3.innerHTML = "Let the ocelot die in peace";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Attempt to heal the ocelot";
                btn4.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "leave die"
                    btnShow = false;
                    lose = true;
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "stay heal"
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btnShow = false;
                    Analyzer()
                }
            }
        }
        if(num5A == true){
            if(btnShow == false){
                txt = "You quickly assess the damage and pull out your medical kit. First you focus on the thorn, should you pull it out fast, pull out the thorn slowly, or leave it to come out on its own?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Pull the thorn out quickly";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Pull the thorn out slowly";
                btn4.style.display = "inline-block";
                btn5.innerHTML = "Leave the thorn alone";
                btn5.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "pull fast"
                    btnShow = false;
                    lose = true;
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "pull slow"
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    btnShow = false;
                    Analyzer()
                }
                btn5.onclick = function(){
                    answer = "leave thorn"
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    btnShow = false;
                    Analyzer()
                }
            }
        }
        if(num6 == true){
            if(btnShow == false){
                txt = "You slowly and gently pull the thorn out, then wonder how to continue. Should you clean the wound with water, wrap a gauze around the wound, or clean the wound with alchohol?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Clean the wound with water";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Wrap a guaze around the wound";
                btn4.style.display = "inline-block";
                btn5.innerHTML = "Clean the wound with alcohol";
                btn5.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "clean water"
                    btnShow = false;
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "wrap guaze"
                    btnShow = false;
                    lose = true;
                    Analyzer()
                }
                btn5.onclick = function(){
                    answer = "clean alcohol"
                    btnShow = false;
                    lose = true;
                    Analyzer()
                }
            }
        }
        if(num7 == true){
            if(btnShow == false){
                txt = "You clean the wound with water, then think about what you should do next. Should you tap the wound with a guaze to stop the bleeding, try to move the animal, or stitch up the wound?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Tap the wound with a guaze to stop bleeding";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Attempt to move the animal";
                btn4.style.display = "inline-block";
                btn5.innerHTML = "Stitch up the wound";
                btn5.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "tap guaze"
                    btnShow = false;
                    lose = true;
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "try move"
                    btnShow = false;
                    lose = true;
                    Analyzer()
                }
                btn5.onclick = function(){
                    answer = "stitch wound"
                    btnShow = false;
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    Analyzer()
                }
            }
        }
        if(num8 == true){
            if(btnShow == false){
                txt = "Night falls just as you finish stitching up the wound. The ocelot breathes more peacefully, but you know that stitching up the wound is only a temporary fix. You decide to go get other people to move the ocelot now that you know it is stabilized."
                // gc.style.filter = "brightness(30%)"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Continue"
                btn3.style.display = "inline-block"
                btn3.onclick = function(){
                    num8 = false;
                    num9 = true;
                    btn3.style.display = "none"
                    Alone()
                }
            }
        }
        if(num9 == true){
            if(btnShow == false){
                txt = "Once you get more people, you lead them to the site of the ocelot. They carefully move it onto a stretcher and you help them take the ocelot to the medical center"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Continue"
                btn3.style.display = "inline-block"
                btn3.onclick = function(){
                    nextThing = false;
                    aloneTrue = false;
                    btnShow = false;
                    btn3.style.display = "none"
                    win= true;
                    Win()
                }
            }
        }
    }
}

function Help(){
    if(helpTrue){
        if(num10 == true){
            if(btnShow == false){
                txt = "You take off at a run, only stopping once you reach the medical center. 'Help!' you gasp out, 'There is an injured animal in the jungle!' A team of 3 professionals step up. 'Show us,' the leader commands."
                num10 = false;
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Continue";
                btn3.style.display = "inline-block";
                btn3.onclick = function(){
                    num10 = false;
                    btnShow = false;
                    num11 = true;
                    btn3.style.display = "none"
                    Help()
                }
            }
        }
        if(num11 == true){
            if(btnShow == false){
                // gc.style.backgroundImage = "url('HarpyEagle.jpg')";
                // gc.style.backgroundPosition = "top center"
                txt = "You all run through the jungle, then stop as you reach the site of the animal. It is a Harpy Eagle! Its wing hangs at an awkward angle and the Harpy Eagle is covered in scratches. It is unconscious, but alive. Everyone immediately pulls out their medical kits and starts working. Should you help them or let the professionals heal the Harpy Eagle?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Help the professionals out";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Let the professionals take care of it";
                btn4.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "help professionals"
                    btnShow = false;
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "professionals alone"
                    lose = true;
                    btnShow = false;
                    Analyzer()
                }
            }
        }
        if(num12 == true){
            if(btnShow == false){
                txt = "You bend down and rapidly ask what you can do to help. The team, working hard, pays you no attention. You can tell they are worried that the Harpy Eagle won\'t survive with its many scratches. You study the animal. It begins to stir! Should you tell the team of professionals and step back, bind its beak and talons, or try to soothe it by tending to its scratches?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Tell the team";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Bind beak and talons";
                btn4.style.display = "inline-block";
                btn5.innerHTML = "Tend to scratches";
                btn5.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "tell team"
                    btnShow = false;
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    lose = true;
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "bind eagle";
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    btnShow = false;
                    Analyzer()
                }
                btn5.onclick = function(){
                    answer = "tend scratch"
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    lose = true;
                    btnShow = false;
                    Analyzer()
                }
            }
        }
        if(num13 == true){
            if(btnShow == false){
                txt = "You waste no time and expertly bind the Harpy Eagle\'s talons and beak so it can\'t attack anyone. The Harpy Eagle\'s eyes fly open and it tries to attack you but your binds hold tight. One of the team gives the eagle anesthesia, then nods approvingly at you."
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Continue";
                btn3.style.display = "inline-block";
                btn3.onclick = function(){
                    num13 = false;
                    num14 = true;
                    btnShow = false;
                    btn3.style.display = "none"
                    Help()
                }
            }
        }
        if(num14 == true){
            if(btnShow == false){
                txt = "Now that the Harpy Eagle is soothed, you wonder what to do next. You see the one person working on the broken wing and the others are creating a stretcher to carry the animal. Should you tend to the scratches on the Harpy Eagle\'s back, help make the stretcher, or help heal the wing?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Tend to the scratches";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Help make a stretcher";
                btn4.style.display = "inline-block";
                btn5.innerHTML = "Help heal the wing";
                btn5.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "tend scratch1"
                    btnShow = false;
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "make stretcher";
                    lose = true;
                    btnShow = false;
                    Analyzer()
                }
                btn5.onclick = function(){
                    answer = "splint wing"
                    lose = true;
                    btnShow = false;
                    Analyzer()
                }
            }
        }
        if(num15 == true){
            if(btnShow == false){
                txt = "You make a salve and put it on the scratches. Then you wander over to help with the broken wing. Should you use a log to make a splint, pour water to clean the wing, or leave the wing as it is?"
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Use a log to make a splint";
                btn3.style.display = "inline-block";
                btn4.innerHTML = "Pour water to clean wing";
                btn4.style.display = "inline-block";
                btn5.innerHTML = "Leave it be";
                btn5.style.display = "inline-block";
                btn3.onclick = function(){
                    answer = "log splint"
                    btnShow = false;
                    btn3.style.display = "none";
                    btn4.style.display = "none";
                    btn5.style.display = "none";
                    Analyzer()
                }
                btn4.onclick = function(){
                    answer = "clean wing";
                    lose = true;
                    btnShow = false;
                    Analyzer()
                }
                btn5.onclick = function(){
                    answer = "leave wing"
                    lose = true;
                    btnShow = false;
                    Analyzer()
                }
            }
        }
        if(num16 == true){
            if(btnShow == false){
                txt = "You help the team of people lift the Harpy Eagle into the completed stretcher and take it back to the medical center."
                type()
            }
            if(btnShow == true){
                btn3.innerHTML = "Continue"
                btn3.style.display = "inline-block"
                btn3.onclick = function(){
                    nextThing = false;
                    aloneTrue = false;
                    btnShow = false;
                    btn3.style.display = "none"
                    win = true;
                    Win()
                }
            }
        }
    }
}

function Analyzer(){
    //Q1 - place work
    if(num2 == true){
        if(answer == "Yasuni National Park, Ecuador"){
            gc.style.backgroundImage = "url('YasuniNationalPark2.jpg')";
            num2 = false;
            num3 = true;
        }
        if(answer == "Tumucumaque National Park, Brazil"){
            gc.style.backgroundImage = "url('TumucumaqueNationalPark3.jpg')";
            gc.style.backgroundSize = "cover";
            gc.style.backgroundPosition = "top center ";
            num2 = false;
            num3 = true;
        }
        if(answer == "Jau National Park, Brazil"){
            gc.style.backgroundImage = "url('JauNationalPark.jpg')";
            num2 = false;
            num3 = true;
        }
        if(answer == "Madidi National Park, Bolivia"){
            gc.style.backgroundImage = "url('MadidiNationalPark.jpg')";
            num2 = false;
            num3 = true;
        }
        nextThingy()
    }
    //Q2 - alone or get help
    if(num4 == true){
        if(answer == "get help"){
            num4 = false;
            num10 = true;
            nextThing = false;
            helpTrue = true;
            Help()
        }
        if(answer == "go alone"){
            num4 = false;
            num5 = true;
            nextThing = false;
            aloneTrue = true;
            Alone()
        }
    }
    //ALONE
    //Q3 - heal or leave
    if(aloneTrue == true){
        if(num5 == true){
            if(answer == "leave die"){
                num5 = false;
                lose = true;
                aloneTrue = false;
            }
            if(answer == "stay heal"){
                num5 = false;
                num5A = true;
            }
        }
        //Q3A extra addition - heal thorn
        if(num5A == true){
            if(answer == "pull fast"){
                num5A = false;
                lose = true;
                aloneTrue = false;
            }
            if(answer == "pull slow"){
                num5A = false;
                num6 = true;
            }
            if(answer == "leave thorn"){
                num5A = false;
                lose = true;
                aloneTrue = false;
            }
        }
        //Q4 - healing #1 (clean water)
        if(num6 == true){
            if(answer == "clean water"){
                num6 = false;
                num7 = true;
            }
            if(answer == "wrap gauze"){
                num6 = false;
                lose = true;
                aloneTrue = false;
            }
            if(answer == "clean alcohol"){
                num6 = false;
                lose = true;
                aloneTrue = false;
            }
        }
        //Q5 - healing #2 (stitch wound)
        if(num7 == true){
            if(answer == "tap guaze"){
                num7 = false;
                lose = true;
                aloneTrue = false;
            }
            if(answer == "try move"){
                num7 = false;
                lose = true;
                aloneTrue = false;
            }
            if(answer == "stitch wound"){
                num7 = false;
                num8 = true;
            }
        }
        Alone()
    }
    //HELP
    //Q6 - help professionals or let them heal animal
    if(helpTrue == true){
        if(num11 == true){
            if(answer == "help professionals"){
                num11 = false;
                num12 = true;
            }
            if(answer == "professionals alone"){
                num11 = false;
                lose = true;
                aloneTrue = false;
            }
        }
        //Q7 - heal scratches, bind eagle, tell team (bind eagle)
        if(num12 == true){
            if(answer == "tend scratch"){
                num12 = false;
                lose = true;
                aloneTrue = false;
            }
            if(answer == "bind eagle"){
                num12 = false;
                num13 = true;
            }
            if(answer == "tell team"){
                num12 = false;
                lose = true;
                aloneTrue = false;
            }
        }
        //Q8 - tend to scratches, make a stretcher, splint wing (tend scratches)
        if(num14 == true){
            if(answer == "tend scratch1"){
                num14 = false;
                num15 = true;
            }
            if(answer == "make stretcher"){
                num14 = false;
                lose = true;
                aloneTrue = false;
            }
            if(answer == "splint wing"){
                num14 = false;
                lose = true;
                aloneTrue = false;
            }
        }
        //Q9
        if(num15 == true){
            if(answer == "log splint"){
                num15 = false;
                num16 = true;
            }
            if(answer == "clean wing"){
                num15 = false;
                lose = true;
                aloneTrue = false;
            }
            if(answer == "leave wing"){
                num15 = false;
                lose = true;
                aloneTrue = false;
            }
        }
        Help()
    }
    //lose
    if(lose == true){
        btn.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"
        btn4.style.display = "none"
        btn5.style.display = "none"
        btnShow = false;
        Lose()
    }
}

function Lose(){
    if(btnShow == false){
        if(answer == "leave die"){
            txt = "You left the ocelot to die. Later, when you reported to your boss, he was furious because you didn\'t try to heal the ocelot. He screamed, 'YOU ARE FIRED!!!' Good luck getting another job!"
            type()
        }
        //ALONE
        else if(answer == "pull fast"){
            txt = "Closing your eyes, you yank out the thorn. Uh oh! The ocelot wakes up with a roar and attacks you! Suddenly, everything goes black . . ."
            type()
        }
        else if(answer == "leave thorn"){
            txt = "You decide to leave the thorn where it is, but later you realize that it is infected! You try to help, but it is too late. The ocelot dies and your boss fires you. Good luck getting another job!"
            type()
        }
        else if(answer == "wrap guaze"){
            txt = "You wrap a guaze around the wound, but blood keeps seeping out! The ocelot dies from loss of blood. Your boss id furious and fires you, sending you back to animal care class to learn how to care for animals."
            type()
        }
        else if(answer == "clean alchohol"){
            txt = "You carefully pour alchohol on the wound. The ocelot wakes up with a snarl! It leaps at you, and everything goes black . . ."
            type()
        }
        else if(answer == "tap guaze"){
            txt = "You desperately tap the wound with a guaze but the ocelot keeps bleeding. Your boss is furious you couldn\'t save the ocelot, and fires you. "
            type()
        }
        else if(answer == "try move"){
            txt = "You attempt to move the animal, but the wound opens more! THe ocelot\'s eyes fly open and land on you. It opens its mouth wide . . ."
            type()
        }
        //HELP
        else if(answer == "professionals alone"){
            txt = "You leave the team to work and leave the site, confident they will save the animal. Later, you meet your boss and he looks infuriated. 'WHY DID YOU LEAVE THE TEAM!' he booms, 'THEY COULDN\'T SAVE THE ANIMAL WITH JUST THREE PEOPLE!' Your boss is so furious that he fires you."
            type()
        }
        else if(answer == "tend scratch"){
            txt = "You try to put salve on the scratches, but it doesn\'t help. The Harpy Eagle wakes up! Its eyes flash and lock onto you. It opens its beak wide and extends its talons at you . . ."
            type()
        }
        else if(answer == "tell team"){
            txt = "Just as you open your mouth to tell the team what is happening, the Harpy Eagle wakes up! The team runs away, leaving you behind. The Harpy Eagle extends its talons and flies at you . . ."
            type()
        }
        else if(answer == "make stretcher"){
            txt = "You help make a stretcher, but the Harpy Eagle\'s many scratches were too much for it. The Harpy Eagle bled to death. Your boss fired you and sent you back to animal care class."
            type()
        }
        else if(answer == "splint wing"){
            txt = "You help splint the wing but the unattended scratches get infected and the Harpy Eagle dies. Your boss fires you in a fit of fury. Good luck getting another job!"
            type()
        }
        else if(answer == "clean wing"){
            txt = "You clean the wing but it doesn\'t help. The Harpy Eagle wakes up because of the pain and attacks you. You remember nothing else . . ."
            type()
        }
        else if(answer == "leave wing"){
            txt = "You leave the wing as it is but later, as you are moving the Harpy Eagle onto the stretcher, its wing hits the side and it wakes up from the pain. The Harpy Eagle attacks you, its beak open wide . . ."
            type()
        }
    }
    if(btnShow == true){
        btn4.innerHTML = "Try again?"
        btn4.style.display = "inline-block"
        btn4.onclick = function(){
            btn4.style.display = "none"
            window.location.href = "index.html"
        }
    }
}

function Win(){
    if(btnShow == false){
        btn.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"
        btn4.style.display = "none"
        btn5.style.display = "none"
        helpTrue = false;
        aloneTrue = false;
        txt = "Congratulations! You succesfully rescued the animal! When your boss heard about your heroic deed, he promoted you and gave you a raise. If you want to help a different animal, or want to try different answers, press play again."
        type()
    }
    if(btnShow == true){
        btn3.innerHTML = "Play again?"
        btn3.style.display = "inline-block"
        btn3.onclick = function(){
            btn3.style.display = "none"
            window.location.href = "index.html"
        }
    }
}