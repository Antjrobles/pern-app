import {Router} from 'express';

const router = Router();

router.get('/tasks', (req, res) => res.send('obteniendo tares'));  

router.get('/tasks/:id', (req, res) => res.send('obteniendo tarea unica'));  

router.post('/tasks', (req, res) => res.send('creando tarea'));  

router.put('/tasks/:id', (req, res) => res.send('acualizando tarea única'));  

router.delete('/tasks/:id', (req, res) => res.send('eliminando tarea'));  

export default router;

