// ============================================================
//  SUPABASE — reemplazá con los datos de tu proyecto
//  Settings → API en el dashboard de Supabase
// ============================================================

const SUPABASE_URL = "https://cthvkfsberkxvbrvlpcf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_wl_iGzAChkjNGqpgGXzOIQ_FjgKOkLG";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
