
const apiRoot = "https://www.reddit.com/r/popular.json"

 export const fetchData = async (term) => {
   if(!term) {
    const response = await fetch(apiRoot);
    const json = await response.json();

   const array = json.data.children.map((child) => child.data);
   return array.filter((iten) => iten.post_hint);

   }else{
  const response = await fetch(`https://www.reddit.com/search.json?q=${term}`);
  const json = await response.json();

  const array = json.data.children.map((child) => child.data);
  return array.filter((iten) => iten.post_hint);
  }
}