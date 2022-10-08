'use strict';

//dependencies
var Money = require('moneyjs');
var mongoose = require('mongoose');
var Query = mongoose.Query;

//mongoose Query queries to patch
var where = Query.prototype.where;
var equals = Query.prototype.equals;
var gt = Query.prototype.gt;
var gte = Query.prototype.gte;
var lt = Query.prototype.lt;
var lte = Query.prototype.lte;
var ne = Query.prototype.ne;


function amountPath() {
    /*jshint validthis:true*/
    return this._path + '.amount';
}

function currencyPath() {
    /*jshint validthis:true*/
    return this._path + '.currency';
}

function isMoney(val) {
    /*jshint validthis:true*/
    var typeOfPath = this.schema.paths[this._path];
    return (typeOfPath === 'Money') && (val instanceof Money);
}


//patch equals mongoose query to use Money instance
Query.prototype.equals =
    Query.prototype.eq = function(val) {
        if (isMoney.call(this, val)) {
            var valueOf = val.valueOf();

            return where
                .call(this, amountPath.call(this))
                .equals(valueOf.amount)
                .where(currencyPath.call(this))
                .equals(valueOf.currency);

        } else {
            return equals.call(this, val);
        }
    };


//patch gt mongoose query to use Money instance
Query.prototype.gt = function(val) {
    if (isMoney.call(this, val)) {
        var valueOf = val.valueOf();

        return where
            .call(this, amountPath.call(this))
            .gt(valueOf.amount)
            .where(currencyPath.call(this))
            .equals(valueOf.currency);

    } else {
        return gt.call(this, val);
    }
};


//patch gte mongoose query to use Money instance
Query.prototype.gte = function(val) {
    if (isMoney.call(this, val)) {
        var valueOf = val.valueOf();

        return where
            .call(this, amountPath.call(this))
            .gte(valueOf.amount)
            .where(currencyPath.call(this))
            .equals(valueOf.currency);

    } else {
        return gte.call(this, val);
    }
};


//patch lt mongoose query to use Money instance
Query.prototype.lt = function(val) {
    if (isMoney.call(this, val)) {
        var valueOf = val.valueOf();

        return where
            .call(this, amountPath.call(this))
            .lt(valueOf.amount)
            .where(currencyPath.call(this))
            .equals(valueOf.currency);

    } else {
        return lt.call(this, val);
    }
};


//patch lte mongoose query to use Money instance
Query.prototype.lte = function(val) {
    if (isMoney.call(this, val)) {
        var valueOf = val.valueOf();

        return where
            .call(this, amountPath.call(this))
            .lte(valueOf.amount)
            .where(currencyPath.call(this))
            .equals(valueOf.currency);

    } else {
        return lte.call(this, val);
    }
};


//patch ne mongoose query to use Money instance
Query.prototype.ne = function(val) {
    if (isMoney.call(this, val)) {
        var valueOf = val.valueOf();

        return where
            .call(this, amountPath.call(this))
            .ne(valueOf.amount)
            .where(currencyPath.call(this))
            .equals(valueOf.currency);

    } else {
        return ne.call(this, val);
    }
};