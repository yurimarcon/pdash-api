const mongoose = require('../../database');

const AnalyticsSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    subtitle:{
        type: String,
    },
    icon:{
        type: String,
    },
    class:{
        type: String,
    },
});

const Analytics = mongoose.model('analytics', AnalyticsSchema);

module.exports = Analytics;