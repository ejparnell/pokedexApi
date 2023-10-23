const Pokemon = require('../models/pokemon')

async function create(req, res) {
    try {
        const pokemon = await Pokemon.create(req.body)
        res.status(201).json(pokemon)
    } catch (error) {
        res.status(400).json({ error: 'something went wrong' })
    }
}

async function index(req, res) {
    try {
        const pokemon = await Pokemon.find({ owner: req.params.id })
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({ error: 'something went wrong' })
    }
}

async function updateNickname(req, res) {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        pokemon.nickname = req.body.nickname
        await pokemon.save()
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({ error: 'something went wrong' })
    }
}

async function deletePokemon(req, res) {
    
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        await pokemon.deleteOne()
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({ error: 'something went wrong' })
    }
}

module.exports = {
    create,
    index,
    updateNickname,
    deletePokemon
}