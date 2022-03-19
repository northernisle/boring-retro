import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SB_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SB_ANON ?? '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
