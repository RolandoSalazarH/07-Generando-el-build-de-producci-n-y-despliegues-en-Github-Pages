 
 export async function getFechGifs(categoria) {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=X1VDYSPNMN6lbt8HlM8XIMJJj9F73AZt`
    );
    const { data } = await resp.json();

    const gifs = data.map((data) => {
      return {
        id: data.id,
        title: data.title,
        url: data.images?.downsized_medium.url,
      };
    });
return gifs;
  }
