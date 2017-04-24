(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("immutable"), require("@ngrx/store"), require("@ngrx/effects"), require("@angular/core"), require("@ngrx/core/add/operator/select"), require("@angular/http"), require("rxjs/add/operator/map"), require("rxjs/add/operator/let"), require("rxjs/add/operator/distinctUntilChanged"), require("rxjs/add/operator/catch"), require("rxjs/add/observable/of"), require("rxjs/Observable"), require("rxjs/add/operator/switchMap"));
	else if(typeof define === 'function' && define.amd)
		define("angular2-instagram-core", ["immutable", "@ngrx/store", "@ngrx/effects", "@angular/core", "@ngrx/core/add/operator/select", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/let", "rxjs/add/operator/distinctUntilChanged", "rxjs/add/operator/catch", "rxjs/add/observable/of", "rxjs/Observable", "rxjs/add/operator/switchMap"], factory);
	else if(typeof exports === 'object')
		exports["angular2-instagram-core"] = factory(require("immutable"), require("@ngrx/store"), require("@ngrx/effects"), require("@angular/core"), require("@ngrx/core/add/operator/select"), require("@angular/http"), require("rxjs/add/operator/map"), require("rxjs/add/operator/let"), require("rxjs/add/operator/distinctUntilChanged"), require("rxjs/add/operator/catch"), require("rxjs/add/observable/of"), require("rxjs/Observable"), require("rxjs/add/operator/switchMap"));
	else
		root["angular2-instagram-core"] = factory(root["immutable"], root["@ngrx/store"], root["@ngrx/effects"], root["@angular/core"], root["@ngrx/core/add/operator/select"], root["@angular/http"], root["rxjs/add/operator/map"], root["rxjs/add/operator/let"], root["rxjs/add/operator/distinctUntilChanged"], root["rxjs/add/operator/catch"], root["rxjs/add/observable/of"], root["rxjs/Observable"], root["rxjs/add/operator/switchMap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/rxjs/Observable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var toSubscriber_1 = __webpack_require__("./node_modules/rxjs/util/toSubscriber.js");
var observable_1 = __webpack_require__("./node_modules/rxjs/symbol/observable.js");
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/Observer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/Subscriber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
var Observer_1 = __webpack_require__("./node_modules/rxjs/Observer.js");
var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/Subscription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__("./node_modules/rxjs/util/isArray.js");
var isObject_1 = __webpack_require__("./node_modules/rxjs/util/isObject.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
var tryCatch_1 = __webpack_require__("./node_modules/rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
var UnsubscriptionError_1 = __webpack_require__("./node_modules/rxjs/util/UnsubscriptionError.js");
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/observable/throw.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var throw_1 = __webpack_require__("./node_modules/rxjs/observable/throw.js");
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/do.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var do_1 = __webpack_require__("./node_modules/rxjs/operator/do.js");
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/ErrorObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = (function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(Observable_1.Observable));
exports.ErrorObservable = ErrorObservable;
//# sourceMappingURL=ErrorObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/observable/throw.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ErrorObservable_1 = __webpack_require__("./node_modules/rxjs/observable/ErrorObservable.js");
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "./node_modules/rxjs/operator/do.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
exports._do = _do;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/rxjs/symbol/observable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/symbol/rxSubscriber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/UnsubscriptionError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/errorObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/isArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/isFunction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/isObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/root.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * window: browser in DOM main thread
 * self: browser in WebWorker
 * global: Node.js/other
 */
exports.root = (typeof window == 'object' && window.window === window && window
    || typeof self == 'object' && self.self === self && self
    || typeof global == 'object' && global.global === global && global);
if (!exports.root) {
    throw new Error('RxJS could not find any global context (window, self, global)');
}
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/rxjs/util/toSubscriber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__("./node_modules/rxjs/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/util/tryCatch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/actions/filters-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltersActions = FiltersActions_1 = (function () {
    function FiltersActions() {
    }
    FiltersActions.prototype.changeContrast = function (value, type) {
        if (type === void 0) { type = 'contrast'; }
        return {
            type: FiltersActions_1.CHANGE_CONTRAST,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBrightness = function (value, type) {
        if (type === void 0) { type = 'brightness'; }
        return {
            type: FiltersActions_1.CHANGE_BRIGHTNESS,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeSaturate = function (value, type) {
        if (type === void 0) { type = 'saturate'; }
        return {
            type: FiltersActions_1.CHANGE_SATURATE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeSepia = function (value, type) {
        if (type === void 0) { type = 'sepia'; }
        return {
            type: FiltersActions_1.CHANGE_SEPIA,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeGrayScale = function (value, type) {
        if (type === void 0) { type = 'grayScale'; }
        return {
            type: FiltersActions_1.CHANGE_GRAYSCALE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeInvert = function (value, type) {
        if (type === void 0) { type = 'invert'; }
        return {
            type: FiltersActions_1.CHANGE_INVERT,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeHueRotate = function (value, type) {
        if (type === void 0) { type = 'hueRotate'; }
        return {
            type: FiltersActions_1.CHANGE_HUEROTATE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBlur = function (value, type) {
        if (type === void 0) { type = 'blur'; }
        return {
            type: FiltersActions_1.CHANGE_BLUR,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeBlend = function (value, type) {
        if (type === void 0) { type = 'blend'; }
        return {
            type: FiltersActions_1.CHANGE_BLEND,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.changeLoading = function (value, type) {
        if (type === void 0) { type = 'loading'; }
        return {
            type: FiltersActions_1.LOADING,
            payload: {
                value: value
            }
        };
    };
    FiltersActions.prototype.changePreset = function (_a) {
        var figureStyle = _a.figureStyle, overlayStyle = _a.overlayStyle, key = _a.key;
        return {
            type: FiltersActions_1.CHANGE_PRESET,
            payload: {
                figureStyle: figureStyle,
                overlayStyle: overlayStyle,
                key: key
            }
        };
    };
    FiltersActions.prototype.loadImages = function () {
        return {
            type: FiltersActions_1.LOAD_IMAGES,
            payload: {
                api: FiltersActions_1.API
            }
        };
    };
    FiltersActions.prototype.fetchImagesFailed = function (error) {
        return {
            type: FiltersActions_1.FETCH_IMAGES_FAILED,
            payload: {
                error: error
            }
        };
    };
    FiltersActions.prototype.fetchImagesFulfilled = function (data) {
        return {
            type: FiltersActions_1.FETCH_IMAGES_FULFILLED,
            payload: {
                data: Object.assign([], data)
            }
        };
    };
    FiltersActions.prototype.changeSelectImage = function (value, type) {
        if (type === void 0) { type = 'selectedImage'; }
        return {
            type: FiltersActions_1.CHANGE_SELECTED_IMAGE,
            payload: {
                value: value,
                type: type
            }
        };
    };
    FiltersActions.prototype.resetToDefaults = function () {
        return {
            type: FiltersActions_1.RESET_DEFAULTS
        };
    };
    return FiltersActions;
}());
FiltersActions.CHANGE_CONTRAST = 'CHANGE_CONTRAST';
FiltersActions.CHANGE_BRIGHTNESS = 'CHANGE_BRIGHTNESS';
FiltersActions.CHANGE_SATURATE = 'CHANGE_SATURATE';
FiltersActions.CHANGE_SEPIA = 'CHANGE_SEPIA';
FiltersActions.CHANGE_GRAYSCALE = 'CHANGE_GRAYSCALE';
FiltersActions.CHANGE_INVERT = 'CHANGE_INVERT';
FiltersActions.CHANGE_HUEROTATE = 'CHANGE_HUEROTATE';
FiltersActions.CHANGE_BLUR = 'CHANGE_BLUR';
FiltersActions.CHANGE_BLEND = 'CHANGE_BLEND';
FiltersActions.CHANGE_PRESET = 'CHANGE_PRESET';
FiltersActions.LOAD_IMAGES = 'LOAD_IMAGES';
FiltersActions.FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED';
FiltersActions.FETCH_IMAGES_FULFILLED = 'FETCH_IMAGES_FULFILLED';
FiltersActions.CHANGE_SELECTED_IMAGE = 'CHANGE_SELECTED_IMAGE';
FiltersActions.RESET_DEFAULTS = 'RESET_DEFAULTS';
FiltersActions.LOADING = 'LOADING';
FiltersActions.API = 'https://api.unsplash.com/photos/?per_page=50&client_id=86f6167ee81be7b8aea6aa0d999c1bae79b3351b43e8df03c8baaa9c630f24ba';
FiltersActions = FiltersActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FiltersActions);

var FiltersActions_1;


/***/ }),

/***/ "./src/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters_actions__ = __webpack_require__("./src/actions/filters-actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_actions__["a"]; });



/***/ }),

/***/ "./src/angular2-instagram-core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./src/actions/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__effects__ = __webpack_require__("./src/effects/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("./src/reducers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2InstagramCoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Angular2InstagramCoreModule = (function () {
    function Angular2InstagramCoreModule() {
    }
    return Angular2InstagramCoreModule;
}());
Angular2InstagramCoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* FiltersActions */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* FiltersService */]
        ]
    })
], Angular2InstagramCoreModule);



/***/ }),

/***/ "./src/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return presets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return overlayOptions; });

var presets = {
    '1977': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            contrast: '110',
            brightness: '110',
            saturate: '130',
            opacity: '100',
            blend: 'screen'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'solid',
            color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.3, b: 188, g: 106, r: 243 })
        })
    },
    'aden': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            hueRotate: '20',
            contrast: '90',
            saturate: '85',
            brightness: '120',
            opacity: '100',
            blend: 'darken'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'linear',
            direction: 'to right',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.2, b: 14, g: 10, r: 66 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 14, g: 10, r: 66 }),
                stop: 100
            })
        })
    },
    'brooklyn': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            contrast: '90',
            brightness: '110',
            opacity: '100',
            blend: 'overlay'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            position: 'center center',
            size: 'closest-corner',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.4, b: 193, g: 223, r: 168 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.2, b: 200, g: 196, r: 183 }),
                stop: 100
            })
        })
    },
    'gingham': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            brightness: '105',
            hueRotate: '350',
            blend: 'darken',
            opacity: '100'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'linear',
            direction: 'to right',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.2, b: 14, g: 10, r: 66 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 0, g: 0, r: 0 }),
                stop: 100
            })
        })
    },
    'earlybird': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            contrast: '90',
            sepia: '20',
            blend: 'overlay',
            opacity: '100'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 142, g: 186, r: 208 }),
                stop: 20
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.2, b: 16, g: 2, r: 29 }),
                stop: 100
            })
        })
    },
    'hudson': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            brightness: '120',
            contrast: '90',
            saturate: '110',
            blend: 'multiply',
            opacity: '50'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 166, g: 177, r: 255 }),
                stop: 50
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 52, g: 33, r: 52 }),
                stop: 100
            })
        })
    },
    'inkwell': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            sepia: '30',
            contrast: '110',
            brightness: '110',
            grayscale: '100',
            opacity: '100'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'solid',
            color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 0, g: 0, r: 0 })
        })
    },
    'lofi': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            saturate: '110',
            contrast: '150',
            opacity: '100',
            blend: 'multiply'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 0, g: 0, r: 0 }),
                stop: 70
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 34, g: 34, r: 34 }),
                stop: 100
            })
        })
    },
    'perpetua': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            opacity: '50',
            blend: 'soft-light'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'linear',
            direction: 'to bottom',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 154, g: 91, r: 0 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0, b: 230, g: 193, r: 61 }),
                stop: 100
            })
        })
    },
    'toaster': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            contrast: '150',
            brightness: '90',
            opacity: '50',
            blend: 'screen'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 128, g: 78, r: 15 }),
                stop: 1
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 59, g: 0, r: 59 }),
                stop: 100
            })
        })
    },
    'xpro2': {
        filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            sepia: '30',
            opacity: '100',
            blend: 'color-burn'
        }),
        overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
            type: 'radial',
            color1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 1, b: 230, g: 231, r: 224 }),
                stop: 40
            }),
            color2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({ a: 0.6, b: 161, g: 42, r: 43 }),
                stop: 100
            })
        })
    }
};
var overlayOptions = [
    { val: 'none', label: 'None' },
    { val: 'solid_background', label: 'Solid Background' },
    { val: 'linear_gradient', label: 'Linear Gradient' },
    { val: 'radial_gradient', label: 'Radial Gradient' }
];


