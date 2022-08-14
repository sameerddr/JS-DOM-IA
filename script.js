var navbtn = document.querySelectorAll('.button'); // select all items to become filter
var container = document.querySelector(".container");
var button1 = document.querySelector("#red");
var data1 = document.querySelector(".red");
var container1 = document.querySelector(".container1");
var red_secttion = document.querySelector("#red_section");
var yellow_secttion = document.querySelector("#yellow_section");
var black_secttion = document.querySelector("#black_section");
var blue_secttion = document.querySelector("#blue_section");

[].forEach.call(navbtn, function(al) {
    al.addEventListener('click', function() {

        document.querySelector('.is-checked').classList.remove('is-checked') //remove the active class
        this.classList.add('is-checked') //add the active class to this, the clicked element

        var match = this.dataset.filter // store the data-filter of the clicked element in a variable

        var project = document.querySelectorAll('.item'); // create a variable for element to filter
        [].forEach.call(project, function(el) {
            el.classList.add('fade')
            setTimeout(function() {
                    el.classList.add('none')
                }, 300) //fade and hide all items
            if (el.classList.contains(match)) { //if one or several items contains the variable of this.datafilter in ther class, show it and fade it in.
                setTimeout(function() {
                    el.classList.remove('none')
                }, 300)
                setTimeout(function() {
                    el.classList.remove('fade')
                }, 400)
            }
            if (match === "*") { // if * show all
                setTimeout(function() {
                    el.classList.remove('none')
                }, 300)
                setTimeout(function() {
                    el.classList.remove('fade')
                }, 400)
            }
        })
    })
})

