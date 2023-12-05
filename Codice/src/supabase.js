import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://juvgkuoyoxmufbjfphpx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dmdrdW95b3htdWZiamZwaHB4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTYyNzk4MCwiZXhwIjoyMDE3MjAzOTgwfQ.uGjRdFjdMofQi9LGKMZD9bQiicBNug_sk3zyR3G0Idc'

export const supabase = createClient(supabaseUrl, supabaseKey);