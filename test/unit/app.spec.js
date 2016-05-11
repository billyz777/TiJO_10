describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
            expect(app.assignToSwimmingCourse('Paul', '22/11/1997')).toEqual({
                name: 'Paul', age: 18, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
            expect(app.assignToSwimmingCourse("Alex", '07/07/1999')).toEqual({
                name: 'Alex', age: 16, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
            expect(app.assignToSwimmingCourse('Max', '12/07/2008')).toEqual({
                name: 'Max', age: 7, course: 'kids'
            });
        });
        it('should return false when a or b or c is not numeric', function() {
            expect(answer.calculateArea('7', 2, 5, 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea(7, "2", 5, 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea(7, 2, '5', 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea('7', '2', 5, 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea('7', 2, '5', 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea(7, '2', '5', 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea('7', '2', '5', 'Success', 'Failure')).toEqual(false);
        });
        it('should return number and Success', function () {
            expect(answer.calculateArea(1, 7, 0, "Success", "Error")).toEqual({area: 7, message: 'Success'});
            expect(answer.calculateArea(2, 9, 3, "Success", "Error")).toEqual({area: 3, message: 'Success'});
            expect(answer.calculateArea(8, 2, 2, "Success", "Error")).toEqual({area: 4, message: 'Success'});
            expect(answer.calculateArea(3, 8, 1, "Success", "Error")).toEqual({area: 5, message: 'Success'});
        });
    });
});


