export default async function handler(req: any, res: any) {
	const mockedData = [
		{ id: 1, name: 'Pedro', type: 0 },
		{ id: 2, name: 'Ana', type: 0 },
		{ id: 3, name: 'Lucas', type: 1 },
		{ id: 4, name: 'Luana', type: 1 },
	].filter((user: any) => user.id === req.body.id);
	const user = mockedData;
	res.status(200).json(user);
}
