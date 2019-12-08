'use strict';

const expect = require('chai').expect;
const sdf = require('./index');
const formatTime = sdf.formatTime;
const formatDate = sdf.formatDate;

describe('Dateformatter', function() {
    it('should format date', function() {
        const date = new Date(2019,12,20);
        const result = formatDate(date);
        expect(result).to.equal('1');
    });
});