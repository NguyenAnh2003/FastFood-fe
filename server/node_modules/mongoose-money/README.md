# mongoose-money

[![Build Status](https://travis-ci.org/lykmapipo/mongoose-money.svg?branch=master)](https://travis-ci.org/lykmapipo/mongoose-money)

Money schema type for [mongoose](https://github.com/Automattic/mongoose) based on [MoneyJS](https://github.com/lykmapipo/MoneyJS).

## Installation
```sh
$ npm install --save async lodash mongoose-money
```

## Usage
You will have to require `mongoose-money` before define any mongoose schema to allow it to patch mongoose `Schema.Types` to add `Money` schema type.

```js
var mongoose = require('mongoose');
require('mongoose-money');
var Schema = mongoose.Schema;
var Money = require('moneyjs');

//define a schema that use money schema type
var ProductSchema = new Schema({
            price: {
                type: Schema.Types.Money,
                required: true,
                index: true
            }
        });

//register model
mongoose.model('Product',ProductSchema);

var book = new Product({
    price: new Money(12, Money.USD)
});

book.save(done);

...

```

*Note: All [MoneyJS](https://github.com/lykmapipo/MoneyJS) operations are applicable to money fields*


## Testing
* Clone this repository

* Install all development dependencies
```sh
$ npm install
```

* Then run test
```sh
$ npm test
```

## Contribute
It will be nice, if you open an issue first so that we can know what is going on, then, fork this repo and push in your ideas. Do not forget to add a bit of test(s) of what value you adding.

## References
- [Indexes on Embedded Documents](https://docs.mongodb.org/manual/core/index-single/#indexes-on-embedded-documents)

## Licence
The MIT License (MIT)

Copyright (c) 2015 lykmapipo & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 