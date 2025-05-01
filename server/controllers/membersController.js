const Members = require('../models/Members');

const addMembers = async (req, res) => {
    console.log(req.body);
    try {
        const existingMember = await Members.findOne({ regNo: req.body.regNo });

        if (existingMember) {
            
            return res.status(400).send("Member already added");
        }
        
        const newMember = new Members({
            name: req.body.name,
            regNo: req.body.regNo,
            email: req.body.email,
            profile_image: req.body.profile_image,
            desc: req.body.desc || '' 
        });
        
        await newMember.save();

        res.status(201).json({ message: "Member added successfully" });
    } catch (error) {
        console.error('Error adding member:', error);
        return res.status(500).send("Internal server error");
    }
};

const viewMembers = async (req, res) => {
    try {
        const allMembers = await Members.find({}, "name regNo email"); // Fixed variable name and added fields
        
        if (!allMembers || allMembers.length === 0) {
            return res.status(200).json([]);
        }
        
        res.status(200).json(allMembers);
    } catch (error) {
        console.error('Error viewing members:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const memberDetails = async (req, res) => {
    try {
        const allMembers = await Members.find({}); // Fixed variable name
        
        if (!allMembers || allMembers.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(allMembers);
    } catch (error) {
        console.error('Error viewing members:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { addMembers, viewMembers, memberDetails}