// Supabase configuration — safe to expose, RLS policies on the server control access
const SUPABASE_URL  = 'https://qtjmxbpajymxoawupzoq.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0am14YnBhanlteG9hd3Vwem9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MDQ4ODIsImV4cCI6MjA5NTM4MDg4Mn0.TZFiBDqedOAqxN6s1t9XRZ4nnN2fW3tqPm7kF--srMg';

// Initialise the global supabase client (loaded via CDN in the HTML before this file)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
