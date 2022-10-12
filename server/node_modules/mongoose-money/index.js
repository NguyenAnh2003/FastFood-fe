'use strict';

//dependencies
var path = require('path');
var Money = require('moneyjs');
var mongoose = require('mongoose');
var SchemaType = mongoose.SchemaType;
var errorMessages = mongoose.Error.messages;

//path mongoose Query to allow money type
require(path.join(__dirname, 'lib', 'query'));


/**
 * @constructor
 * @description mongoose money SchemaType
 * @param {String} path
 * @param {Object} options
 * @inherits SchemaType
 * @api private
 */
function MongooseMoney(path, options) {
    SchemaType.call(this, path, options, 'Money');
}

/**
 * @description specifies schema type's name, to defend against
 *              minifiers that mangle function names.
 * @api private
 */
MongooseMoney.schemaName = 'Money';

/**
 * @description inherits from mongoose SchemaType schema type.
 */
MongooseMoney.prototype = Object.create(SchemaType.prototype);
MongooseMoney.prototype.constructor = Money;


/**
 * @function
 * @description implement checkRequired method
 * @param {any} value
 * @return {Boolean}
 */

MongooseMoney.prototype.checkRequired = function checkRequired(value) {
    return (value !== null) && (value instanceof Money);
};


/**
 * @function
 * @description sets a maximum money validator
 * @param {Money} value minimum money allowed
 * @param {String} [message] optional custom error message
 * @return {MongooseMoney} this
 * @see Customized Error Messages #error_messages_MongooseError-messages
 * @api public
 */
MongooseMoney.prototype.min = function (value, message) {
    // var self = this;

    if (this.minValidator) {
        this.validators = this.validators.filter(function (v) {
            return v.validator !== this.minValidator;
        }, this);
    }

    if (null !== value) {
        var msg = message || errorMessages.Number.min;
        msg = msg.replace(/{MIN}/, value);

        this.minValidator = function (v) {
            return v !== null && v.isGreaterThan(value);
        };

        this.validators.push({
            validator: this.minValidator,
            message: msg,
            type: 'min'
        });
    }

    return this;
};


/**
 * @function
 * @description sets a maximum money validator
 * @param {Money} value maximum money allowed
 * @param {String} [message] optional custom error message
 * @return {MongooseMoney} this
 * @see Customized Error Messages #error_messages_MongooseError-messages
 * @api public
 */
MongooseMoney.prototype.max = function (value, message) {
    if (this.maxValidator) {
        this.validators = this.validators.filter(function (v) {
            return v.validator !== this.maxValidator;
        }, this);
    }

    if (null !== value) {
        var msg = message || errorMessages.Number.max;
        msg = msg.replace(/{MAX}/, value);

        this.maxValidator = function (v) {
            return v !== null && v.isLessThan(value);
        };

        this.validators.push({
            validator: this.maxValidator,
            message: msg,
            type: 'max'
        });
    }

    return this;
};


/**
 * @function
 * @description casts to money
 * @param {Object} value the value to cast
 * @param {Document} doc document that triggers the casting
 * @param {Boolean} [init]
 */
MongooseMoney.prototype.cast = function (value /*,doc , init*/) {
    //TODO make use of base currency to cast value to
    //money
    // console.log(value);
    if (null === value) {
        return value;
    }

    if ('' === value) {
        return null;
    }

    if (value instanceof Money) {
        return value;
    }

    if (value && value.amount !== undefined && value.currency) {
        if (value.time && value.time instanceof Date) {
            return new Money(
                value.amount,
                Money[value.currency],
                value.time
            );
        } else if (value.time && value.time instanceof String) {
            return new Money(
                value.amount,
                Money[value.currency],
                new Date(value.time)
            );
        } else {
            return new Money(value.amount, Money[value.currency]);
        }
    }

    throw new SchemaType.CastError('MongooseMoney', value);
};


/*!
 * ignore
 */
function handleSingle(val) {
    /*jshint validthis:true*/
    return this.cast(val);
}


//query conditions that are supported for money schema types
MongooseMoney.prototype.$conditionalHandlers = {
    '$gt': handleSingle,
    '$gte': handleSingle,
    '$lt': handleSingle,
    '$lte': handleSingle,
    '$ne': handleSingle
};


/**
 * Casts contents for queries.
 *
 * @param {String} $conditional
 * @param {any} [value] value to be casted for query
 * @api private
 */
MongooseMoney.prototype.castForQuery = function ($conditional, val) {
    if (arguments.length === 2) {
        var handler = this.$conditionalHandlers[$conditional];

        if (!handler) {
            throw new Error('Can\'t use ' + $conditional + ' with Money.');
        }

        return handler.call(this, val).valueOf();

    } else {
        return this.cast($conditional).valueOf();
    }

};


//------------------------------------------------------------------------------
// Attach Types
//------------------------------------------------------------------------------

//extend mongoose schema types with money type
if (!mongoose.Schema.Types.Money) {
    mongoose.Schema.Types.Money = MongooseMoney;
}

//extend mongoose schema types with money type
if (!mongoose.Types.Money) {
    mongoose.Types.Money = MongooseMoney;
}


//------------------------------------------------------------------------------
// Plugins
//------------------------------------------------------------------------------

//auto index Money fields
mongoose.plugin(function (schema) {
    //iterate over schema paths
    schema.eachPath(function (pathName, schemaType) {
        //add index to money fields
        if (schemaType.instance === 'Money') {
            schemaType.options.index = true;
        }
    });
});
