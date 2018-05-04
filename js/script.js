function load() {
    var video = document.getElementById("video-fr");
    var heading = document.getElementById("video-title");
    var name = window.localStorage.getItem("name");
    //alert(window.localStorage.getItem("name"));
    for (var j = 0; j < data.length; j++) {
        if (name == data[j].name) {
            window.localStorage.setItem("index", j);
        }
    }
    var index = window.localStorage.getItem("index");
    console.log(data[index].items[0].name);
    document.getElementById("previous").style.visibility = "hidden";
    var lesson_name = document.getElementById("title");
    lesson_name.innerText = data[index].name;
    document.title = data[index].items[0].name;
    var items = document.getElementById("items");
    for (i = 0; i < data[index].items.length; i++) {
        if (i === 0) {
            items.innerHTML += "<li id=li" + i + " onclick=\"clicked(this)\" class=\"selected\">" + data[index].items[i].name + "</li>"
        } else {
            items.innerHTML += "<li id=li" + i + " onclick=\"clicked(this)\">" + data[index].items[i].name + "</li>"
        }
    }
    var link = video.src;
    var final;
    final = link.split("embed")[0] + "embed/" + data[index].items[0].watchid + "?" + link.split("embed")[1].split("?")[1];
    heading.innerText = data[index].items[0].name;
    video.src = final;
}

function clicked(ele) {
    var item = document.getElementById(ele.id);
    var heading = document.getElementById("video-title");
    var video = document.getElementById("video-fr");
    var index = window.localStorage.getItem("index");
    if (ele.id.substring(2) == "0") {
        document.getElementById("previous").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "visible";
    } else if (ele.id.substring(2) == (data[index].items.length - 1)) {
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("previous").style.visibility = "visible";
    } else {
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("previous").style.visibility = "visible";
    }
    heading.innerText = item.innerText;
    var list = document.getElementById("content-list");
    for (i = 0; i < list.children[0].children.length; i++) {
        list.children[0].children[i].className = "";
    }
    item.className = "selected";
    document.title = item.innerText;
    var link = video.src;
    var final;
    final = link.split("embed")[0] + "embed/" + data[index].items[parseInt(ele.id.substring(2))].watchid + "?" + link.split("embed")[1].split("?")[1];
    video.src = final;
    if($(window).width() <= 800){
    	    $("#navigator").hide("slide",500);
            $("#ui-dismiss").hide("fade",500);
    }
}

function collapse() {
    if($(window).width() <= 800){
         $("#navigator").toggle("slide",500);
         $("#ui-dismiss").toggle("fade");
         $("#ui-dismiss").click(function () {
            $("#navigator").hide("slide",500);
            $("#ui-dismiss").hide("fade",500);
        });
        $("body").css("overflow","hidden");
        $("#items:last-child").css("padding-bottom","10px");
    }
    else{
        $("#navigator").toggle("fold",500);
    }
}

function next() {
    var name = document.querySelector(".selected");
    var heading = document.getElementById("video-title");
    var video = document.getElementById("video-fr");
    var index = window.localStorage.getItem("index");
    for (i = 0; i < data[index].items.length; i++) {
        if (name.innerText == data[index].items[i].name) {
            if ((i + 1) === (data[index].items.length - 1)) {
                document.getElementById("next").style.visibility = "hidden";
                document.getElementById("previous").style.visibility = "visible";
            } else {
                document.getElementById("next").style.visibility = "visible";
                document.getElementById("previous").style.visibility = "visible";
            }
            document.getElementById("li"+i).scrollIntoView({ block: 'start',  behavior: 'smooth' });
            heading.innerText = data[index].items[i + 1].name;
            document.title = data[index].items[i + 1].name;
            name.nextSibling.className = "selected";
            name.className = "";
            var link = video.src;
            var final;
            final = link.split("embed")[0] + "embed/" + data[index].items[i + 1].watchid + "?" + link.split("embed")[1].split("?")[1];
            video.src = final;
        }

    }
}

function previous() {
    var name = document.querySelector(".selected");
    var heading = document.getElementById("video-title");
    var video = document.getElementById("video-fr");
    var index = window.localStorage.getItem("index");
    for (i = 0; i < data[index].items.length; i++) {
        if (name.innerText == data[index].items[i].name) {
            if ((i - 1) === 0) {
                document.getElementById("previous").style.visibility = "hidden";
                document.getElementById("next").style.visibility = "visible";
            } else {
                document.getElementById("next").style.visibility = "visible";
                document.getElementById("previous").style.visibility = "visible";
            }
            document.getElementById("li"+(i-1)).scrollIntoView({block: 'start',  behavior: 'smooth' });
            heading.innerText = data[index].items[i - 1].name;
            document.title = data[index].items[i - 1].name;
            name.previousSibling.className = "selected";
            name.className = "";
            var link = video.src;
            var final;
            final = link.split("embed")[0] + "embed/" + data[index].items[i - 1].watchid + "?" + link.split("embed")[1].split("?")[1];
            video.src = final;
        }
    }
}

function back() {
    window.location = "./";
}

function cardPressed(element) {
    window.localStorage.setItem("name", element.children[1].innerText);
    window.location = "./lesson-page.html";
}

function pageNotFound() {
    window.location = "./404.html";
}

function reset() {
    window.localStorage.setItem("name", "");
}


function keyShortcuts(e){
	if(e.keyCode == 78){
		next();
	}
	if(e.keyCode == 80){
		previous();
	}
	if(e.keyCode == 27){
		collapse();
	}

}

function goToDrive(){
    var name = window.localStorage.getItem("name");
    var index = window.localStorage.getItem("index");
    window.location.replace(data[index].drive);
}
document.addEventListener("keyup",keyShortcuts);
