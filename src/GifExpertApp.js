import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export function GifExpertApp() {
  const [categorias, setCategorias] = useState([""]);

  return (
    <div>
      <h1 className="Main-title">GifExpertApp</h1>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      <ol>
        {categorias.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        ))}
      </ol>
    </div>
  );
}