/***/ }),

/***/ "./src/effects/filters-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__ = __webpack_require__("./src/actions/filters-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_filters_service__ = __webpack_require__("./src/services/filters-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FiltersEffects = (function () {
    function FiltersEffects(actions$, filtersService, filtersActions) {
        var _this = this;
        this.actions$ = actions$;
        this.filtersService = filtersService;
        this.filtersActions = filtersActions;
        this.fetchImages$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__["a" /* FiltersActions */].LOAD_IMAGES)
            .switchMap(function (_a) {
            var payload = _a.payload;
            return _this.filtersService.fetchImages(payload.api)
                .map(function (data) { return _this.filtersActions.fetchImagesFulfilled(data); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(_this.filtersActions.fetchImagesFailed(error)); });
        });
    }
    return FiltersEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["Effect"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
], FiltersEffects.prototype, "fetchImages$", void 0);
FiltersEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["Actions"],
        __WEBPACK_IMPORTED_MODULE_8__services_filters_service__["a" /* FiltersService */],
        __WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__["a" /* FiltersActions */]])
], FiltersEffects);



/***/ }),

/***/ "./src/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters_effects__ = __webpack_require__("./src/effects/filters-effects.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_effects__["a"]; });



/***/ }),

/***/ "./src/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (immutable) */ __webpack_exports__["a"] = getFilterStyles;
/* harmony export (immutable) */ __webpack_exports__["b"] = updateFilterStyle;
/* harmony export (immutable) */ __webpack_exports__["c"] = getOverlayColor;
/* harmony export (immutable) */ __webpack_exports__["d"] = updateOverlayStyle;

