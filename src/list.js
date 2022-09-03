import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Watch from "./stopwatch";
import "./style.css";

function List(props) {
  const data = props.data;
  const [count, setCount] = useState(0);

  return (
    <div className="center-container">
    <div className="inline">
           
      <div className="top-fix" >
        <h1>{props.title}</h1>
              Progress: {count}/{data.length}
       <br/>
       <br/>
      </div>
      <div className="bottom-scroll">
        {data.length && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Label</th>
                  <th>Link</th>
                  <th>Timer</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => {
                  return (
                    <>
                      <Watch
                        key={row.id}
                        data={row}
                        count={count}
                        setCount={setCount}
                      ></Watch>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    <div className="bottom-fix">
          <ProgressBar
              completed={
                ((parseInt(count) / parseInt(data.length)) * 100).toFixed(2) 
              }
              // className="wrapper"
              // barContainerClassName="container"
              // completedClassName="barCompleted"
              // labelClassName="label"
          />  
    </div>
    </div>
  );
}

export default List;
