import { useEffect, useState } from "react";
import { getFechGifs } from "../helpers/getFetchGifs";

export function useFetchGifs(categoria) {
  const [state, setState] = useState({ data: [], loading: true });
 
  useEffect(() => {
    getFechGifs(categoria).then((imgs) => {
      setTimeout(() => {
        setState({ data: imgs, loading: false });
      }, 3000);
    });
  }, [categoria]);

  return state;
}