function getFilterStyles(state) {
    var filters = '';
    filters += "contrast(" + state.get('contrast') + "%) ";
    filters += "brightness(" + state.get('brightness') + "%) ";
    filters += "saturate(" + state.get('saturate') + "%) ";
    filters += "sepia(" + state.get('sepia') + "%) ";
    filters += "grayscale(" + state.get('grayScale') + "%) ";
    filters += "invert(" + state.get('invert') + "%) ";
    filters += "hue-rotate(" + state.get('hueRotate') + "deg) ";
    filters += "blur(" + state.get('blur') + "px) ";
    return filters;
}
function updateFilterStyle(state) {
    var styles = {
        WebkitFilter: getFilterStyles(state),
        filter: getFilterStyles(state),
        position: 'relative'
    };
    return {
        styles: styles
    };
}
function getOverlayColor(overlayType) {
    var solidBackground = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        a: 0.5,
        b: 253,
        g: 162,
        r: 62
    });
    var linearBackground = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        a: 0.5,
        b: 253,
        g: 162,
        r: 62,
        stop: 10,
        direction: 'to bottom'
    });
    var radialBackground = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        a: 0.04,
        b: 70,
        g: 70,
        r: 70,
        stop: 100,
        position: 'center center',
        size: 'closest-corner'
    });
    var stop1 = linearBackground.get('stop');
    var stop2 = radialBackground.get('stop');
    var color1 = "rgba(" + linearBackground.get('r') + ", " + linearBackground.get('g') + ", " + linearBackground.get('b') + ", " + linearBackground.get('a') + ")";
    var color2 = "rgba(" + radialBackground.get('r') + ", " + radialBackground.get('g') + ", " + radialBackground.get('b') + ", " + radialBackground.get('a') + ")";
    switch (overlayType) {
        case 'solid_background':
            return "rgba(" + solidBackground.get('r') + ", " + solidBackground.get('g') + ", " + solidBackground.get('b') + ", " + solidBackground.get('a') + ")";
        case 'linear_gradient':
            var direction = linearBackground.get('direction');
            return "linear-gradient(" + direction + ", " + color1 + " " + stop1 + "%, " + color2 + " " + stop2 + "%)";
        case 'radial_gradient':
            var position = radialBackground.get('position');
            var size = radialBackground.get('size');
            return "-webkit-radial-gradient(" + position + ", circle " + size + ", " + color1 + " " + stop1 + "%, " + color2 + " " + stop2 + "%)";
        case 'none':
            return null;
    }
}
function updateOverlayStyle(state) {
    var opacity = state.get('opacity');
    var overlayBackground = state.get('blend');
    var background = getOverlayColor(overlayBackground);
    var overlay = {
        content: ' ',
        display: 'block',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        position: 'absolute',
        mixBlendMode: 'normal',
        opacity: (opacity / 100),
        background: background
    };
    return {
        overlay: overlay
    };
}


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__ = __webpack_require__("./src/angular2-instagram-core.module.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angular2InstagramCoreModule", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FiltersActions", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FiltersEffects", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DEFAULTS", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filtersReducer", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFiltersState", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFilterStyleValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getOverlayStyleValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getContrastFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getBrightnessFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getSaturateFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getSepiaFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getGrayScaleFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInvertFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getHueRotateFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getBlurFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getBlendFilterValue", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getSelectedImage", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getImages", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_instagram_core_module__["w"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./src/actions/index.ts");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__effects__ = __webpack_require__("./src/effects/index.ts");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./src/reducers/index.ts");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("./src/services/index.ts");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__("./src/helpers.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFilterStyles", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "updateFilterStyle", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getOverlayColor", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "updateOverlayStyle", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/constants.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "presets", function() { return __WEBPACK_IMPORTED_MODULE_6__constants__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "overlayOptions", function() { return __WEBPACK_IMPORTED_MODULE_6__constants__["b"]; });









/***/ }),

