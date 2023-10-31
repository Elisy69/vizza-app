import { createClient } from "@supabase/supabase-js";

const vizzaUrl = import.meta.env.VITE_SUPABASE_URL;
const vizzaApiKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(vizzaUrl, vizzaApiKey);
