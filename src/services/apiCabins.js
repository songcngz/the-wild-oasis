import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded!!");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin couldn't be deleted!!");
  }
}

export async function createEditCabin(newCabin, id) {
  // https://eleeaepwrcydjpwwfsjx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("cabins");
  // A.Create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]).select();
  // B.Edit Cabin
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("Cabin couldn't be created!!");
  }
  // 2.Uploaded image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3.Delete the cabin if there was an eror uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image couldn't be uploaded and the cabin was not created!!"
    );
  }
  return data;
}
