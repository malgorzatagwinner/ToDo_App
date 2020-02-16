var express = require("express")
var bodyParser = require("body-parser");


class zadanie{
	//tablica zadań do zrobienia
	constructor(){
		this.task = [];
	//tablica zadań zrobionych
		this.complete = [];
	}
	//dodaj zadanie do listy zadań do zrobienia
	dodaj(newtask){
		this.task.push(newtask);
	}
	
	//usuń zadanie z listy zadań do zrobienia i dodaj do listy zadań zrobionych
	usun(newtask){
		if (typeof newtask === "string"){
			this.complete.push(newtask)
			this.task.splice(this.task.indexOf(newtask), 1);
		} else if (typeof newtask === "object"){
			for (var i = 0; i < newtask.length; i++) {
            			this.complete.push(newtask[i]);
            			this.task.splice(this.task.indexOf(newtask[i]), 1);
        		}

		}
	}
	
	//przywróć zadanie z listy zadań zrobionych do listy zadań do zrobienia
	przywroc(newtask){
		this.task.push(newtask);
		this.complete.splice(this.complete.indexOf(newtask), 1);
	}

	//czysci listę zadań zrobionych
	wyczysc(){
		this.complete.length = 0;
	}
}

module.exports = zadanie;
