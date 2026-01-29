
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// Note: These would typically be in .env.local in a local Next.js environment.
// For this environment, we assume they are provided or we use placeholders.
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
