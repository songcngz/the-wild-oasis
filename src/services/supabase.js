import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eleeaepwrcydjpwwfsjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZWVhZXB3cmN5ZGpwd3dmc2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTg1NTcsImV4cCI6MjAyMzM5NDU1N30.QNLmDIvK-zy6RkFhMSWxXT7K-HNydl84OLDgJ_etuhM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