/***/ "./src/reducers/filters-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__ = __webpack_require__("./src/actions/filters-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialState; });
/* harmony export (immutable) */ __webpack_exports__["c"] = filtersReducer;




var defaultImage = 'https://source.unsplash.com/W_9mOGUwR08/800x600';
var DEFAULTS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    grayScale: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    blend: 'none',
    opacity: 50
});
var initialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    grayScale: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    blend: 'none',
    opacity: 50,
    styles: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        position: 'relative',
        WebkitFilter: null,
        filter: null
    }),
    overlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
        content: ' ',
        display: 'block',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        position: 'absolute',
        mixBlendMode: 'normal',
        opacity: 0.5,
        background: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["c" /* getOverlayColor */])('none')
    }),
    selectedImage: defaultImage,
    images: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])(),
    error: null,
    loading: false
});
function filtersReducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_CONTRAST:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_BRIGHTNESS:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_SATURATE:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_SEPIA:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_GRAYSCALE:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_INVERT:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_HUEROTATE:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_BLUR:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_BLEND:
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_SELECTED_IMAGE:
            return state.withMutations(function (filtersState) {
                var value = payload.value, type = payload.type;
                filtersState
                    .merge((_a = {}, _a["" + type] = value, _a))
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* updateFilterStyle */])(filtersState))
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* updateOverlayStyle */])(filtersState));
                var _a;
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].LOADING:
            return state.withMutations(function (filtersState) {
                var value = payload.value;
                filtersState
                    .merge({ loading: value });
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].CHANGE_PRESET:
            return state.withMutations(function (filtersState) {
                var figureStyle = payload.figureStyle, overlayStyle = payload.overlayStyle, key = payload.key;
                var preset = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* presets */][key];
                var filter = preset.filter, overlay = preset.overlay;
                filtersState
                    .merge({ 'contrast': filter.get('contrast') || 100 })
                    .merge({ 'brightness': filter.get('brightness') || 100 })
                    .merge({ 'saturate': filter.get('saturate') || 100 })
                    .merge({ 'sepia': filter.get('saturate') || 0 })
                    .merge({ 'grayScale': filter.get('grayscale') || 0 })
                    .merge({ 'invert': filter.get('invert') || 0 })
                    .merge({ 'hueRotate': filter.get('hueRotate') || 0 })
                    .merge({ 'blur': filter.get('blur') || 0 })
                    .merge({ 'blend': filter.get('blend') || 'none' })
                    .merge({ 'opacity': filter.get('opacity') || 50 })
                    .set('styles', figureStyle)
                    .set('overlay', overlayStyle);
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].FETCH_IMAGES_FULFILLED:
            return state.withMutations(function (filtersState) {
                var data = payload.data;
                filtersState.merge({
                    images: data
                });
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].FETCH_IMAGES_FAILED:
            return state.withMutations(function (filtersState) {
                var error = payload.error;
                filtersState.merge({
                    error: error
                });
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_filters_actions__["a" /* FiltersActions */].RESET_DEFAULTS:
            return state.withMutations(function (filtersState) {
                filtersState
                    .merge({ 'contrast': 100 })
                    .merge({ 'brightness': 100 })
                    .merge({ 'saturate': 100 })
                    .merge({ 'sepia': 0 })
                    .merge({ 'grayScale': 0 })
                    .merge({ 'invert': 0 })
                    .merge({ 'hueRotate': 0 })
                    .merge({ 'blur': 0 })
                    .merge({ 'blend': 'none' })
                    .merge({ 'opacity': 50 })
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* updateFilterStyle */])(DEFAULTS))
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* updateOverlayStyle */])(DEFAULTS));
            });
        default:
            return state.withMutations(function (filtersState) {
                filtersState
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* updateFilterStyle */])(filtersState))
                    .merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* updateOverlayStyle */])(filtersState));
            });
    }
}


