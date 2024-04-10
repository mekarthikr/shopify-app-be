class BaseController {
	public apiMethod = (data: any) => async (req: Request, res) => {
		console.log(req.headers);
		try {
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json({ error });
		}
	};
}

export const baseController = new BaseController();
