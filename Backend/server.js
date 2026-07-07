import express from "express"; // module JS 

const app = express()
const PORT = 3000;

app.get('/', (req,res) => {
    res.send("Hello World")
})

// it simply request listener and callback function at /route
// get a list of 5 jokes 
app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 3,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 4,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 5,
            title:  "did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})