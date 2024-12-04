const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number, 
        required: true,
    },
}, { timestamps: true });

userSchema.virtual('age').get(function () {
    const now = moment();
    const birthDate = moment(this.dob);
    return now.diff(birthDate, 'years');
});

userSchema.virtual('BMI').get(function () {
    if (this.height && this.weight) {
        const heightInMeters = this.height / 100;
        return (this.weight / (heightInMeters ** 2)).toFixed(2);
    }
    return null;
});

userSchema.virtual('calories').get(function () {
    const heightInCm = this.height;
    const weightInKg = this.weight;
    const ageInYears = this.age;

    const BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
    const maintenanceCalories = BMR * 1.55; 
    return Math.round(maintenanceCalories);
});


userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
