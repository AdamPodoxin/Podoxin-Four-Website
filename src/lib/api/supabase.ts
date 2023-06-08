import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_PUBLIC_API_KEY } from "../constants";

export default createClient(SUPABASE_URL, SUPABASE_PUBLIC_API_KEY);
