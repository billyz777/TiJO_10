describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: ''
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', ag: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
        it('should calculate age person', function () {
            expect(app.calculateAge("10/10/2014")).toEqual(1);
        })
    });
    describe('calculateArea',function () {
        it('should calculate are', function () {
            expect(app.calculateArea(21,2,0,'Yea', 'opps')).toEqual({area: 21, message: 'Yea'});
            expectapp.calculateArea(21,21,-2,Yea', 'opps')).toEqual({area: 63, message: 'Yea'});
        });
        it('should return area with message error', function () {
            expect(app.calculateArea(2,3,4,'good','SO BAAD')).toEqual({ area : -5, message : SO BAAD' });
            expect(app.calculateArea(2,2,2,'good','SO BAAD')).toEqual({ area : -2, message : 'SO BAAD' });
        });
        it('should return area 0 and message', function () {
            expect(app.calculateArea(0,0,0,'good','SO BAAD')).toEqual({ area  0, message : 'Big null' });
        });
    });
});


