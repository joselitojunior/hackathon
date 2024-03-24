import { supabase } from "@/server/api/supabase";

export default async function handler(req: any, res: any) {
    const { data } = await supabase.from('freelancer').select('*, user: user (*)');

    res.status(200).json(data);
}
