import React from "react";

function Myabout()
{
return <h1>This is my new component</h1>
}
export function Myabout20(){
    return <h2>This is heading two</h2>
}



export function Mycontact(){
    return(
        <>
          <h3>Thsi is second name export function</h3>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </>
    )
}

export function Mytable(){
  return(
    <>
    <table>
      <tr>
      <th>Name</th>
      <th>Class</th>
      <th>Roll No</th>
      </tr>
      <tr>
      <th>Aman Dubey</th>
      <th>10th</th>
      <th>24</th>
      </tr>
      <tr>
      <th>Anuj Dubey</th>
      <th>12th</th>
      <th>56</th>
      </tr>
      <tr>
      <th>Anamika Dubey</th>
      <th>11th</th>
      <th>11</th>
      </tr>
      <tr>
      <th>Ankit Mishra</th>
      <th>12th</th>
      <th>22</th>
      </tr>
      </table>
    </>
  )

}


export default Myabout;