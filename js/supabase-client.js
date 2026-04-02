// ============================================================
//  SUPABASE — reemplazá con los datos de tu proyecto
//  Settings → API en el dashboard de Supabase
// ============================================================

const SUPABASE_URL = "https://TU_PROJECT_ID.supabase.co";
const SUPABASE_ANON_KEY = "TU_ANON_KEY";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
