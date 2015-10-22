/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.12.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as moment from 'moment';
import * as models from '../models';


/**
 * @class
 * ArrayModel
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestSwaggerBATArrayService.
 */
export interface ArrayModel {

    /**
     * Get null array value
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getNull(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getNull(callback: ServiceCallback<number[]>): void;

    /**
     * Get invalid array [1, 2, 3
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getInvalid(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getInvalid(callback: ServiceCallback<number[]>): void;

    /**
     * Get empty array value []
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getEmpty(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getEmpty(callback: ServiceCallback<number[]>): void;

    /**
     * Set array value empty []
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putEmpty(arrayBody: string[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putEmpty(arrayBody: string[], callback: ServiceCallback<void>): void;

    /**
     * Get boolean array value [true, false, false, true]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBooleanTfft(options: RequestOptions, callback: ServiceCallback<boolean[]>): void;
    getBooleanTfft(callback: ServiceCallback<boolean[]>): void;

    /**
     * Set array value empty [true, false, false, true]
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBooleanTfft(arrayBody: boolean[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putBooleanTfft(arrayBody: boolean[], callback: ServiceCallback<void>): void;

    /**
     * Get boolean array value [true, null, false]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBooleanInvalidNull(options: RequestOptions, callback: ServiceCallback<boolean[]>): void;
    getBooleanInvalidNull(callback: ServiceCallback<boolean[]>): void;

    /**
     * Get boolean array value [true, 'boolean', false]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBooleanInvalidString(options: RequestOptions, callback: ServiceCallback<boolean[]>): void;
    getBooleanInvalidString(callback: ServiceCallback<boolean[]>): void;

    /**
     * Get integer array value [1, -1, 3, 300]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getIntegerValid(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getIntegerValid(callback: ServiceCallback<number[]>): void;

    /**
     * Set array value empty [1, -1, 3, 300]
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putIntegerValid(arrayBody: number[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putIntegerValid(arrayBody: number[], callback: ServiceCallback<void>): void;

    /**
     * Get integer array value [1, null, 0]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getIntInvalidNull(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getIntInvalidNull(callback: ServiceCallback<number[]>): void;

    /**
     * Get integer array value [1, 'integer', 0]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getIntInvalidString(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getIntInvalidString(callback: ServiceCallback<number[]>): void;

    /**
     * Get integer array value [1, -1, 3, 300]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLongValid(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getLongValid(callback: ServiceCallback<number[]>): void;

    /**
     * Set array value empty [1, -1, 3, 300]
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putLongValid(arrayBody: number[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putLongValid(arrayBody: number[], callback: ServiceCallback<void>): void;

    /**
     * Get long array value [1, null, 0]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLongInvalidNull(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getLongInvalidNull(callback: ServiceCallback<number[]>): void;

    /**
     * Get long array value [1, 'integer', 0]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLongInvalidString(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getLongInvalidString(callback: ServiceCallback<number[]>): void;

    /**
     * Get float array value [0, -0.01, 1.2e20]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFloatValid(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getFloatValid(callback: ServiceCallback<number[]>): void;

    /**
     * Set array value [0, -0.01, 1.2e20]
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putFloatValid(arrayBody: number[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putFloatValid(arrayBody: number[], callback: ServiceCallback<void>): void;

    /**
     * Get float array value [0.0, null, -1.2e20]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFloatInvalidNull(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getFloatInvalidNull(callback: ServiceCallback<number[]>): void;

    /**
     * Get boolean array value [1.0, 'number', 0.0]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFloatInvalidString(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getFloatInvalidString(callback: ServiceCallback<number[]>): void;

    /**
     * Get float array value [0, -0.01, 1.2e20]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDoubleValid(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getDoubleValid(callback: ServiceCallback<number[]>): void;

    /**
     * Set array value [0, -0.01, 1.2e20]
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putDoubleValid(arrayBody: number[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putDoubleValid(arrayBody: number[], callback: ServiceCallback<void>): void;

    /**
     * Get float array value [0.0, null, -1.2e20]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDoubleInvalidNull(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getDoubleInvalidNull(callback: ServiceCallback<number[]>): void;

    /**
     * Get boolean array value [1.0, 'number', 0.0]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDoubleInvalidString(options: RequestOptions, callback: ServiceCallback<number[]>): void;
    getDoubleInvalidString(callback: ServiceCallback<number[]>): void;

    /**
     * Get string array value ['foo1', 'foo2', 'foo3']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getStringValid(options: RequestOptions, callback: ServiceCallback<string[]>): void;
    getStringValid(callback: ServiceCallback<string[]>): void;

    /**
     * Set array value ['foo1', 'foo2', 'foo3']
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putStringValid(arrayBody: string[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putStringValid(arrayBody: string[], callback: ServiceCallback<void>): void;

    /**
     * Get string array value ['foo', null, 'foo2']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getStringWithNull(options: RequestOptions, callback: ServiceCallback<string[]>): void;
    getStringWithNull(callback: ServiceCallback<string[]>): void;

    /**
     * Get string array value ['foo', 123, 'foo2']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getStringWithInvalid(options: RequestOptions, callback: ServiceCallback<string[]>): void;
    getStringWithInvalid(callback: ServiceCallback<string[]>): void;

    /**
     * Get integer array value ['2000-12-01', '1980-01-02', '1492-10-12']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDateValid(options: RequestOptions, callback: ServiceCallback<Date[]>): void;
    getDateValid(callback: ServiceCallback<Date[]>): void;

    /**
     * Set array value  ['2000-12-01', '1980-01-02', '1492-10-12']
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putDateValid(arrayBody: Date[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putDateValid(arrayBody: Date[], callback: ServiceCallback<void>): void;

    /**
     * Get date array value ['2012-01-01', null, '1776-07-04']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDateInvalidNull(options: RequestOptions, callback: ServiceCallback<Date[]>): void;
    getDateInvalidNull(callback: ServiceCallback<Date[]>): void;

    /**
     * Get date array value ['2011-03-22', 'date']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDateInvalidChars(options: RequestOptions, callback: ServiceCallback<Date[]>): void;
    getDateInvalidChars(callback: ServiceCallback<Date[]>): void;

    /**
     * Get date-time array value ['2000-12-01t00:00:01z',
     * '1980-01-02T00:11:35+01:00', '1492-10-12T10:15:01-08:00']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDateTimeValid(options: RequestOptions, callback: ServiceCallback<Date[]>): void;
    getDateTimeValid(callback: ServiceCallback<Date[]>): void;

    /**
     * Set array value  ['2000-12-01t00:00:01z', '1980-01-02T00:11:35+01:00',
     * '1492-10-12T10:15:01-08:00']
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putDateTimeValid(arrayBody: Date[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putDateTimeValid(arrayBody: Date[], callback: ServiceCallback<void>): void;

    /**
     * Get date array value ['2000-12-01t00:00:01z', null]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDateTimeInvalidNull(options: RequestOptions, callback: ServiceCallback<Date[]>): void;
    getDateTimeInvalidNull(callback: ServiceCallback<Date[]>): void;

    /**
     * Get date array value ['2000-12-01t00:00:01z', 'date-time']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDateTimeInvalidChars(options: RequestOptions, callback: ServiceCallback<Date[]>): void;
    getDateTimeInvalidChars(callback: ServiceCallback<Date[]>): void;

    /**
     * Get date-time array value ['Fri, 01 Dec 2000 00:00:01 GMT', 'Wed, 02 Jan
     * 1980 00:11:35 GMT', 'Wed, 12 Oct 1492 10:15:01 GMT']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDateTimeRfc1123Valid(options: RequestOptions, callback: ServiceCallback<Date[]>): void;
    getDateTimeRfc1123Valid(callback: ServiceCallback<Date[]>): void;

    /**
     * Set array value  ['Fri, 01 Dec 2000 00:00:01 GMT', 'Wed, 02 Jan 1980
     * 00:11:35 GMT', 'Wed, 12 Oct 1492 10:15:01 GMT']
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putDateTimeRfc1123Valid(arrayBody: Date[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putDateTimeRfc1123Valid(arrayBody: Date[], callback: ServiceCallback<void>): void;

    /**
     * Get duration array value ['P123DT22H14M12.011S', 'P5DT1H0M0S']
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDurationValid(options: RequestOptions, callback: ServiceCallback<moment.Duration[]>): void;
    getDurationValid(callback: ServiceCallback<moment.Duration[]>): void;

    /**
     * Set array value  ['P123DT22H14M12.011S', 'P5DT1H0M0S']
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putDurationValid(arrayBody: moment.Duration[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putDurationValid(arrayBody: moment.Duration[], callback: ServiceCallback<void>): void;

    /**
     * Get byte array value [hex(FF FF FF FA), hex(01 02 03), hex (25, 29, 43)]
     * with each item encoded in base64
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getByteValid(options: RequestOptions, callback: ServiceCallback<Buffer[]>): void;
    getByteValid(callback: ServiceCallback<Buffer[]>): void;

    /**
     * Put the array value [hex(FF FF FF FA), hex(01 02 03), hex (25, 29, 43)]
     * with each elementencoded in base 64
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putByteValid(arrayBody: Buffer[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putByteValid(arrayBody: Buffer[], callback: ServiceCallback<void>): void;

    /**
     * Get byte array value [hex(AB, AC, AD), null] with the first item base64
     * encoded
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getByteInvalidNull(options: RequestOptions, callback: ServiceCallback<Buffer[]>): void;
    getByteInvalidNull(callback: ServiceCallback<Buffer[]>): void;

    /**
     * Get array of complex type null value
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getComplexNull(options: RequestOptions, callback: ServiceCallback<models.Product[]>): void;
    getComplexNull(callback: ServiceCallback<models.Product[]>): void;

    /**
     * Get empty array of complex type []
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getComplexEmpty(options: RequestOptions, callback: ServiceCallback<models.Product[]>): void;
    getComplexEmpty(callback: ServiceCallback<models.Product[]>): void;

    /**
     * Get array of complex type with null item [{'integer': 1 'string': '2'},
     * null, {'integer': 5, 'string': '6'}]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getComplexItemNull(options: RequestOptions, callback: ServiceCallback<models.Product[]>): void;
    getComplexItemNull(callback: ServiceCallback<models.Product[]>): void;

    /**
     * Get array of complex type with empty item [{'integer': 1 'string': '2'},
     * {}, {'integer': 5, 'string': '6'}]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getComplexItemEmpty(options: RequestOptions, callback: ServiceCallback<models.Product[]>): void;
    getComplexItemEmpty(callback: ServiceCallback<models.Product[]>): void;

    /**
     * Get array of complex type with [{'integer': 1 'string': '2'}, {'integer':
     * 3, 'string': '4'}, {'integer': 5, 'string': '6'}]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getComplexValid(options: RequestOptions, callback: ServiceCallback<models.Product[]>): void;
    getComplexValid(callback: ServiceCallback<models.Product[]>): void;

    /**
     * Put an array of complex type with values [{'integer': 1 'string': '2'},
     * {'integer': 3, 'string': '4'}, {'integer': 5, 'string': '6'}]
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putComplexValid(arrayBody: models.Product[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putComplexValid(arrayBody: models.Product[], callback: ServiceCallback<void>): void;

    /**
     * Get a null array
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getArrayNull(options: RequestOptions, callback: ServiceCallback<string[][]>): void;
    getArrayNull(callback: ServiceCallback<string[][]>): void;

    /**
     * Get an empty array []
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getArrayEmpty(options: RequestOptions, callback: ServiceCallback<string[][]>): void;
    getArrayEmpty(callback: ServiceCallback<string[][]>): void;

    /**
     * Get an array of array of strings [['1', '2', '3'], null, ['7', '8', '9']]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getArrayItemNull(options: RequestOptions, callback: ServiceCallback<string[][]>): void;
    getArrayItemNull(callback: ServiceCallback<string[][]>): void;

    /**
     * Get an array of array of strings [['1', '2', '3'], [], ['7', '8', '9']]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getArrayItemEmpty(options: RequestOptions, callback: ServiceCallback<string[][]>): void;
    getArrayItemEmpty(callback: ServiceCallback<string[][]>): void;

    /**
     * Get an array of array of strings [['1', '2', '3'], ['4', '5', '6'], ['7',
     * '8', '9']]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getArrayValid(options: RequestOptions, callback: ServiceCallback<string[][]>): void;
    getArrayValid(callback: ServiceCallback<string[][]>): void;

    /**
     * Put An array of array of strings [['1', '2', '3'], ['4', '5', '6'], ['7',
     * '8', '9']]
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putArrayValid(arrayBody: string[][], options: RequestOptions, callback: ServiceCallback<void>): void;
    putArrayValid(arrayBody: string[][], callback: ServiceCallback<void>): void;

    /**
     * Get an array of Dictionaries with value null
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDictionaryNull(options: RequestOptions, callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;
    getDictionaryNull(callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;

    /**
     * Get an array of Dictionaries of type <string, string> with value []
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDictionaryEmpty(options: RequestOptions, callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;
    getDictionaryEmpty(callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;

    /**
     * Get an array of Dictionaries of type <string, string> with value [{'1':
     * 'one', '2': 'two', '3': 'three'}, null, {'7': 'seven', '8': 'eight', '9':
     * 'nine'}]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDictionaryItemNull(options: RequestOptions, callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;
    getDictionaryItemNull(callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;

    /**
     * Get an array of Dictionaries of type <string, string> with value [{'1':
     * 'one', '2': 'two', '3': 'three'}, {}, {'7': 'seven', '8': 'eight', '9':
     * 'nine'}]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDictionaryItemEmpty(options: RequestOptions, callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;
    getDictionaryItemEmpty(callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;

    /**
     * Get an array of Dictionaries of type <string, string> with value [{'1':
     * 'one', '2': 'two', '3': 'three'}, {'4': 'four', '5': 'five', '6': 'six'},
     * {'7': 'seven', '8': 'eight', '9': 'nine'}]
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDictionaryValid(options: RequestOptions, callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;
    getDictionaryValid(callback: ServiceCallback<{ [propertyName: string]: string }[]>): void;

    /**
     * Get an array of Dictionaries of type <string, string> with value [{'1':
     * 'one', '2': 'two', '3': 'three'}, {'4': 'four', '5': 'five', '6': 'six'},
     * {'7': 'seven', '8': 'eight', '9': 'nine'}]
     *
     * @param {array} arrayBody
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putDictionaryValid(arrayBody: { [propertyName: string]: string }[], options: RequestOptions, callback: ServiceCallback<void>): void;
    putDictionaryValid(arrayBody: { [propertyName: string]: string }[], callback: ServiceCallback<void>): void;
}
