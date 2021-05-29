import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

export function GifGrid({ categoria }) {

  const {data,loading}= useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {loading && <p>Loading..</p>}
      {data.map(({ title, url, id }) => {
        return (
          <div key={id} className="card">
              <img src={url} alt={title} />
              <p>{title}</p>
          </div>
        );
      })}
    </>
  );
}

