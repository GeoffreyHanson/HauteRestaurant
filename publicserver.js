const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
app.post("/api/tables/new/", (req, res) => {
    //req.body.routeName = req.body.name.replace(/\s+/g, "").toLowerCase();
    tables.push(req.body);
    res.send(req.body);
});
app.post("/api/clear/", (req, res) => {
    tables = [{}];
});
const tables = [{
    ID: 'PlaceholderID',
    name: 'Placeholder Joe',
    phone: '555-555-5555',
    email: 'place@holder.com',
}];
app.get('/api/tables/', (req, res) => {
    return res.json(tables);
});
/*
app.get('/api/tables/:table', (req, res) => {
    characters.forEach((el) => { if (req.params.table === el.routeName) return res.send(el); });
    return res.json([false]);
});
*/