/***/ }),

/***/ "./src/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters_reducer__ = __webpack_require__("./src/reducers/filters-reducer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_reducer__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_reducer__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_reducer__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__("./src/reducers/selectors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_1__selectors__["o"]; });




/***/ }),

/***/ "./src/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_add_operator_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (immutable) */ __webpack_exports__["p"] = getFiltersState;
/* harmony export (immutable) */ __webpack_exports__["j"] = getFilterStyleValue;
/* harmony export (immutable) */ __webpack_exports__["k"] = getOverlayStyleValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = getContrastFilterValue;
/* harmony export (immutable) */ __webpack_exports__["b"] = getBrightnessFilterValue;
/* harmony export (immutable) */ __webpack_exports__["c"] = getSaturateFilterValue;
/* harmony export (immutable) */ __webpack_exports__["d"] = getSepiaFilterValue;
/* harmony export (immutable) */ __webpack_exports__["e"] = getGrayScaleFilterValue;
/* harmony export (immutable) */ __webpack_exports__["f"] = getInvertFilterValue;
/* harmony export (immutable) */ __webpack_exports__["g"] = getHueRotateFilterValue;
/* harmony export (immutable) */ __webpack_exports__["h"] = getBlurFilterValue;
/* harmony export (immutable) */ __webpack_exports__["i"] = getBlendFilterValue;
/* harmony export (immutable) */ __webpack_exports__["l"] = getSelectedImage;
/* harmony export (immutable) */ __webpack_exports__["m"] = getImages;
/* harmony export (immutable) */ __webpack_exports__["n"] = getError;
/* harmony export (immutable) */ __webpack_exports__["o"] = getLoading;




