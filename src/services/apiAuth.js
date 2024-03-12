import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { fullName, avatar: "" },
    },
  });
  if (error) throw new Error(error);
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error);
  return data;
}

export async function getCurrentUser(params) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error);
  return user;
}

export async function logout(params) {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error);
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  let updateUser;
  // 1. Update password OR fullName
  if (password) updateUser = { password };
  if (fullName) updateUser = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateUser);
  if (error) throw new Error(error);
  if (!avatar) return data;

  // 2. Upload the avatar image
  // https://eleeaepwrcydjpwwfsjx.supabase.co/storage/v1/object/public/avatars/cabin-001.jpg?t=2024-03-06T06%3A35%3A08.031Z

  const avatarFile = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(avatarFile, avatar, {
      cacheControl: "3600",
      upsert: false,
    });
  if (storageError) throw new Error(storageError);
  // 3. Update avatar in the user
  const { data: updatedUser, error: errorAfterAvatar } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${avatarFile}`,
      },
    });
  if (errorAfterAvatar) throw new Error(errorAfterAvatar);

  return updatedUser;
}
