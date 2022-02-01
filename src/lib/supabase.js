import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bhwxftjhhynkrhcwwniz.supabase.co';
const SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzcxNDY2OSwiZXhwIjoxOTU5MjkwNjY5fQ._rPUXKpAQlakLKK7-XxLkr07CeOlXivtcaAnZTiPepk';

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
export default supabase;
