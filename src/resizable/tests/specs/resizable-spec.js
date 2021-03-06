/**
 * Resizable tc.
 * @author yiminghe@gmail.com
 */
KISSY.use('resizable', function (S, Resizable) {
    // ie9 mousemove does not fire
    if (document.documentMode == 9) {
        return;
    }

    var $ = S.all;

    describe('resizable works', function () {


        var cssText = 'position: absolute;' +
            'width: 100px;height: 100px;' +
            'left: 100px;top:100px;';

        var dom = $('<div></div>').appendTo('body');


        beforeEach(function () {
            dom.attr('style', cssText);
        });

        var resizable = new Resizable({
            node: dom,
            handlers: ["b", "t", "r", "l", "tr", "tl", "br", "bl"]
        });

        var lNode = dom.one('.ks-resizable-handler-l');

        var rNode = dom.one('.ks-resizable-handler-r');

        var bNode = dom.one('.ks-resizable-handler-b');

        var tNode = dom.one('.ks-resizable-handler-t');

        var blNode = dom.one('.ks-resizable-handler-bl');

        var brNode = dom.one('.ks-resizable-handler-br');

        var tlNode = dom.one('.ks-resizable-handler-tl');

        var trNode = dom.one('.ks-resizable-handler-tr');

        it('l resize works', function () {
            jasmine.simulate(lNode[0], 'mousedown', {
                clientX: 102,
                clientY: 110
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 92,
                    clientY: 110
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 82,
                    clientY: 110
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.width()).toBe(120);
                expect(dom.offset().left).toBe(80);
            });
        });

        it('r resize works', function () {
            jasmine.simulate(rNode[0], 'mousedown', {
                clientX: 198,
                clientY: 110
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 208,
                    clientY: 110
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 218,
                    clientY: 110
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.width()).toBe(120);
                expect(dom.offset().left).toBe(100);
            });
        });


        it('t resize works', function () {
            jasmine.simulate(tNode[0], 'mousedown', {
                clientX: 102,
                clientY: 102
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 102,
                    clientY: 92
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 102,
                    clientY: 82
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.height()).toBe(120);
                expect(dom.offset().top).toBe(80);
            });
        });


        it('b resize works', function () {
            jasmine.simulate(bNode[0], 'mousedown', {
                clientX: 102,
                clientY: 202
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 102,
                    clientY: 212
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 102,
                    clientY: 222
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.height()).toBe(120);
                expect(dom.offset().top).toBe(100);
            });
        });


        it('bl resize works', function () {
            jasmine.simulate(blNode[0], 'mousedown', {
                clientX: 102,
                clientY: 198
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 92,
                    clientY: 208
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 82,
                    clientY: 218
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.height()).toBe(120);
                expect(dom.width()).toBe(120);
                expect(dom.offset().top).toBe(100);
                expect(dom.offset().left).toBe(80);
            });
        });


        it('tl resize works', function () {
            jasmine.simulate(tlNode[0], 'mousedown', {
                clientX: 102,
                clientY: 102
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 112,
                    clientY: 112
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 122,
                    clientY: 122
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.height()).toBe(80);
                expect(dom.width()).toBe(80);
                expect(dom.offset().top).toBe(120);
                expect(dom.offset().left).toBe(120);
            });
        });


        it('tr resize works', function () {
            jasmine.simulate(trNode[0], 'mousedown', {
                clientX: 198,
                clientY: 102
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 208,
                    clientY: 92
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 218,
                    clientY: 82
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.height()).toBe(120);
                expect(dom.width()).toBe(120);
                expect(dom.offset().top).toBe(80);
                expect(dom.offset().left).toBe(100);
            });
        });


        it('br resize works', function () {
            jasmine.simulate(brNode[0], 'mousedown', {
                clientX: 198,
                clientY: 198
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 208,
                    clientY: 208
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 218,
                    clientY: 218
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.height()).toBe(120);
                expect(dom.width()).toBe(120);
                expect(dom.offset().top).toBe(100);
                expect(dom.offset().left).toBe(100);
            });
        });


        it('disabled works for true', function () {
            resizable.set('disabled', true);
            jasmine.simulate(lNode[0], 'mousedown', {
                clientX: 102,
                clientY: 110
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 92,
                    clientY: 110
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 82,
                    clientY: 110
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.width()).toBe(100);
                expect(dom.offset().left).toBe(100);
            });

        });


        it('disabled works for false', function () {
            resizable.set('disabled', false);
            jasmine.simulate(lNode[0], 'mousedown', {
                clientX: 102,
                clientY: 110
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 92,
                    clientY: 110
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mousemove', {
                    clientX: 82,
                    clientY: 110
                });
            });
            waits(200);
            runs(function () {
                jasmine.simulate(document, 'mouseup');
            });
            waits(200);
            runs(function () {
                expect(dom.width()).toBe(120);
                expect(dom.offset().left).toBe(80);
            });

        });


        it('destroy works', function () {
            resizable.destroy();
            S.each(['t', 'l', 'b', 'r', 'tl', 'tr', 'bl', 'br'], function (s) {
                expect(dom.one('.ks-resizable-handler-' + s)).toBe(null);
            });
        });
    });

});