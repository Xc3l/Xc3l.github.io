window.onload = function(){
	var can = document.getElementById("canvas")
	var ctx = can.getContext("2d");
	var clavier = new Clavier();
	var menu = new Image();
	var menu_k = new Image();
	var controls = new Image();
	var hand = new Image();
	var fond = new Image();
	var fond1 = new Image();
	var fond3 = new Image();
	var base = new Image();
	var room1 = new Image();
	var room2 = new Image();
	var fin = new Image();
	var perso = new Image();
	var bandana = new Image();
	var cakos = new Image();
	var cakosf = new Image();
	var bearos = new Image();
	var keyos = new Image();
	var keyosf = new Image();
	var swordos = new Image();
	var dscreen = new Image();
	var sleep = new Image();
	var reveil = new Image();
	var dodo = new Image();
	var the = new Image();

	hand.src = "images/hand.png";
	menu.src = "images/menu.png";
	menu_k.src = "images/menu_selec.png";
	controls.src = "images/controls.png";
	fond.src = "images/fond3.png";
	fond1.src = "images/fond1.png";
	fond3.src = "images/fond2.png"
	base.src = "images/base.png";
	room1.src = "images/room1.png"
	room2.src = "images/room2.png";
	fin.src = "images/fin.png"
	perso.src = "images/walk1.png";
	bandana.src = "images/bandana.png";
	cakos.src = "images/cake.png";
	cakosf.src = "images/cakef.png"
	bearos.src = "images/bear.png";
	keyos.src = "images/key.png";
	keyosf.src = "images/keyf.png";
	swordos.src = "images/sword.png";
	dscreen.src = "images/gameover.png";
	sleep.src = "images/sleep.png";
	reveil.src = "images/reveil.png";
	dodo.src = "images/neutre.png";
	the.src = "images/9.png";

	var theme = new Audio("audios/theme.mp3");
	theme.volume = 0.1;
	var adventure = new Audio("audios/adventure.mp3");
	adventure.volume = 0.1;
	var audio_gameo = new Audio("audios/game_o.mp3")
	audio_gameo.volume = 0.5;
	var choose = new Audio("audios/select.wav");
	choose.volume = 0.2;
	var pick = new Audio("audios/pick.wav")
	pick.volume = 0.2;
	var end = new Audio("audios/end.mp3");
	end.volume = 0.3;

	

	var o1 = new Obstacle(0,490,900,110) ;
	var oleft = new Obstacle(0,0,15,600);
	var oright = new Obstacle(880,0,90,700);
	var oban1 = new Obstacle(220,370,106,80);
	var oban2 = new Obstacle(1490,370,80,106)
	var oporte = new Obstacle(773,402,73,80);
	var oporte1 = new Obstacle(350,420,66,78);

	var sol1 = new Obstacle(0,560,480,110);
	var sol2 = new Obstacle(0,520,250,110);
	var plafond = new Obstacle(0,0,500,200);
	var mur1 = new Obstacle(0,0,17,600);
	var mur2 = new Obstacle(420,0,30,600)
	var murmil = new Obstacle(-2,0,50,100)
	var mur3 = new Obstacle(385,0,90,600);
	var mur4 = new Obstacle(-2,0,50,600);
	var eche1 = new Obstacle(10,310,30,150)
	var eche2 = new Obstacle(318,76,30,200);
	var echemil = new Obstacle(136,0,30,100);
	var eche3 = new Obstacle(136,-560,30,100);
	var eche4 = new Obstacle(260,-210,30,100);
	var eche5 = new Obstacle(136,-295,30,100);
	var pla1 = new Obstacle(120,340,300,20);
	var pla2 = new Obstacle(0,105,300,40);
	var plamil = new Obstacle(181,-10,300,30)
	var pla3 = new Obstacle(190,575,300,50);
	var pla4 = new Obstacle(0,430,250,50);
	var pla5 = new Obstacle(180,315,250,20);
	var ocake = new Obstacle(338,-350,50,50);
	var okey = new Obstacle(178,255,50,50);

	var obear = new Obstacle(180,330,100,87)
	var osword = new Obstacle(50,265,100,145)

	var pic = new Obstacle(380,425,180,200)
	var sol3 = new Obstacle(0,420,900,110)

	var obs; // Tableau obstacles
	var obj;

	var c = document.getElementById("canvas_holder");
	can.width = 900;
	can.height = 600;
	c.style.width = can.width + "px";
	c.style.height = can.height + "px";
	var width = can.width;
	var height = can.height;

	var coll = false; //si true, collision, on ne bouge pas

	var dspritex = 70
	var dspritey = 63
	var x;
	var y;
	var hitbx;
	var hithx;
	var hitgx;
	var hitdx;
	var hitby;
	var hithy;
	var hitgy;
	var hitdy;
	var menu_selec = 1;
	var death_selec = 1;
	var timer_d = 20;
	var ctrl = false;
	var game_continue = false;
	var game_end = false;

	var taille;
	var pas;
	var pas_e;
	var pas_d;
	var pas_s;
	var pas_r;
	var mont;
	var timer_pas;
	var droite;
	var alive = true;
	var timer;
	var gravite;
	var jump;
	var ysaut;
    var jumpagain;
    var saut;
	var compteur;
	var defil;
	var compt_defil;
	var teleport = -1;
	var garde1;
	var garde2;
	var key;
	var cake;
	var bear;
	var sword;
	var draw;

	fond.onload = function(){
		var interval = setInterval(boucle,30);
		//utilise la fonction boucle toutes les 20 milisecondes
	}
	function retry(){
		menu_selec = 1;
		death_selec = 1;
		timer_d = 20;
		ctrl = false;
		game_continue = false;
		game_end = false;

		taille = 70;
		pas_e = 0;
		pas_d = 0;
		pas_s = 0;
		pas_r = 0;
		mont = false;
		timer_pas = 50;
		x = 30;
		y = 495-dspritex;
		pas = 0;
		droite = true;
		alive = true;
		timer = 20;
		gravite = true;
		jump = false;
		ysaut = 0;
	    jumpagain = false;
	    saut = true;
		compteur = 0;
		defil = 0;
		compt_defil=0;
		teleport = 0;
		garde1 = true;
		garde2 = true;
		key = false;
		cake = false;
		bear = false;
		sword = false;
		draw = false;
	}

	function game_over(){
		menu_selec = 1;
		death_selec = 1;
		timer_d = 20;
		ctrl = false;
		game_continue = false;
		game_end = false;

		taille = 70;
		pas_e = 0;
		pas_d = 0;
		pas_s = 0;
		pas_r = 0;
		mont = false;
		timer_pas = 50;
		x = 30;
		y = 495-dspritex;
		pas = 0;
		droite = true;
		alive = true;
		timer = 20;
		gravite = true;
		jump = false;
		ysaut = 0;
	    jumpagain = false;
	    saut = true;
		compteur = 0;
		defil = 0;
		compt_defil=0;
		teleport = -1;
		garde1 = true;
		garde2 = true;
		key = false;
		cake = false;
		bear = false;
		sword = false;
		draw = false;
	}

	function boucle(){
		if (pas_r>=3 && alive == false && timer < 0){
			retry()
		}
		if (pas_s>=5 && alive == false && timer < 0) {
			game_over()
		}
		if (timer<0) {
			if (death_selec == 1) {
				if (clavier.bas) {
					death_selec = 2;
				}
			}
			if (death_selec == 2) {
				if (clavier.haut) {
					death_selec = 1;
				}
			}

			timer_pas--;
			if (timer_pas<0) {
				pas_d++
				timer_pas = 50;
			}	
		}
		if (pas_d >= 2) {
			pas_d = 0
		}
		if (pas_e>=10) {
			pas_e = 0;
		}
		if (game_end) {
			timer_pas--;
			if (timer_pas<0) {
				pas_s++
				timer_pas = 6;
			}
		}
		if (game_continue) {
			timer_pas--;
			if (timer_pas<0) {
				pas_r++
				timer_pas = 7;
			}
		}

		if (teleport == -1) {
			can.width = 900;
			can.height = 600;
			c.style.width = can.width + "px";
			c.style.height = can.height + "px";
			audio_gameo.pause();
			theme.play()
			if (menu_selec == 1) {
				if (clavier.bas) {
					menu_selec = 2;
					choose.play();
				}
				if (clavier.entrer) {
					theme.pause();
					teleport = 0;
					retry();
				}
			}
			if (menu_selec == 2) {
				if (clavier.haut) {
					menu_selec = 1;
					choose.play();
				}
			}
		}
		if (teleport == 0) {
			hitbx = x-defil*(width-dspritex)*(40-compt_defil)/40;
			hithx = x-defil*(width-dspritex)*(40-compt_defil)/40;
			hitgx = x-defil*(width-dspritex)*(40-compt_defil)/40;
			hitdx = x+65-defil*(width-dspritex)*(40-compt_defil)/40;
			hitby = y+70;
			hithy = y;
			hitgy = y;
			hitdy = y;
			can.width = 900;
			can.height = 600;
			c.style.width = can.width + "px";
			c.style.height = can.height + "px";
			dspritex = 70
			dspritey = 63;
			audio_gameo.pause();
			adventure.play();


			if (x>(width-dspritex)*(defil+1)){
				defil++;
				if (defil < 3){
					compt_defil=40;
				}
			}
			else if (x<(width-dspritex)*defil){
				defil--;
				compt_defil=40;
			}
			else if (compt_defil>0){
				compt_defil--;
			}
			else if (compt_defil<0){
				compt_defil++;
			}
			if(defil == 0){
				obs = new Array(o1,oleft);
				obj = new Array(oban1,oporte);
					if (oban1.collision(x,y,dspritex,dspritey)&&clavier.entrer&&!garde1&&!key){
						teleport = 1;
						x = 460;
						y = 320;
						
					}
					if (oban1.collision(x,y,dspritex,dspritey) && key==true && clavier.espace) {
						garde1 = false;
						key = false;
					}

					if (oban1.collision(x,y,dspritex,dspritey)){
						pasb = 25
						bx = 37;
						by = 39;
					}
					else
						pasb = 0;
						bx = 25;
						by = 39;

					if (oporte.collision(x,y,dspritex,dspritey)&&clavier.entrer){
						teleport = 2;
						x = 338;
						y = 486
					}
				}	
			else if (defil == 1 ) {
				obs = new Array(o1,oright);
				obj = new Array(oban2);
					if (oban2.collision(x,y,dspritex,dspritey)&&clavier.entrer&&!garde2){
						teleport = 3;
					}
					if (oban2.collision(x,y,dspritex,dspritey)&&key==true&&clavier.espace) {
						garde2 = false;
						key = false;
					}
					if (oban2.collision(x,y,dspritex,dspritey)){
						pasb = 25
						bx = 37;
						by = 39;
					}
					else
						pasb = 0;
						bx = 25;
						by = 39;
				}
			}		

		if (teleport == 1) {
			hitbx = x;
			hitby = y+50;
        	hithx = x;
        	hithy = y;
			hitgx = x;
			hitgy = y;
			hitdx = x+65;
			hitdy = y;
			can.width = 900;
			can.height = 600;
			c.style.width = can.width + "px";
			c.style.height = can.height + "px";
			obs = new Array(pic)

			if (pic.collision(x,y,dspritex,dspritey)) {
				alive = false;
				timer--;
			}
		}

		if (teleport == 2){
			hitbx = x;
			hitby = (y+80-defil*(675-63)*(40-compt_defil)/40)-9;
        	hithx = x;
        	hithy = y-defil*(675-63)*(40-compt_defil)/40
			hitgx = x-10
			hitgy = y-defil*(675-63)*(40-compt_defil)/40
			hitdx = x+65;
			hitdy = y-defil*(675-63)*(40-compt_defil)/40
			can.width = 450;
			can.height = 600;
			c.style.width = can.width + "px";
			c.style.height = can.height + "px";
			dspritex = 60;
			dspritey = 54;
			taille = 60;
			if (oporte1.collision(x,y,dspritex,dspritey)&&clavier.espace) {
				teleport = 0;
				x = 784;
				y = 405-dspritex;
			}

			if (y>(height-dspritex)*(defil+1)){
				defil++;
				if (defil < 3){
					compt_defil=40;
				}
			}
		    else if (y<(height-dspritex)*defil){
				defil--;
				compt_defil=40;
		    }
			else if (compt_defil>0){
				compt_defil--;
			}
			else if (compt_defil<0){
				compt_defil++;
			}
			if (defil == 0){
				obs = new Array(sol1,sol2,mur1,mur2,murmil,pla1,pla2,plamil)
				obj = new Array(eche1,eche2,echemil)
				if (okey.collision(x,y,dspritex,dspritey)&&clavier.espace&& !key) {
					key = true;
					pick.play();
				}
			}
			else if (defil == -1) {
				obs = new Array(plafond,mur3,mur4,pla3,pla4,pla5)
				obj = new Array(eche3,eche4,eche5)
				if (ocake.collision(x,y,dspritex,dspritey)&&clavier.espace&& !cake) {
					cake = true;
					pick.play();
				}
			}

			for (p in obj){
				q = obj[p];
				if (q.collision(x,y,dspritex,dspritey) && clavier.haut) {
					mont = true;
					jumpagain = false;
					compteur = 1;
					y = y-1;
					pas_e++;
				}
				else if (q.collision(x,y,dspritex,dspritey)){
					mont = false;
				}
			}
		}
		
		if (teleport == 3) {
			hitbx = x-defil*(width-dspritex)*(40-compt_defil)/40;
			hithx = x-defil*(width-dspritex)*(40-compt_defil)/40;
			hitgx = x-defil*(width-dspritex)*(40-compt_defil)/40;
			hitdx = x+65-defil*(width-dspritex)*(40-compt_defil)/40;
			hitby = y+70;
			hithy = y;
			hitgy = y;
			hitdy = y;
			can.width = 900;
			can.height = 600;
			c.style.width = can.width + "px";
			c.style.height = can.height + "px";
			y = 420-dspritex;

			if (x>(width-dspritex)*(defil+1)){
				defil++;
				if (defil < 3){
					compt_defil=40;
				}
			}
			else if (x<(width-dspritex)*defil){
				defil--;
				compt_defil=40;
			}
			else if (compt_defil>0){
				compt_defil--;
			}
			else if (compt_defil<0){
				compt_defil++;
			}

			if (defil == 1 ) {
				obs = new Array(oright,sol3);
				obj = new Array();
			}
			else if(defil == 0){
				obs = new Array(oleft,sol3);
				obj = new Array(obear,osword);
				if (obear.collision(x,y,dspritex,dspritey)&&cake == true) {
					bear = true;
				}
				else if (obear.collision(x,y,dspritex,dspritey)&&!cake){
					alive = false;
					timer--;
				}
			}
			if (osword.collision(x,y,dspritex,dspritey)&&clavier.espace) {
				draw = true;
			}
		}
		

        if(!clavier.droite && !clavier.gauche){
            pas = 0;
        }

		if (clavier.droite) {
			droite = true;
			pas++
			for (p in obs){
				o = obs[p];
				if (o.collision(hitdx,hitdy,5,dspritey)){
					coll = true;
					break;
				}
				else
					coll = false;
			}
			if (!coll){
				x = x + 5;
			}
		}
		else if (clavier.gauche){
			droite = false
			pas++
			for (p in obs){
				o = obs[p];
				if (o.collision(hitgx,hitgy,5,dspritey)){
					coll = true;
					break;
				}
				else
					coll = false;
			}
			if (!coll){
				x = x - 5;
			}

		}

		if (clavier.bas){
			for (p in obs){
				o = obs[p];
				if (o.collision(hitbx,hitby,dspritex,5)){
					coll = true;
					break;
				}
				else
					coll = false;
			}
			if (!coll){
				y = y + 5;
			}
		}

		if (pas>=36){
			pas = 0;
		}

		if (saut) {
			for (p in obs){
				o = obs[p];
				if (o.collision(hitbx,hitby,dspritex,5)){
					gravite = false;
	                jumpagain = true;
					break;
				}
				else{
	                jumpagain = false;
					gravite = true;
	            }
			}
		
			if (gravite == true && compteur == 40){
				y = y + 4;
	        }
			if (clavier.haut && compteur == 40 && jumpagain == true){
	            compteur--;

	        }
	        if (39 >= compteur){
	        	jumpagain = false
	            y = y + ysaut;

	            ysaut = 100 - ((compteur-20) * (compteur-20)/4);
	            y = y - ysaut;
	            compteur--;
	           // collision dans le saut
	            for(p in obs) {
	                o = obs[p];
	                if (o.collision(hithx,hithy,dspritex,5) && compteur > 20) {
	                    compteur = 0;
	                    break;
	                }
	                else if (o.collision(hitbx,hitby,dspritex,5) && compteur < 20){
	                    compteur = 0;

	                }
	            }
	            if (compteur == 0){
	                compteur = 40;
	                ysaut = 0;
	            }
	        }
    	}


		ctx.clearRect(0, 0, width, height);
		ctx.save();
		
		if (teleport == 0) {
			ctx.drawImage(fond,0,0,width,height);
			ctx.translate(-defil*(width-10)*(40-compt_defil)/40,0);
			ctx.drawImage(base,0,height-413,1800,413);
			if (garde1) {
				ctx.drawImage(bandana,pasb,0,bx,by,234,370,80,106);
			}
			else if (!garde1){
				ctx.fillRect(234,370,80,106)
				ctx.drawImage(base,0,height-413,1800,413);
			}
			if (garde2) {
				ctx.drawImage(bandana,pasb,0,bx,by,1490,370,80,106);
			}
			else if (!garde2){
				ctx.fillRect(1478,370,106,80)
				ctx.drawImage(base,0,height-413,1800,413);
			}
			ctx.restore();
		}

		else if (teleport == 1) {
			ctx.drawImage(fond,0,0,width,height);
			ctx.translate(0,0);
			ctx.drawImage(room1,(width-500)/2,height-455,500,455);
			ctx.restore()
		}

		else if (teleport == 2) {
			ctx.drawImage(fond1,0,0,width,height);
			ctx.clearRect(0, 0, width, height);
			ctx.translate(0,-defil*(height-10)*(40-compt_defil)/40);
			ctx.drawImage(room2,-65,height-1200,575,1260);
			if (!key) {
				ctx.drawImage(keyos,178,255,50,50);
			}
			else if(key){
				ctx.clearRect(178,255,50,50)
				ctx.drawImage(room2,-65,height-1200,575,1260);
			}
			if (!cake) {
				ctx.drawImage(cakos,338,-350,50,50);
			}
			else if(cake) {
				ctx.clearRect(338,-350,50,50);
				ctx.drawImage(room2,-65,height-1200,575,1260);
			}

			ctx.restore()
		}

		else if (teleport == 3) {
			ctx.drawImage(fond3,0,0,width,height);
			ctx.translate(-defil*(width-10)*(40-compt_defil)/40,0);
			ctx.drawImage(fin,0,height-444,1800,444);
			if (!bear){
				ctx.drawImage(bearos,0,0,39,36,180,330,100,87)
			}
			else if (bear) {
				ctx.drawImage(bearos,39,0,39,36,180,330,100,87)
			}
			if (!sword) {
				ctx.drawImage(swordos,50,265,100,145)
			}
			ctx.restore()
		}

		ctx.save();
		ctx.translate(hithx,hithy);	
		if (!droite){
		        ctx.save()
				ctx.translate(taille,0)
				ctx.scale(-1,1)
			}
		if (alive){
			if (mont == true) {
				ctx.drawImage(perso,pas_e*21,58,21,24,0,0,dspritex,dspritey)
			}
			else if (gravite == true){
				ctx.drawImage(perso,0,19,21,19,0,0,dspritex,dspritey);
	        }
	        else
				ctx.drawImage(perso,pas*21,0,20,18,0,0,dspritex,dspritey);
		}
		else if(!alive){
			ctx.drawImage(perso,0,38,21,19,0,0,dspritex,dspritey);
			adventure.pause();
			audio_gameo.play();
		}


		ctx.restore();
		ctx.restore();

		if (!key) {
			ctx.drawImage(keyosf,10,10,50,50);
		}
		else if(key){
			ctx.drawImage(keyos,10,10,50,50);
		}
		if (!cake) {
			ctx.drawImage(cakosf,70,10,50,50);
		}
		else if(cake) {
			ctx.drawImage(cakos,70,10,50,50);
		}

		if (teleport == -1) {
			ctx.drawImage(menu,0,0,width,height);
			if (menu_selec == 1) {
				ctx.drawImage(menu_k,64,0,64,64,282,412,45,45)
			}
			if (menu_selec == 2) {
				ctx.drawImage(menu_k,0,0,64,64,282,503,45,45)
				if (clavier.entrer) {
					ctrl = true;
				}
			}
		}

		if (ctrl) {
			ctx.drawImage(controls,0,0,width,height);
			if (clavier.espace) {
				teleport = -1;
				ctrl = false;
			}
		}

		if (timer < 0) {
			ctx.clearRect(0,0,900,600)
			ctx.drawImage(dscreen,0,0,width,height)
			if (death_selec == 1) {
				ctx.drawImage(hand,318,392,30,30)
			}
			else if (death_selec == 2) {
				ctx.drawImage(hand,318,439,30,30)
			}
			if (!game_continue && !game_end) {
				ctx.drawImage(dodo,pas_d*33,0,33,27,415,127,66,54)
			}
			if (death_selec == 1 && clavier.entrer) {
				game_continue = true;
			}
			if (game_continue && !game_end) {
				ctx.drawImage(reveil,pas_r*69,0,69,36,343,109,138,72)
			}
			if (death_selec == 2 && clavier.entrer) {
				game_end = true;
			}
			if (game_end && !game_continue) {
				ctx.drawImage(sleep,pas_s*59,0,59,70,362,67,118,140)		
			}
		}

		if (draw) {
			can.width =	623;
			can.height = 700;
			c.style.width = can.width + "px";
			c.style.height = can.height + "px";
			ctx.drawImage(the,0,0,623,700);
			adventure.pause();
			if (clavier.espace){
				end.play();
			}
		}



		/*ctx.fillStyle = 'Black'

		ctx.fillRect(hitbx,hitby,dspritex,5) // hitbox bas
        ctx.fillRect(hithx,hithy,dspritex,5) // hitbox haut
        ctx.fillRect(hitgx,hitgy,5,dspritey) // hitbox gauche
        ctx.fillRect(hitdx,hitdy,5,dspritey) // hitbox droite

		ctx.fillStyle= 'red'
        //dessin des collisions
        //ctx.fillRect(0,490,900,110)
        //ctx.fillRect(234,370,80,106)
        //ctx.fillRect(773,402,80,73)
        //ctx.fillRect(1208,370,80,106)
        //ctx.fillRect(x,y,dspritex,dspritey)


		console.log("x :" + x);
		console.log("y :" + y);*/
	}
}