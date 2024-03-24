import { supabase } from "@/server/api/supabase";

export default async function handler(req: any, res: any) {
    let result: any = false;
    const { username, password } = req.body;
    console.log(username, password)
	const { data } = await supabase.from('user').select('*')
    const user = data?.find((user: any) => user.username == username && user.password == password);
    if (user) {
        result = user;
    }
    res.status(200).json(result);
}
