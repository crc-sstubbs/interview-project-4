import cors from 'cors'
import express from 'express'

const app: express.Application = express()

const port: number = 4000

interface Todo {
    id: number;
    text: string;
    active: boolean;
    done: boolean;
}

let todos: Todo[] = [
    'NestJS',
    'GraphQL',
    'Apollo',
    'TypeScript',
    'React',
    'Redux',
    'React Query',
    'Angular',
    'Vue',
    'D3',
    'Svelte',
    'SolidJS',
    'NextJS',
    'AWS',
].map((text, index) => ({
    id: index + 1,
    text: `Learn ${text}`,
    active: true,
    done: false,
}))

app.use(cors())
app.use(express.json());

app.get('/todos', (_req, res) => {
    res.send(todos);
})

app.post('/todos', (req, res) => {
    const todo: Todo = {
        id: todos.length + 1,
        text: req.body.text,
        active: true,
        done: false,
    };
    todos.push(todo)
    res.send(todo)
})

app.get('/todos/:id', (req, res) => {
    let todo = todos.find((todo) => { return todo.id == parseInt(req.params.id) })
    res.send(todo);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})