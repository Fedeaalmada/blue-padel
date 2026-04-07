// ============================================================
//  SUPABASE — reemplazá con los datos de tu proyecto
//  Settings → API en el dashboard de Supabase
// ============================================================

const SUPABASE_URL = "https://yyhvaugvcvgyzfuuciqj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5aHZhdWd2Y3ZneXpmdXVjaXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1OTgxNDYsImV4cCI6MjA5MTE3NDE0Nn0.Eli3w4P9kQYum5BEZ8VAEKYv9ftZpy4ksOz7cumh8fI";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