function create() {

    // we have set the height and width of the create element div

    container1.style.width = "500px";
    container1.style.height = "400px";

    // Below we have created the input filed for entering the data
    var input = document.createElement("input");
    input.type = "text";
    input.className = "input-name";
    input.setAttribute('ID', 'input_data');
    input.placeholder = "Enter data";
    input.style.display = "block";
    input.style.textAlign = "center";
    input.style.margin = "0px auto";


    // Here, we created a  first button "RED" inside the create button container
    var button1 = document.createElement('BUTTON');
    var text1 = document.createTextNode("RED");
    button1.setAttribute('ID', 'redbutton');
    button1.setAttribute('CLASS', 'color_buttons red');
    button1.appendChild(text1);

    // Here, we created a  second button "YELLOW" inside the create button container
    var button2 = document.createElement('BUTTON');
    var text2 = document.createTextNode("YELLOW");
    button2.setAttribute('ID', 'yellowbutton');
    button2.setAttribute('CLASS', 'color_buttons yellow');
    button2.appendChild(text2);

    // Here, we created a  third button "BLUE" inside the create button container
    var button3 = document.createElement('BUTTON');
    var text3 = document.createTextNode("BLUE");
    button3.setAttribute('ID', 'bluebutton');
    button3.setAttribute('CLASS', 'color_buttons blue');
    button3.appendChild(text3);
    // Here, we created a  fourth button "BLACK" inside the create button container
    var button4 = document.createElement('BUTTON');
    var text4 = document.createTextNode("BLACK");
    button4.setAttribute('ID', 'blackbutton');
    button4.setAttribute('CLASS', 'color_buttons black');
    button4.appendChild(text4);

    // here we pushed the button & input filed inside the container1
    container1.appendChild(input);
    container1.appendChild(button1);
    container1.appendChild(button2);
    container1.appendChild(button3);
    container1.appendChild(button4);


    // here we created a onclick function for button1 
    button1.onclick = function red(e) {

            e.preventDefault();

            // here we are getting the value of the input filed 
            let data = document.getElementById("input_data").value;
            new_cont1 = document.createElement("div");
            new_cont1.setAttribute('ID', 'content_red');
            new_cont1.innerText = data;


            // the delete button is created
            var button_del2 = document.createElement('BUTTON');
            var text3 = document.createTextNode("\u{1F5D1}");
            button_del2.setAttribute('ID', 'del_button');
            button_del2.appendChild(text3);
            new_cont1.appendChild(button_del2);

            button_del2.onclick = function del(e) {
                e.preventDefault();
                new_cont1.remove();
            }

            // the edit button is created
            var button_edit = document.createElement('BUTTON');
            var text_edit = document.createTextNode("\u{1F58A}");
            button_edit.setAttribute('ID', 'edit_button');
            button_edit.appendChild(text_edit);
            new_cont1.appendChild(button_edit);

            button_edit.onclick = function edit(e) {
                e.preventDefault();
                let edit_data = prompt("Enter new data");
                new_cont1.innerText = edit_data;
            }

            red_secttion.appendChild(new_cont1);
        }
        // here we created a onclick function for button2


    button2.onclick = function yellow(e) {

        e.preventDefault();
        let data = document.getElementById("input_data").value;
        // let new_cont2 = document.querySelector(".yellow");
        new_cont2 = document.createElement("div");
        new_cont2.setAttribute('ID', 'content_yellow');
        new_cont2.innerText = data;



        var button_del2 = document.createElement('BUTTON');
        var text3 = document.createTextNode("\u{1F5D1}");
        button_del2.setAttribute('ID', 'del_button');
        button_del2.appendChild(text3);
        new_cont2.appendChild(button_del2);

        button_del2.onclick = function del(e) {
            e.preventDefault();
            new_cont2.remove(e);

        }
        var button_edit = document.createElement('BUTTON');
        var text_edit = document.createTextNode("\u{1F58A}");
        button_edit.setAttribute('ID', 'edit_button');
        button_edit.appendChild(text_edit);
        new_cont2.appendChild(button_edit);

        button_edit.onclick = function edit(e) {
            e.preventDefault();
            let edit_data = prompt("Enter new data");
            new_cont2.innerText = edit_data;
        }

        yellow_secttion.appendChild(new_cont2);
    }


    // here we created a onclick function for button3



    button3.onclick = function blue(e) {

        e.preventDefault();
        let data = document.getElementById("input_data").value;
        // let new_cont3 = document.querySelector(".blue");
        new_cont3 = document.createElement("div");
        new_cont3.setAttribute('ID', 'content_blue');
        new_cont3.innerText = data;



        var button_del2 = document.createElement('BUTTON');
        var text3 = document.createTextNode("\u{1F5D1}");
        button_del2.setAttribute('ID', 'del_button');
        button_del2.appendChild(text3);
        new_cont3.appendChild(button_del2);

        button_del2.onclick = function del(e) {
            e.preventDefault();
            new_cont3.remove();
        }
        var button_edit = document.createElement('BUTTON');
        var text_edit = document.createTextNode("\u{1F58A}");
        button_edit.setAttribute('ID', 'edit_button');
        button_edit.appendChild(text_edit);
        new_cont3.appendChild(button_edit);

        button_edit.onclick = function edit(e) {
            e.preventDefault();
            let edit_data = prompt("Enter new data");
            new_cont3.innerText = edit_data;
        }

        blue_secttion.appendChild(new_cont3);

        // here we created a onclick function for button3


        button4.onclick = function black(e) {

            e.preventDefault();
            let data = document.getElementById("input_data").value;
            // let new_cont4 = document.querySelector(".black");
            new_cont4 = document.createElement("div");
            new_cont4.setAttribute('ID', 'content_black');
            new_cont4.innerText = data;



            var button_del2 = document.createElement('BUTTON');
            var text3 = document.createTextNode("\u{1F5D1}");
            button_del2.setAttribute('ID', 'del_button');
            button_del2.appendChild(text3);
            new_cont4.appendChild(button_del2);

            button_del2.onclick = function del(e) {
                e.preventDefault();
                new_cont4.remove();
            }
            var button_edit = document.createElement('BUTTON');
            var text_edit = document.createTextNode("\u{1F58A}");
            button_edit.setAttribute('ID', 'edit_button');
            button_edit.appendChild(text_edit);
            new_cont4.appendChild(button_edit);

            button_edit.onclick = function edit(e) {
                e.preventDefault();
                let edit_data = prompt("Enter new data");
                new_cont4.innerText = edit_data;
            }

            black_secttion.appendChild(new_cont4);
        }
    }
}