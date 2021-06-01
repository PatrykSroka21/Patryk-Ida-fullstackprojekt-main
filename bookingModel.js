const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
name: String,
date: Date,
});

const booking = mongoose.model("Booking", bookingSchema);

exports.saveBooking = function(inName, inDate){
    var booking = Booking({
    name: inName,
    date:inDate,

    });
    booking.save();

}
exports.getBooking = async function (uName){
return await Booking.findOne({ name: uName});
};