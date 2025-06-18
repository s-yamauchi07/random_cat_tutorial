type Image = {
  url: string;
}


export async function fetchImage(): Promise<Image> {
  const res: Response = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  
  return images[0];
}