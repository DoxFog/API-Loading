let Champ;
let nam;

let IT;
let itemid;

let ions;
let est;

let build = [];
let start1;
let start2;
let shoe;
let trin;

let early1;
let early2;
let late = [];
let foot;
let kets;


let lolfont;
//champion
let icon;
//early game
let icon2;
let icon3;
//boots
let icon4;
//final build;
let icon51;
let icon52;
let icon53;
let icon54;
let icon55;
// trinket
let icon6;


let logo;
let bg; 
let bgbot;
let bocs;
let border;
let bord;
let topbord;


let screenx = 50;
let screeny = 26;

let reroll;
let indicator;

function preload()
{
    Champ = loadJSON("../Characters.json");
    nam = loadJSON("../Names.json");
    IT = loadJSON("../Items.json");
    itemid = loadJSON("../ItNam.json");
    lolfont = loadFont("../Friz Quadrata Std Medium.otf");
    logo = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/LoL_New_Logo.png/799px-LoL_New_Logo.png");
    bg = loadImage("../bg-default.jpg");
    bgbot = loadImage("https://lolstatic-a.akamaihd.net/lolkit/1.1.6/resources/images/header-bg-noplay.png");
    bocs = loadImage("../frame-textures-sprite.jpg");
    border = loadImage("../frame-sprite-bot.png");
    bord = loadImage("../frame-sprite-cut.png");
    indicator = loadImage("https://vignette.wikia.nocookie.net/leagueoflegends/images/0/02/Howling_Abyss_icon.png/revision/latest?cb=20171101151627")
    //topbord = loadImage("../frame-sprite-top.png");
    
}

function setup()
{ 
    createCanvas(windowWidth-screenx, windowHeight-screeny);
    console.log(Champ);
    console.log(nam);
    console.log(IT);
    console.log(itemid);
   
    ion = random(nam.names);// champion
    est = Champ.data[ion].title;
    
    start1 = random(itemid.ItemID.basic); //early game build
    early1 = IT.data[start1].name;
    start2 = random(itemid.ItemID.basic); //early game build
    early2 = IT.data[start2].name;
    
    for (let i= 0; i<=4; i++)
        {
            build[i] = random(itemid.ItemID.items)
        }
    
    for (let i = 0, x=0; i<=4; i++, x++)
        {
            late[x]= IT.data[build[i]].name;
        }
    
    shoe = random(itemid.ItemID.boots);
    foot = IT.data[shoe].name;
    
    trin = random(itemid.ItemID.trinkets);
    kets = IT.data[trin].name;
    
//    build = random(itemid.ItemID.items);//end game build
//    late = IT.data[build].name;
    
    icon = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/"+ ion+".png") 
    icon2 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ start1 +".png")
    icon3 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ start2 +".png")
    icon4 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ shoe +".png")
    icon51 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[0] +".png")
    icon52 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[1] +".png")
    icon53 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[2] +".png")
    icon54 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[3] +".png")
    icon55 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[4] +".png")
    icon6 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ trin +".png");
    reroll = createButton('Reroll current Champion and build!');
    
    reroll.mousePressed(Reroll);

    
}



function draw() 
{
    
    background(0)
    fill(255);
    imageMode(CENTER);
    image(bg, (1/2*(windowWidth)), 0, 1920, 1080);
    image(bgbot, (1/2*(windowWidth)), 1000);
    //ICON FOR CHAMPION HAS BEEN MOVED HERE
    image(icon, (1/2*(windowWidth)), 1/2*windowHeight-230, 160, 160 /*480, 283.26*/);
    //image(topbord, (1/2*(windowWidth)), (1/2*(windowHeight))-325, 500, 300);
    reroll.position((1/2*(windowWidth-225)),(1/2*windowHeight)+300);
    image(indicator,(1/2*(windowWidth)),(1/2*windowHeight)+300, 150, 150)
    image(border, (1/2*(windowWidth)),  1/2*windowHeight+140, 1200, 148);
    image(bord, (1/2*(windowWidth)),  1/2*windowHeight-10, 1200, 176);
    
    
    textFont(lolfont);
    textAlign(CENTER);
    textSize(70);
    textStyle(BOLD);
    fill('gold');
    text(Champ.data[ion].name + " " + est ,(1/2*(windowWidth)), (1/2*windowHeight)+150);
    textAlign(CORNER);
    textSize(30);
    fill(0);
    text("Early game: ", (1/2*(windowWidth))-430, (1/2*(windowHeight))-40);
    text("Boots: ", (1/2*(windowWidth))-210, (1/2*(windowHeight))-40);
    text("Items: ", (1/2*(windowWidth))-50, (1/2*(windowHeight))-40);
    text("Trinket: ", (1/2*(windowWidth))+400, (1/2*(windowHeight))-40);
    
    imageMode(CENTER);
    
    
    image(logo, (1/2*(windowWidth)), 80, 500, 198);
    image(icon2, (1/2*(windowWidth))-480, (1/2*(windowHeight)+10));
    image(icon3, (1/2*(windowWidth))-400, (1/2*(windowHeight)+10));
    image(icon4, (1/2*(windowWidth))-220, (1/2*(windowHeight)+10));
    image(icon51, (1/2*(windowWidth))-60, (1/2*(windowHeight)+10));
    image(icon52, (1/2*(windowWidth))+10, (1/2*(windowHeight)+10));
    image(icon53, (1/2*(windowWidth))+80, (1/2*(windowHeight)+10));
    image(icon54, (1/2*(windowWidth))+150, (1/2*(windowHeight)+10));
    image(icon55, (1/2*(windowWidth))+220, (1/2*(windowHeight)+10));
    image(icon6, (1/2*(windowWidth))+380, (1/2*(windowHeight))+10);
    
    
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight)
}

function Reroll()
{
    ion = random(nam.names);// champion
    est = Champ.data[ion].title;
    
    start1 = random(itemid.ItemID.basic); //early game build
    early1 = IT.data[start1].name;
    start2 = random(itemid.ItemID.basic); //early game build
    early2 = IT.data[start2].name;
    
    console.log (Champ.data[ion]);
    
    for (let i= 0; i<=4; i++)
        {
            build[i] = random(itemid.ItemID.items)
        }
    
    for (let i = 0, x=0; i<=4; i++, x++)
        {
            late[x]= IT.data[build[i]].name;
        }
    
    shoe = random(itemid.ItemID.boots);
    foot = IT.data[shoe].name;
    
    trin = random(itemid.ItemID.trinkets);
    kets = IT.data[trin].name;
    
    icon = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/"+ ion+".png") 
    icon2 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ start1 +".png")
    icon3 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ start2 +".png")
    icon4 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ shoe +".png")
    icon51 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[0] +".png")
    icon52 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[1] +".png")
    icon53 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[2] +".png")
    icon54 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[3] +".png")
    icon55 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ build[4] +".png")
    icon6 = loadImage("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/"+ trin +".png");

}
