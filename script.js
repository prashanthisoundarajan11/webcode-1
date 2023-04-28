//Function to create bootstrap layout

function layouts(tagname,attname,attval){
    var layout_element = document.createElement(tagname)
    layout_element.setAttribute(attname,attval)
    return layout_element
}


// Function to create the headings

function heading(tagname,attname,attval,content){
    head_element = document.createElement(tagname)
    head_element.setAttribute(attname,attval)
    head_element.innerHTML=content
    return head_element
}

// Function to create Input searchbox 

function search_box(tagname,attname,attval,attname1,attval1,attname2,attval2,attname3,attval3){
    var search_input_element = document.createElement(tagname)
    search_input_element.setAttribute(attname,attval)
    search_input_element.setAttribute(attname1,attval1)
    search_input_element.setAttribute(attname2,attval2)
    search_input_element.setAttribute(attname3,attval3)
    return search_input_element

}

//Function to create search button

function button(tagname,attname,attval,attname1,attvalue1,content){
    var button_tag = document.createElement(tagname)
    button_tag.setAttribute(attname,attval)
    button_tag.setAttribute(attname1,attvalue1)
    button_tag.innerHTML = content
    return button_tag
}



// Creating the actuall HTML elements

container_element = layouts("div","class","container")
row_element = layouts("div","class","row m-3")
column_element = layouts("div","class","col-md-12")
heading_elemet = heading("p","id","head","Search Nationality Here")
search_element = search_box("input","type","text","id","personname","placeholder","Enter Person Name","class","input-group-sm mb-3")
button_tag = button("button","type","button","id","btn","Search")
button_tag.addEventListener("click",person_nationality)
document.body.append(container_element)
container_element.append(row_element)
row_element.append(column_element)
column_element.append(heading_elemet)
column_element.append(search_element)
column_element.append(button_tag)




// Function to query Nationality api and fetch the person's nationality

async function person_nationality(){

    try {
        var name = document.getElementById("personname").value
        var response1 = await fetch(`https://api.nationalize.io?name=${name}`)
        var response2 = await response1.json()
        var nationality = response2.country
        country_id = []
        probability = []
        //console.log(.probability)
        column_element.innerHTML=`<h1 style="color:purple"><i>${name}'s Top Two Nationality</i></h1>`
        for(i=0;i<2;i++){
            column_element.innerHTML+=`<div class="card">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Country_ID : ${nationality[i].country_id} & Probability : ${nationality[i].probability}</p>
              </blockquote>
            </div>
          </div>`
        }
        
    }
    catch(error){
        console.log(error)
    }

}

