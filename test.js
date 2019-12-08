'use strict';

const expect = require('chai').expect;
const sdf = require('./index');
const formatTime = sdf.formatTime;
const formatDate = sdf.formatDate;
const formatDateTime = sdf.formatDateTime;

describe('Dateformatter', function() {
    it('should format date', function() {
        const date = new Date(2019,11,20);
        const result = formatDate(date);
        expect(result).to.equal('20-12-2019');
    });
    it('should format date with different separator', function() {
        const date = new Date(2019,11,20);
        const result = formatDate(date, '/');
        expect(result).to.equal('20/12/2019');
    });
    it('should format time', function() {
        const date = new Date(2019,11,20);
        date.setHours(10);
        date.setMinutes(20);
        const result = formatTime(date);
        expect(result).to.equal('10:20 AM');
    });
    it('should format date & time', function() {
        const date = new Date(2019,11,20);
        date.setHours(10);
        date.setMinutes(20);
        const result = formatDateTime(date);
        expect(result).to.equal('20-12-2019 10:20 AM');
    });
    it('should format date & time with separator', function() {
        const date = new Date(2019,11,20);
        date.setHours(10);
        date.setMinutes(20);
        const result = formatDateTime(date, '/');
        expect(result).to.equal('20/12/2019 10:20 AM');
    });
});