import { useGlobalContext } from "./Context";
import React from "react";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <div className="stories_box">
        {hits.map((curpost) => {
          const { title, author, objectID, url, num_comments } = curpost;
          return (
            
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By <span>{author}</span> | <span>{num_comments}</span>comments
                </p>
                <div className="card-button">
                  <a href={url} target="blank">
                    Read More
                  </a>
                  <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
                </div>
              </div>
           
          );
        })}
      </div>
    </>
  );
};

export default Stories;
