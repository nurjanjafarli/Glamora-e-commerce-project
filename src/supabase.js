import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nbfdrskxtlmwffruahei.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iZmRyc2t4dGxtd2ZmcnVhaGVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNDEyMDksImV4cCI6MjAzNzkxNzIwOX0.eZM0uP4UfIFfBJQTSjUlqyVDWcyJxPhmEtDU4tGgqG4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
