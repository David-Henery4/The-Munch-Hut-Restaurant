"use server"
import { revalidateTag } from "next/cache";

const revalidateHomeAboutDataAction = async () => {
  revalidateTag("aboutData");
}

export default revalidateHomeAboutDataAction