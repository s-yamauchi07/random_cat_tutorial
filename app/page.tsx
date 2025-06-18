import { connection } from "next/server";
import { fetchImage } from "./fetch-image";

export default async function Home() {
  await connection();
  const image = await fetchImage();
  console.log("image", image);

  return <div>猫画像予定地</div>;
}