/* eslint-env jest */

import * as api from './api';

describe('api', function apiTestSuite() {

    /* eslint-disable no-magic-numbers */

    describe('getWeekStartByRegion(regionCode, regionDayMap)', () => {
        // eslint-disable-next-line require-jsdoc
        function verify(code, map, expected) {
            expect( api.getWeekStartByRegion(code, map) )
                .toBe( expected );
        }

        it('should return result depending on regionDayMap', () => {
            verify('png', {BR: 0, PNG: 3, EG: 6}, 3);
            verify('Qa', {QA: 6}, 6);
            verify(50, {BD: 5, '50': 5, SD: 6}, 5);
            verify('PNG', {BR: 0, PNG: 11, EGY: 6}, 11);
        });

        it('should return 1', () => {
            verify('Id', {}, 1);
            verify('PR', {QA: 3, HK: 0}, 1);
        });
    });

    describe('getWeekStartByLocale(locale, langRegionMap, regionDayMap)', () => {
        // eslint-disable-next-line max-params, require-jsdoc
        function verify(locale, langRegionMap, regionDayMap, expected) {
            expect( api.getWeekStartByLocale(locale, langRegionMap, regionDayMap) )
                .toBe( expected );
        }

        it('should return result depending on langRegionMap and regionDayMap', () => {
            verify('no', {no: 'abc'}, {ABC: 3}, 3);
            verify('no', {no: 'abc', yes: 'xyz'}, {ABC: 9, XYZ: 10}, 9);
            verify('KK_arab', {'kk_arab': 'CN'}, {CN: 0}, 0);
            verify('KK_Arab', {'kk_arab': 'CN', kk: 'DJ'}, {CN: 0, DJ: 6}, 0);
            verify('kk_ARAB', {'kk_arab': 'CN', 'Arab': 'iq'}, {CN: 0, IQ: 6}, 0);
            verify('fr-DZ', {fr: 'FR'}, {FR: 1, DZ: 6}, 6);
            verify('fr-DZ', {fr: 'FR', dz: 'FR'}, {FR: 2, CA: 0, DZ: 6}, 6);
        });

        it('should return 1', () => {
            verify('no', {}, {}, 1);
            verify('no', {en: 'GB', fr: 'DZ'}, {GB: 5, DZ: 6}, 1);
            verify('fr-DZ', {fr: 'FR'}, {FR: 3, TT: 0}, 1);
        });
    });
});