function getFiltersState(state$) {
    return state$.select(function (state) { return state.filters; });
}
function getFilterStyleValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('styles').toJS(); })
        .distinctUntilChanged(function (previous, next) {
        return previous.WebkitFilter === next.WebkitFilter && previous.filter === next.filter;
    });
}
function getOverlayStyleValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('overlay').toJS(); })
        .distinctUntilChanged(function (previous, next) {
        return previous.background === next.background;
    });
}
function getContrastFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('contrast'); })
        .distinctUntilChanged();
}
function getBrightnessFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('brightness'); })
        .distinctUntilChanged();
}
function getSaturateFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('saturate'); })
        .distinctUntilChanged();
}
function getSepiaFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('sepia'); })
        .distinctUntilChanged();
}
function getGrayScaleFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('grayScale'); })
        .distinctUntilChanged();
}
function getInvertFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filersState) { return filersState.get('invert'); })
        .distinctUntilChanged();
}
function getHueRotateFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('hueRotate'); })
        .distinctUntilChanged();
}
function getBlurFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('blur'); })
        .distinctUntilChanged();
}
function getBlendFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('blend'); })
        .distinctUntilChanged();
}
function getSelectedImage(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('selectedImage'); })
        .distinctUntilChanged();
}
function getImages(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('images').toJS(); })
        .distinctUntilChanged();
}
function getError(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('error'); })
        .distinctUntilChanged();
}
function getLoading(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('loading'); })
        .distinctUntilChanged();
}


