import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hhqhvusswlvwgmjdnxal.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhocWh2dXNzd2x2d2dtamRueGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NzQxMDcsImV4cCI6MjA1MTM1MDEwN30.9Ql1lRfMEqMnuqvvZpFQRvWHxnBqkOVEwmOSEUlWKPg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
