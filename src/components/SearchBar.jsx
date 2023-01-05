import React, { useState } from "react"
//Css
import '../css/SearchBar.scss'


function SearchBar({arr}) {

    //State to hold the user input value
    const [searchTerm, setSearchTerm] = useState("");

  return (

    <>

     <div className='searchbar'>
        <input type="text" placeholder='Search...' onChange={(event) => {setSearchTerm(event.target.value); //function sets value to the state
        }}/>
    </div> 

     {/* Filters the array and creates a copy of the array with the new values that meet the condition */}
     {arr.filter((value) => {
        if (searchTerm === "") {
            return ""
        } else if (value.name.toLowerCase().includes(searchTerm)) { //if the value includes characters from the search term then return that value and add it to the new filtered array
            return value;
        }

        }).map((value, key) => { //Maps through the new filtered array and returns the values that match
        return (
            <div className="user" key={key}>
                <p>{value.name}</p>
            </div>
        );
    })} 

</>

  )
}

export default SearchBar