/***/ }),

/***/ "./src/services/filters-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ngrx_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_filters_actions__ = __webpack_require__("./src/actions/filters-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers_selectors__ = __webpack_require__("./src/reducers/selectors.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FiltersService = FiltersService_1 = (function () {
    function FiltersService(store$, actions, http) {
        this.store$ = store$;
        this.actions = actions;
        this.http = http;
        this.cache = new Map();
        this.contrast$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["a" /* getContrastFilterValue */])(store$);
        this.brightness$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["b" /* getBrightnessFilterValue */])(store$);
        this.saturate$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["c" /* getSaturateFilterValue */])(store$);
        this.sepia$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["d" /* getSepiaFilterValue */])(store$);
        this.grayscale$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["e" /* getGrayScaleFilterValue */])(store$);
        this.invert$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["f" /* getInvertFilterValue */])(store$);
        this.hueRotate$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["g" /* getHueRotateFilterValue */])(store$);
        this.blur$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["h" /* getBlurFilterValue */])(store$);
        this.blend$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["i" /* getBlendFilterValue */])(store$);
        this.filterStyle$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["j" /* getFilterStyleValue */])(store$);
        this.overlayStyle$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["k" /* getOverlayStyleValue */])(store$);
        this.selectedImage$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["l" /* getSelectedImage */])(store$);
        this.images$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["m" /* getImages */])(store$);
        this.error$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["n" /* getError */])(store$);
        this.loading$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducers_selectors__["o" /* getLoading */])(store$);
    }
    FiltersService.prototype.change = function (_a) {
        var value = _a.value, type = _a.type;
        switch (type) {
            case FiltersService_1.CONTRAST:
                this.changeContrast(value);
                break;
            case FiltersService_1.BRIGHTNESS:
                this.changeBrightness(value);
                break;
            case FiltersService_1.SATURATE:
                this.changeSaturate(value);
                break;
            case FiltersService_1.SEPIA:
                this.changeSepia(value);
                break;
            case FiltersService_1.GRAYSCALE:
                this.changeGrayScale(value);
                break;
            case FiltersService_1.INVERT:
                this.changeInvert(value);
                break;
            case FiltersService_1.HUE_ROTATE:
                this.changeHueRotate(value);
                break;
            case FiltersService_1.BLUR:
                this.changeBlur(value);
                break;
            case FiltersService_1.BLEND:
                this.changeBlend(value);
                break;
            case FiltersService_1.PRESET:
                this.changePreset(value);
                break;
            case FiltersService_1.IMAGE:
                this.changeSelectImage(value);
                break;
            case FiltersService_1.LOADING:
                this.changeLoading(value);
                break;
        }
    };
    FiltersService.prototype.changeContrast = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeContrast(value));
        }
    };
    FiltersService.prototype.changeBrightness = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeBrightness(value));
        }
    };
    FiltersService.prototype.changeSaturate = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeSaturate(value));
        }
    };
    FiltersService.prototype.changeSepia = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeSepia(value));
        }
    };
    FiltersService.prototype.changeGrayScale = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeGrayScale(value));
        }
    };
    FiltersService.prototype.changeInvert = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeInvert(value));
        }
    };
    FiltersService.prototype.changeHueRotate = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeHueRotate(value));
        }
    };
    FiltersService.prototype.changeBlur = function (value) {
        if (typeof value === 'number') {
            this.store$.dispatch(this.actions.changeBlur(value));
        }
    };
    FiltersService.prototype.changeBlend = function (value) {
        this.store$.dispatch(this.actions.changeBlend(value));
    };
    FiltersService.prototype.changePreset = function (value) {
        this.store$.dispatch(this.actions.changePreset(value));
    };
    FiltersService.prototype.changeSelectImage = function (value) {
        this.store$.dispatch(this.actions.changeSelectImage(value));
    };
    FiltersService.prototype.loadAllImages = function () {
        this.store$.dispatch(this.actions.loadImages());
    };
    FiltersService.prototype.resetToDefaults = function () {
        this.store$.dispatch(this.actions.resetToDefaults());
    };
    FiltersService.prototype.changeLoading = function (value) {
        this.store$.dispatch(this.actions.changeLoading(value));
    };
    FiltersService.prototype.fetchImages = function (url) {
        var _this = this;
        var hasCacheData = this.cache.has(url);
        if (hasCacheData) {
            var cache = this.cache.get(url);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(cache);
        }
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .map(function (records) {
            return records.map(function (record) {
                return {
                    id: record.id,
                    thumb: record.urls.thumb
                };
            });
        })
            .do(function (data) {
            !hasCacheData && _this.cache.set(url, data);
            return data;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Error fetching images from Unsplash API. Please try again later.'); });
    };
    return FiltersService;
}());
FiltersService.CONTRAST = 'contrast';
FiltersService.BRIGHTNESS = 'brightness';
FiltersService.SATURATE = 'saturate';
FiltersService.SEPIA = 'sepia';
FiltersService.GRAYSCALE = 'grayScale';
FiltersService.INVERT = 'invert';
FiltersService.HUE_ROTATE = 'hueRotate';
FiltersService.BLUR = 'blur';
FiltersService.BLEND = 'blend';
FiltersService.PRESET = 'preset';
FiltersService.IMAGE = 'image';
FiltersService.LOADING = 'loading';
FiltersService = FiltersService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ngrx_store__["Store"],
        __WEBPACK_IMPORTED_MODULE_9__actions_filters_actions__["a" /* FiltersActions */],
        __WEBPACK_IMPORTED_MODULE_8__angular_http__["Http"]])
], FiltersService);

var FiltersService_1;


/***/ }),

/***/ "./src/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters_service__ = __webpack_require__("./src/services/filters-service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__filters_service__["a"]; });



/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map