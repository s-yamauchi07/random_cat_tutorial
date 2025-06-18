type Image = {
  url: string;
}


export async function fetchImage(): Promise<Image> {
  const res: Response = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log("fetchImage", images);
  return images[0].url;
}