var container  = document.createElement("div")
container.className = "container"

function tr(){
    var row = document.createElement("tr")
    return row
}

function td(){
    var data = document.createElement("td")
    return data
}

function th(tagname,attname,attvalue,content){
    var thead = document.createElement(tagname)
    thead.setAttribute(attname,attvalue)
    thead.innerHTML = content
    return thead
}

function lists(tagname) {
    let lists = document.createElement(tagname);
    return lists;
}

function btn(tagname,attname1,attvalue1,class1,class2,attname2,attvalue2,content){
    let button = document.createElement(tagname);
    button.setAttribute(attname1, attvalue1);
    button.classList.add(class1, class2);
    button.setAttribute(attname2, attvalue2);
    button.innerHTML = content;
    return button;
}

var table = document.createElement("table")
table.className = "table"

var tablehead = document.createElement("thead")
tablehead.className = "thead-dark"

var table_body = document.createElement("tbody")
table_body.setAttribute("id","t-body")

var tr1 = tr()
var th1 = th("th","scope","col")
th1.innerHTML = "ID"
var th2 = th("th","scope","col")
th2.innerHTML = "Email"
var th3 = th("th","scope","col")
th3.innerHTML = "Name"


var div1 = document.createElement("div")
div1.setAttribute("id","buttons")
div1.setAttribute("class", "d-flex justify-content-center")

let ul_list = document.createElement("ul");
ul_list.classList.add("pagination", "justify-content-center");
ul_list.setAttribute("id", "ul-list");

let list_pre = lists("li");
let list_first = lists("li");

let list_1 = lists("li");
let list_2 = lists("li");
let list_3 = lists("li");
let list_4 = lists("li");
let list_5 = lists("li");
let list_6 = lists("li");

let list_last = lists("li");
let list_next = lists("li");

var btn_pre = btn("button","type","button","btn","btn-primary","id","btnpre","⏪Previous")
var btn_first = btn("button","type","button","btn","btn-primary","id","btnfirst","First")
var btn_1 = btn("button","type","button","btn","btn-primary","id","btn1","1")
var btn_2 = btn("button","type","button","btn","btn-primary","id","btn2","2")
var btn_3 = btn("button","type","button","btn","btn-primary","id","btn3","3")
var btn_4 = btn("button","type","button","btn","btn-primary","id","btn4","4")
var btn_5 = btn("button","type","button","btn","btn-primary","id","btn5","5")
var btn_6 = btn("button","type","button","btn","btn-primary","id","btn6","6")
var btn_last = btn("button","type","button","btn","btn-primary","id","btnlast","Last")
var btn_next = btn("button","type","button","btn","btn-primary","id","btnnxt","Next⏭️")

paginationData();

async function paginationData(){
    var api = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    var res = await api.json()

    try{
        var namearr = []
        var emailarr = []
        var idarr = []
        for(var i=0;i<res.length;i++){
            var name = res[i].name;
            namearr.push(name);

            var email = res[i].email
            emailarr.push(email)

            var id = res[i].id
            idarr.push(id) 
        }

        let value = 0;

        var event_pre = document.getElementById("btnpre")
        event_pre.addEventListener("click", () => { 
            if(value > 0) {
                value = value - 5
                display_content(value)
            }
            else{
                alert("You are already in first page")
            }
        });
        var event_nxt = document.getElementById("btnnxt")
        event_nxt.addEventListener("click",()=>{
            if(value <95 && value >= 0){
                value = value + 5
                display_content(value)
            }
            else{
                alert("You are already in last page")
            }
        });
        var event1 = document.getElementById("btn1")
        event1.addEventListener("click",()=>{
            value = 0
            display_content(value)
        });
        var event2 = document.getElementById("btn2")
        event2.addEventListener("click",()=>{
            value = 5
            display_content(value)
        });
        var event3 = document.getElementById("btn3")
        event3.addEventListener("click",()=>{
            value = 10
            display_content(value)
        });
        var event4 = document.getElementById("btn4")
        event4.addEventListener("click",()=>{
            value = 15
            display_content(value)
        });
        var event5 = document.getElementById("btn5")
        event5.addEventListener("click",()=>{
            value = 20
            display_content(value)
        });
        var event6 = document.getElementById("btn6")
        event6.addEventListener("click",()=>{
            value = 25
            display_content(value)
        });
        var eventln = document.getElementById("btnlast")
        eventln.addEventListener("click",()=>{
            value = 95
            display_content(value)
        });
        var eventfn = document.getElementById("btnfirst")
        eventfn.addEventListener("click", () =>{
            value = 0
            display_content(value)
        })

        function display_content(Number_of_items){
            var tbody = document.getElementById("t-body")
            tbody.innerHTML = ""

            for(var i = Number_of_items; i < Number_of_items + 5; i++){
                eventbutton(`${idarr[i]}`,`${emailarr[i]}`,`${namearr[i]}`)

                function eventbutton(idData,emailData,nameData){
                    var row = tr()
                    var td1 = td()
                    td1.innerHTML = `${idData}`
                    var td2 = td()
                    td2.innerHTML = `${emailData}`
                    var td3 = td()
                    td3.innerHTML = `${nameData}`

                    row.append(td1,td2,td3)
                    table_body.append(row)
                }
            }

        }
        
        display_content(value)   
    }
    catch(error){
        console.log(error)
    }
}

ul_list.append(
  list_pre,
  list_first,
  list_1,
  list_2,
  list_3,
  list_4,
  list_5,
  list_6,
  list_next,
  list_last
)

list_pre.append(btn_pre)
list_first.appendChild(btn_first)
list_1.appendChild(btn_1)
list_2.appendChild(btn_2)
list_3.appendChild(btn_3)
list_4.appendChild(btn_4)
list_5.appendChild(btn_5)
list_6.appendChild(btn_6)

list_last.append(btn_last)
list_next.append(btn_next)


tr1.append(th1,th2,th3)
tablehead.append(tr1)
table.append(tablehead,table_body)

container.append(table,ul_list)

document.body.append(container)