import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vayogehzaiaezxnnmhgu.supabase.co'
const supabaseAnnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZheW9nZWh6YWlhZXp4bm5taGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyNzEyOTQsImV4cCI6MjAyNjg0NzI5NH0.KdJPWVkdqZjGpX9Gem0Yt7-ISvjS0gvW0ipr2R2sY3w'

export const supabase = createClient(supabaseUrl, supabaseAnnonKey)
