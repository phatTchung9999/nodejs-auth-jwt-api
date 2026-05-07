const Employee = require('../model/Employee');

const getAllEmployees = async (req, res) => {
        const employees = await Employee.find();
        if (!employees) return res.status(204).json({'message': 'No employees found.'});
        res.json(employees)
    }

const createNewEmployee = async (req, res) => {
    if (!req?.body?.firstname) {
        return res.status(400).json({'message': 'First name are required'});
    }

    try {
        const result = await Employee.create(
            {
                firstname: req.body.firstname
            }
        );
        res.status(201).json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }

    }

const updateEmployee = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({'message': 'ID parameter is required.'})
    }

    const employee = await Employee.findOne({ _id: req.body.id }).exec();

    if (!employee) {
        return res.status(204).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    if (req.body?.firstname) employee.firstname = req.body.firstname;

    const result = await employee.save();
    res.json(result);
    }

const deleteEmployee = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({'message': 'ID parameter is required.'})
    
    const employee = await Employee.findOne({_id: req.body.id}).exec();
    
    if (!employee) {
        return res.status(204).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    const result = await Employee.deleteOne({_id: req.body.id});

    res.json(result);
    }

const getEmployee = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({'message': 'ID parameter is required.'})

    const employee = await Employee.findOne({_id: req.params.id}).exec();
    if (!employee) {
        return res.status(204).json({ "message": `Employee ID ${req.params.id} not found` });
    }
    res.json(employee);
    }


module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}
