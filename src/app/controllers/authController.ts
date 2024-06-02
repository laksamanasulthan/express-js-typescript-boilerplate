import { Request, Response } from "express";

export const AuthController = {
    async login(req: Request, res: Response) {},
    async register(req: Request, res: Response) {},
    async logout(req: Request, res: Response) {},

    // async register(req: Request, res: Response) {
    //     const { name, email, password } = req.body;
    //     const hashedPassword = await bcrypt.hash(password, 10);
    //     const user = User.create({ name, email, password: hashedPassword });
    //     await user.save();
    //     res.send(user);
    // },
    // async login(req: Request, res: Response) {
    //     const { email, password } = req.body;
    //     const user = await User.findOne({ where: { email } });
    //     if (!user || !(await bcrypt.compare(password, user.password))) {
    //         return res.status(400).send("Invalid credentials");
    //     }
    //     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
    //         expiresIn: "1h",
    //     });
    //     res.send({ token });
    // },
};
