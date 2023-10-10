import express, { Router, Request, Response } from "express";
import axios from "axios";

const app = express();

const router = Router();


router.get('/teste', async (req: Request, res: Response) => {
    const URL_API = ""
    try {
        const numRequests = 100; // Número de vezes que deseja executar a rota
        const requestsPerExecution = 10000; // Número de solicitações POST por execução

        for (let j = 0; j < numRequests; j++) {
            const promises = [];

            for (let i = 0; i < requestsPerExecution; i++) {
                promises.push(
                    axios.get(URL_API)
                );
            }

            await Promise.all(promises);
        }
    
        res.status(200).json({ message: "mensagem enviada com sucesso." });
    } catch (error) {
        res.status(400).json({ message: "erro ao enviar mensagem" })
    }
});

app.use(router);

app.listen(5000, () => console.log("Server is ruuning: localhost:5000"));