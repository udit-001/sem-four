var data = [{
        "name": "Interpolation",
        "items": [{
                "name": "Finite Difference Operators",
                "watchid": "PBjGdQOghJE"
            },
            {
                "name": "Relation Between Finite Difference Operators",
                "watchid": "cT1Ai7bfZgs"
            },
            {
                "name": "Newton's Forward Difference Formula",
                "watchid": "1pJYZX-tgi0"
            },
            {
                "name": "Newton's Backward Difference Formula",
                "watchid": "0fECWZIxNv4"
            },
            {
                "name": "Stirling Central Difference Formula",
                "watchid": "ECHk74MteDI"
            },
            {
                "name": "Lagrange's Interpolation Formula",
                "watchid": "BLTS7Qgb6Cg"
            },
            {
                "name": "Newton's Divided Difference Formula",
                "watchid": "8T9X-xU2dSM"
            }
        ]
    },
    {
        "name": "Solution of Non Linear Equation",
        "items": [{
                "name": "Concept of Algebraic & Transcendental Equation",
                "watchid": "Xzkl2jZtuys"
            },
            {
                "name": "Bisection Method",
                "watchid": "DMZj48icYnE"
            },
            {
                "name": "Regula Falsi Method",
                "watchid": "BgrY0uZRhAI"
            },
            {
                "name": "Regula Falsi Method (Contd...)",
                "watchid": "eoDr_tZ2bGU"
            },
            {
                "name": "Newton Raphson Method",
                "watchid": "rCoABot_tIE"
            },
            {
                "name": "Newton Raphson Method (Contd...)",
                "watchid": "GyTwFumYEiA"
            }

        ]
    },
    {
        "name": "Solution Of Linear Simultaneous Equations",
        "items": [{
                "name": "Gauss Elimination Method",
                "watchid": "ZAdFksylrwo"
            },
            {
                "name": "Crout's Method/ LU Decomposition Method",
                "watchid": "NtSgdU32K6g"
            },
            {
                "name": "Gauss-Jacobi Method",
                "watchid": "pxae-4dYGNQ"
            },
            {
                "name": "Gauss-Seidel Method",
                "watchid": "eZ0nQ-VbDeI"
            },
            {
                "name": "Gauss-Jordan Method",
                "watchid": "bpwAXCK2kFk"
            }
        ]
    },
    {
        "name": "Numerical Differentiation",
        "items": [{
                "name": "Numerical Differentiation",
                "watchid": "12KWLvSRNVw"
            },
            {
                "name": "Numerical Integration",
                "watchid": "iDU104Mk92I"
            }
        ]
    },
    {
        "name": "Probability Distributions",
        "items": [{
                "name": "The Average",
                "watchid": "uhxtUt_-GyM"
            },
            {
                "name": "Standard Deviation",
                "watchid": "HvDqbzu0i0E"
            },
            {
                "name": "Variance",
                "watchid": "6JFzI1DDyyk"
            },
            {
                "name": "Probability Mass Function & Probability Density Function",
                "watchid": "1c_ioSurlD0"
            },
            {
                "name": "Binomial Distribution",
                "watchid": "23ortl7mi2o"
            },
            {
                "name": "Poisson Distribution",
                "watchid": "sWz7wG2IyZU"
            },
            {
                "name": "Normal Distribution",
                "watchid": "lBlq6t9MLOg"
            }
        ]
    }
]

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
}

function collapse() {
    var nav = document.getElementById("navigator");
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
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
    window.location = "../";
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
