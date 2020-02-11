import React from 'react';
import "./result.css";

function Result(props) {

  return (
    <div className="Result">
      <div className="artist">{props.artist}</div>
      <div className="title">{props.title}</div>
      <div className="buttons">
        {props.tabtypes.map(type => (
          <a href={'http://www.songsterr.com/a/wa/bestMatchForQueryString?s=' + props.title + '&a=' + props.artist + '&inst=' + type.replace("TEXT_", "").replace("_TAB", "").toLowerCase()}
            className="btn btn-white btn-animation-1" >
            {type.replace("TEXT_", "").replace("_TAB", "").toLowerCase()}
          </a>
        ))
        }
      </div>
    </div>
  );
}
export default Result;