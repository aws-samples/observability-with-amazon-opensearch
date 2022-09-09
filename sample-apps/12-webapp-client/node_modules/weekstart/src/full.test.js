/* eslint-env jest */

import * as api from './full';

describe('full', function fullTestSuite() {

    /* eslint-disable no-magic-numbers */

    describe('getWeekStartByRegion(regionCode)', () => {
        // eslint-disable-next-line require-jsdoc
        function verify(code, expected) {
            expect( api.getWeekStartByRegion(code) )
                .toBe( expected );
        }

        it('should return correct result for ISO 3166 Alpha-2 code', () => {
            verify('bs', 0);
            verify('PE', 0);
            verify('kw', 6);
            verify('SD', 6);
            verify('bd', 5);
            verify('no', 1);
            verify('RU', 1);
        });

        it('should return correct result for ISO 3166 Alpha-3 code', () => {
            verify('can', 0);
            verify('SLV', 0);
            verify('dji', 6);
            verify('QAT', 6);
            verify('MDV', 5);
            verify('esp', 1);
            verify('MUS', 1);
        });

        it('should return correct result for ISO 3166 numeric code', () => {
            verify(446, 0);
            verify(710, 0);
            verify(400, 6);
            verify(729, 6);
            verify(50, 5);
            verify(246, 1);
            verify(686, 1);
        });

        it('should return 1', () => {
            verify(null, 1);
            verify(0, 1);
            verify('moon', 1);
        });
    });

    describe('getWeekStartByLocale(locale)', () => {
        // eslint-disable-next-line require-jsdoc
        function verify(locale, expected) {
            expect( api.getWeekStartByLocale(locale) )
                .toBe( expected );
        }

        it('should return correct result for locale containing only language code', () => {
            verify('HI', 0);
            verify('jam', 0);
            verify('FA', 6);
            verify('bej', 6);
            verify('ccp', 5);
            verify('HR', 1);
            verify('vi', 1);
        });

        it('should return correct result for locale containing only language code and script', () => {
            verify('kk-arab', 0);
            verify('kk_Cyrl', 1);
            verify('UZ-ARAB', 6);
            verify('Uz-latn', 1);
        });

        it('should return correct result for locale containing only script', () => {
            verify('Arab', 0);
            verify('cyrl', 1);
            verify('Hans', 0);
            verify('hant', 0);
            verify('LATN', 1);
            verify('Tfng', 6);
        });

        it('should return correct result for locale containing only language and region code', () => {
            verify('ar-sa', 0);
            verify('en_NG', 1);
            verify('FR-DZ', 6);
            verify('es_mx', 0);
            verify('BN-in', 0);
        });

        it('should return correct result for locale containing only script and region code', () => {
            verify('ARAB_IN', 0);
            verify('arab-IR', 6);
            verify('Arab_MN', 1);
            verify('Hant_MY', 1);
            verify('latn_MA', 6);
        });

        it('should return correct result for locale containing language, script and region code', () => {
            verify('az-arab-iq', 6);
            verify('az_Arab-TR', 1);
            verify('Az-Cyrl_Ru', 1);
            verify('kk_Arab_cn', 0);
            verify('KK-ARAB_AF', 6);
        });

        it('should return correct result for arbitrary locale', () => {
            verify('xyz', 1);
            verify('az_arab_IRA', 1);
            verify('HI-Fij', 1);
            verify('MS_SG_u-data', 0);
            verify('en-bd-t-true-DE', 5);
        });

        it('should return 1', () => {
            verify(false, 1);
            verify('', 1);
            verify('some-strange-locale', 1);
            verify('Summer moved on', 1);
        });
    });
});
