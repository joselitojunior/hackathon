export default async function handler(req: any, res: any) {
    let result: any = false;
    const { username, password } = req.body;
    console.log(username, password)
    const mockedData = [
        { id: 1, name: 'Joselito Júnior', type: 1, username: 'jjrkkj', password: 'password123' },
        { id: 2, name: 'Ana', type: 0, username: 'ana123', password: 'password123' },
        { id: 3, name: 'Lucas', type: 0, username: 'lucas123', password: 'password123' },
        { id: 4, name: 'Luana', type: 1, username: 'luana123', password: 'password123' },
    ].find((user: any) => user.username == username && user.password == password)
    const user = mockedData;
    if (user) {
        result = user;
    }
    res.status(200).json(result);
}
