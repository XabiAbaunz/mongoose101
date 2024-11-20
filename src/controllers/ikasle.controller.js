const Ikasle = require('../models/ikasle.model');

exports.getIkasleak = async (req, res, next) => {
    try {
        const ikasleak = await Ikasle.find();
        res.json(ikasleak);
    } catch (error) {
        next(error);
    }
};

exports.createIkasle = async (req, res, next) => {
    try {
        const ikasle = new Ikasle(req.body);
        const savedIkasle = await ikasle.save();
        res.status(201).json(savedIkasle);
    } catch (error) {
        next(error);
    }
};

exports.getIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findById(req.params.id);
        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
};

exports.deleteIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findByIdAndDelete(req.params.id);
        if(!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
}

exports.updateIkasleByEmail = async (req, res) => {
    const { emailZaharra } = req.params;
    const { izena, adina, emailBerria } = req.body;

    try {
        const updates = {};
            if (izena) updates.izena = izena;
            if (adina) updates.adina = adina;
            if (emailBerria) updates.email = emailBerria;
        const updatedIkasle = await Ikasle.findOneAndUpdate(
            { email: emailZaharra },
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedIkasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }

        res.json(updatedIkasle);
    } catch (err) {
        res.status(500).json({ message: 'Errorea Ikaslea eguneratzean'});
    }
};

// Gehitu beste kontroladoreak...