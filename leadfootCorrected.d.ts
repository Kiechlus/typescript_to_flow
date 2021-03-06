// Type definitions for JSZip
// Project: http://stuk.github.com/jszip/
// Definitions by: mzeiher <https://github.com/mzeiher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'jszip' {
	interface JSZip {
		files: {[key: string]: JSZipObject};

		/**
		 * Get a file from the archive
		 *
		 * @param Path relative path to file
		 * @return File matching path, null if no file found
		 */
		file(path: string): JSZipObject;

		/**
		 * Get files matching a RegExp from archive
		 *
		 * @param path RegExp to match
		 * @return Return all matching files or an empty array
		 */
		file(path: RegExp): JSZipObject[];

		/**
		 * Add a file to the archive
		 *
		 * @param path Relative path to file
		 * @param content Content of the file
		 * @param options Optional information about the file
		 * @return JSZip object
		 */
		file(path: string, data: any, options?: JSZipFileOptions): JSZip;

		/**
		 * Return an new JSZip instance with the given folder as root
		 *
		 * @param name Name of the folder
		 * @return New JSZip object with the given folder as root or null
		 */
		folder(name: string): JSZip;

		/**
		 * Returns new JSZip instances with the matching folders as root
		 *
		 * @param name RegExp to match
		 * @return New array of JSZipFile objects which match the RegExp
		 */
		folder(name: RegExp): JSZipObject[];

		/**
		 * Call a callback function for each entry at this folder level.
		 *
		 * @param callback function
		 */
		forEach(callback: (relativePath: string, file: JSZipObject) => void): void;

		/**
		 * Get all files wchich match the given filter function
		 *
		 * @param predicate Filter function
		 * @return Array of matched elements
		 */
		filter(predicate: (relativePath: string, file: JSZipObject) => boolean): JSZipObject[];

		/**
		 * Removes the file or folder from the archive
		 *
		 * @param path Relative path of file or folder
		 * @return Returns the JSZip instance
		 */
		remove(path: string): JSZip;

		/**
		 * @deprecated since version 3.0
		 * @see {@link generateAsync}
		 * http://stuk.github.io/jszip/documentation/upgrade_guide.html
		 */
		generate(options?: JSZipGeneratorOptions): any;

		/**
		 * Generates a new archive asynchronously
		 *
		 * @param options Optional options for the generator
		 * @return The serialized archive
		 */
		generateAsync(options?: JSZipGeneratorOptions, onUpdate?: Function): Promise<any>;

		/**
		 * @deprecated since version 3.0
		 * @see {@link loadAsync}
		 * http://stuk.github.io/jszip/documentation/upgrade_guide.html
		 */
		load(): void;

		/**
		 * Deserialize zip file asynchronously
		 *
		 * @param data Serialized zip file
		 * @param options Options for deserializing
		 * @return Returns promise
		 */
		loadAsync(data: any, options?: JSZipLoadOptions): Promise<JSZip>;
	}

	type Serialization = ('string' | 'text' | 'base64' | 'binarystring' | 'uint8array' |
							'arraybuffer' | 'blob' | 'nodebuffer');

	interface JSZipObject {
		name: string;
		dir: boolean;
		date: Date;
		comment: string;
		options: JSZipObjectOptions;

		/**
		 * Prepare the content in the asked type.
		 * @param {String} type the type of the result.
		 * @param {Function} onUpdate a function to call on each internal update.
		 * @return Promise the promise of the result.
		 */
		async(type: Serialization, onUpdate?: Function): Promise<any>;

		/**
		 * @deprecated since version 3.0
		 */
		asText(): void;
		/**
		 * @deprecated since version 3.0
		 */
		asBinary(): void;
		/**
		 * @deprecated since version 3.0
		 */
		asArrayBuffer(): void;
		/**
		 * @deprecated since version 3.0
		 */
		asUint8Array(): void;
		// asNodeBuffer(): void;
	}

	interface JSZipFileOptions {
		base64?: boolean;
		binary?: boolean;
		date?: Date;
		compression?: string;
		comment?: string;
		optimizedBinaryString?: boolean;
		createFolders?: boolean;
	}

	interface JSZipObjectOptions {
		/** deprecated */
		base64: boolean;
		/** deprecated */
		binary: boolean;
		/** deprecated */
		dir: boolean;
		/** deprecated */
		date: Date;
		compression: string;
	}

	interface JSZipGeneratorOptions {
		/** deprecated */
		base64?: boolean;
		/** DEFLATE or STORE */
		compression?: string;
		/** base64 (default), string, uint8array, blob */
		type?: string;
		comment?: string;
	}

	interface JSZipLoadOptions {
		base64?: boolean;
		checkCRC32?: boolean;
		optimizedBinaryString?: boolean;
		createFolders?: boolean;
	}

	interface JSZipSupport {
		arraybuffer: boolean;
		uint8array: boolean;
		blob: boolean;
		nodebuffer: boolean;
	}

	const jszip: {
		/**
		 * Create JSZip instance
		 */
		(): JSZip;
		/**
		 * Create JSZip instance
		 * If no parameters given an empty zip archive will be created
		 *
		 * @param data Serialized zip archive
		 * @param options Description of the serialized zip archive
		 */
		(data: any, options?: JSZipLoadOptions): JSZip;

		/**
		 * Create JSZip instance
		 */
		new (): JSZip;
		/**
		 * Create JSZip instance
		 * If no parameters given an empty zip archive will be created
		 *
		 * @param data Serialized zip archive
		 * @param options Description of the serialized zip archive
		 */
		new (data: any, options?: JSZipLoadOptions): JSZip;

		prototype: JSZip;
		support: JSZipSupport;
	};

	export = jszip;
}
declare module 'leadfoot/node_modules/@dojo/shim/interfaces' {
	/**
	 * Thenable represents any object with a callable `then` property.
	 */
	export interface Thenable<T> {
		then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
		then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
	}

	export interface ArrayLike<T> {
		length: number;
		[n: number]: T;
	}

	export interface Handle {
		/**
		 * Perform the destruction/cleanup logic associated with this handle
		 */
		destroy(): void;
	}

}
declare module 'leadfoot/node_modules/@dojo/shim/Symbol' {
	 global  {
	    interface SymbolConstructor {
	        observable: symbol;
	    }
	}
	export namespace Shim {
	    /**
	     * A custom guard function that determines if an object is a symbol or not
	     * @param  {any}       value The value to check to see if it is a symbol or not
	     * @return {is symbol}       Returns true if a symbol or not (and narrows the type guard)
	     */
	    function isSymbol(value: any): value is symbol;
	    const Exposed: SymbolConstructor;
	} const SymbolShim: SymbolConstructor;
	export const isSymbol: typeof Shim.isSymbol;
	export default SymbolShim;
	export {};

}
declare module 'leadfoot/node_modules/@dojo/shim/iterator' {
	import { ArrayLike } from 'leadfoot/node_modules/@dojo/shim/interfaces';
	import 'leadfoot/node_modules/@dojo/shim/Symbol';
	export interface IteratorResult<T> {
	    readonly done: boolean;
	    readonly value: T;
	}
	export interface Iterator<T> {
	    next(value?: any): IteratorResult<T>;
	    return?(value?: any): IteratorResult<T>;
	    throw?(e?: any): IteratorResult<T>;
	}
	export interface Iterable<T> {
	    [Symbol.iterator](): Iterator<T>;
	}
	export interface IterableIterator<T> extends Iterator<T> {
	    [Symbol.iterator](): IterableIterator<T>;
	}
	/**
	 * A class that provides "shims" an iterator interface on array like
	 * objects.
	 */
	export class ShimIterator<T> {
	    private _list;
	    private _nextIndex;
	    private _nativeIterator;
	    constructor(list: ArrayLike<T> | Iterable<T>);
	    /**
	     * Return the next iteration result for the Iterator
	     */
	    next(): IteratorResult<T>;
	    [Symbol.iterator](): IterableIterator<T>;
	}
	/**
	 * A type guard for checking if something has an Iterable interface
	 *
	 * @param value The value to type guard against
	 */
	export function isIterable(value: any): value is Iterable<any>;
	/**
	 * A type guard for checking if something is ArrayLike
	 *
	 * @param value The value to type guard against
	 */
	export function isArrayLike(value: any): value is ArrayLike<any>;
	/**
	 * Returns the iterator for an object
	 *
	 * @param iterable The iterable object to return the iterator for
	 */
	export function get<T>(iterable: Iterable<T> | ArrayLike<T>): Iterator<T> | undefined;
	export interface ForOfCallback<T> {
	    /**
	     * A callback function for a forOf() iteration
	     *
	     * @param value The current value
	     * @param object The object being iterated over
	     * @param doBreak A function, if called, will stop the iteration
	     */
	    (value: T, object: Iterable<T> | ArrayLike<T> | string, doBreak: () => void): void;
	}
	/**
	 * Shims the functionality of `for ... of` blocks
	 *
	 * @param iterable The object the provides an interator interface
	 * @param callback The callback which will be called for each item of the iterable
	 * @param thisArg Optional scope to pass the callback
	 */
	export function forOf<T>(iterable: Iterable<T> | ArrayLike<T> | string, callback: ForOfCallback<T>, thisArg?: any): void;

}
declare module 'leadfoot/node_modules/@dojo/shim/Promise' {
	import { Thenable } from 'leadfoot/node_modules/@dojo/shim/interfaces';
	import { Iterable } from 'leadfoot/node_modules/@dojo/shim/iterator';
	import 'leadfoot/node_modules/@dojo/shim/Symbol';
	/**
	 * Executor is the interface for functions used to initialize a Promise.
	 */
	export interface Executor<T> {
	    /**
	     * The executor for the promise
	     *
	     * @param resolve The resolver callback of the promise
	     * @param reject The rejector callback of the promise
	     */
	    (resolve: (value?: T | Thenable<T>) => void, reject: (reason?: any) => void): void;
	}
	export default class Promise<T> implements Thenable<T> {
	    /**
	     * Creates a new Promise.
	     *
	     * @constructor
	     *
	     * @param executor
	     * The executor function is called immediately when the Promise is instantiated. It is responsible for
	     * starting the asynchronous operation when it is invoked.
	     *
	     * The executor must call either the passed `resolve` function when the asynchronous operation has completed
	     * successfully, or the `reject` function when the operation fails.
	     */
	    constructor(executor: Executor<T>);
	    /**
	     * Converts an iterable object containing promises into a single promise that resolves to a new iterable object
	     * containing the fulfilled values of all the promises in the iterable, in the same order as the Promises in the
	     * iterable. Iterable values that are not promises are converted to promises using Promise.resolve.
	     *
	     * @example
	     * Promise.all([ Promise.resolve('foo'), 'bar' ]).then(function (value) {
	     *     value[0] === 'foo'; // true
	     *     value[1] === 'bar'; // true
	     * });
	     *
	     * @example
	     * Promise.all({
	     *     foo: Promise.resolve('foo'),
	     *     bar: 'bar'
	     * }).then((value) => {
	     *     value.foo === 'foo'; // true
	     *     value.bar === 'bar'; // true
	     * });
	     */
	    static all<T>(iterable: (T | Thenable<T>)[] | Iterable<(T | Thenable<T>)>): Promise<T[]>;
	    /**
	     * Converts an iterable object containing promises into a single promise that resolves or rejects as soon as one of
	     * the promises in the iterable resolves or rejects, with the value of the resolved or rejected promise. Values in
	     * the iterable that are not Promises are converted to Promises with Promise.resolve.
	     *
	     * @example
	     * Promise.race([ Promise.resolve('foo'), Promise.resolve('bar') ]).then((value) => {
	     *     value === 'foo'; // true
	     * });
	     *
	     * @example
	     * Promise.race({
	     *     foo: Promise.resolve('foo'),
	     *     bar: Promise.resolve('bar')
	     * }).then((value) => {
	     *     value === 'foo'; // true
	     * });
	     */
	    static race<T>(iterable: Iterable<(T | Thenable<T>)> | (T | Thenable<T>)[]): Promise<T>;
	    /**
	     * Creates a new promise that is rejected with the given error.
	     */
	    static reject<T>(reason?: any): Promise<any>;
	    /**
	     * Creates a new promise that is resolved with the given value.
	     */
	    static resolve(): Promise<void>;
	    static resolve<T>(value: (T | Thenable<T>)): Promise<T>;
	    /**
	     * Adds a callback to the promise to be invoked when the asynchronous operation throws an error.
	     */
	    catch(onRejected: (reason: Error) => T | Thenable<T> | void): Promise<T>;
	    then<U, V>(onFulfilled: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected: (reason: Error) => (V | Thenable<V>)): Promise<U | V>;
	    then<U>(onFulfilled?: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected?: (reason: Error) => void): Promise<U>;
	} global  {
	    class Promise<T> implements Thenable<T> {
	        /**
	         * Creates a new Promise.
	         *
	         * @constructor
	         *
	         * @param executor
	         * The executor function is called immediately when the Promise is instantiated. It is responsible for
	         * starting the asynchronous operation when it is invoked.
	         *
	         * The executor must call either the passed `resolve` function when the asynchronous operation has completed
	         * successfully, or the `reject` function when the operation fails.
	         */
	        constructor(executor: Executor<T>);
	        /**
	         * Converts an iterable object containing promises into a single promise that resolves to a new iterable object
	         * containing the fulfilled values of all the promises in the iterable, in the same order as the Promises in the
	         * iterable. Iterable values that are not promises are converted to promises using Promise.resolve.
	         *
	         * @example
	         * Promise.all([ Promise.resolve('foo'), 'bar' ]).then(function (value) {
	         *     value[0] === 'foo'; // true
	         *     value[1] === 'bar'; // true
	         * });
	         *
	         * @example
	         * Promise.all({
	         *     foo: Promise.resolve('foo'),
	         *     bar: 'bar'
	         * }).then((value) => {
	         *     value.foo === 'foo'; // true
	         *     value.bar === 'bar'; // true
	         * });
	         */
	        static all<T>(iterable: (T | Thenable<T>)[] | Iterable<(T | Thenable<T>)>): Promise<T[]>;
	        /**
	         * Converts an iterable object containing promises into a single promise that resolves or rejects as soon as one of
	         * the promises in the iterable resolves or rejects, with the value of the resolved or rejected promise. Values in
	         * the iterable that are not Promises are converted to Promises with Promise.resolve.
	         *
	         * @example
	         * Promise.race([ Promise.resolve('foo'), Promise.resolve('bar') ]).then((value) => {
	         *     value === 'foo'; // true
	         * });
	         *
	         * @example
	         * Promise.race({
	         *     foo: Promise.resolve('foo'),
	         *     bar: Promise.resolve('bar')
	         * }).then((value) => {
	         *     value === 'foo'; // true
	         * });
	         */
	        static race<T>(iterable: Iterable<(T | Thenable<T>)> | (T | Thenable<T>)[]): Promise<T>;
	        /**
	         * Creates a new promise that is rejected with the given error.
	         */
	        static reject<T>(reason?: any): Promise<T>;
	        /**
	         * Creates a new promise that is resolved with the given value.
	         */
	        static resolve(): Promise<void>;
	        static resolve<T>(value: (T | Thenable<T>)): Promise<T>;
	        static resolve<T>(value?: any): Promise<T>;
	        /**
	         * Adds a callback to the promise to be invoked when the asynchronous operation throws an error.
	         */
	        catch(onRejected: (reason: Error) => T | Thenable<T> | void): Promise<T>;
	        catch<U>(onRejected: (reason: Error) => U | Thenable<U>): Promise<U>;
	        then<U, V>(onFulfilled: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected: (reason: Error) => (V | Thenable<V>)): Promise<U | V>;
	        then<U>(onFulfilled?: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected?: (reason: Error) => void): Promise<U>;
	        then<U>(onFulfilled?: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected?: (reason: Error) => (U | Thenable<U>)): Promise<U>;
	    }
	}

}
declare module 'leadfoot/node_modules/@dojo/core/async/ExtensiblePromise' {
	import { Iterable } from 'leadfoot/node_modules/@dojo/shim/iterator';
	import Promise, { Executor } from 'leadfoot/node_modules/@dojo/shim/Promise';
	import { Thenable } from 'leadfoot/node_modules/@dojo/shim/interfaces';
	import '@dojo/shim/Symbol';
	export type DictionaryOfPromises<T> = {
	    [_: string]: T | Promise<T> | Thenable<T>;
	};
	export type ListOfPromises<T> = Iterable<(T | Thenable<T>)>;
	/**
	 * An extensible base to allow Promises to be extended in ES5. This class basically wraps a native Promise object,
	 * giving an API like a native promise.
	 */
	export default class ExtensiblePromise<T> {
	    /**
	     * Return a rejected promise wrapped in an ExtensiblePromise
	     *
	     * @param {Error?} reason    The reason for the rejection
	     * @returns {ExtensiblePromise}
	     */
	    static reject<T>(reason?: Error): any;
	    /**
	     * Return a resolved promise wrapped in an ExtensiblePromise
	     *
	     * @param value The value to resolve the promise with
	     *
	     * @returns {ExtensiblePromise}
	     */
	    static resolve<F extends ExtensiblePromise<void>>(): F;
	    static resolve<T, F extends ExtensiblePromise<T>>(value: (T | Thenable<T>)): F;
	    /**
	     * Return a ExtensiblePromise that resolves when all of the passed in objects have resolved. When used with a key/value
	     * pair, the returned promise's argument is a key/value pair of the original keys with their resolved values.
	     *
	     * @example
	     * ExtensiblePromise.all({ one: 1, two: 2 }).then(results => console.log(results));
	     * // { one: 1, two: 2 }
	     *
	     * @param iterable    An iterable of values to resolve, or a key/value pair of values to resolve. These can be Promises, ExtensiblePromises, or other objects
	     * @returns {ExtensiblePromise}
	     */
	    static all<F extends ExtensiblePromise<{
	        [key: string]: T;
	    }>, T>(iterable: DictionaryOfPromises<T>): F;
	    static all<F extends ExtensiblePromise<T[]>, T>(iterable: (T | Thenable<T>)[]): F;
	    static all<F extends ExtensiblePromise<T[]>, T>(iterable: T | Thenable<T>): F;
	    static all<F extends ExtensiblePromise<T[]>, T>(iterable: ListOfPromises<T>): F;
	    /**
	     * Return a ExtensiblePromise that resolves when one of the passed in objects have resolved
	     *
	     * @param iterable    An iterable of values to resolve. These can be Promises, ExtensiblePromises, or other objects
	     * @returns {ExtensiblePromise}
	     */
	    static race<F extends ExtensiblePromise<T>, T>(iterable: Iterable<(T | Thenable<T>)> | (T | Thenable<T>)[]): F;
	    /**
	     * @type {Promise}
	     * The wrapped promise
	     */
	    readonly _promise: Promise<T>;
	    /**
	     * Creates a new extended Promise.
	     *
	     * @constructor
	     *
	     * @param executor
	     * The executor function is called immediately when the Promise is instantiated. It is responsible for
	     * starting the asynchronous operation when it is invoked.
	     *
	     * The executor must call either the passed `resolve` function when the asynchronous operation has completed
	     * successfully, or the `reject` function when the operation fails.
	     */
	    constructor(executor: Executor<T>);
	    /**
	     * Adds a callback to be invoked when the wrapped Promise is rejected.
	     *
	     * @param {Function} onRejected A function to call to handle the error. The parameter to the function will be the caught error.
	     *
	     * @returns {ExtensiblePromise}
	     */
	    catch(onRejected: (reason: Error) => T | Thenable<T> | void): ExtensiblePromise<T>;
	    /**
	     * Adds a callback to be invoked when the wrapped Promise resolves or is rejected.
	     *
	     * @param {Function} onFulfilled   A function to call to handle the resolution. The paramter to the function will be the resolved value, if any.
	     * @param {Function} onRejected    A function to call to handle the error. The parameter to the function will be the caught error.
	     *
	     * @returns {ExtensiblePromise}
	     */
	    then<U, V>(onFulfilled: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected: (reason: Error) => (V | Thenable<V>)): ExtensiblePromise<U | V>;
	    then<U>(onFulfilled?: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected?: (reason: Error) => void): ExtensiblePromise<U>;
	    readonly [Symbol.toStringTag]: 'Promise';
	}

}
declare module 'leadfoot/node_modules/@dojo/core/async/Task' {
	import { Thenable } from 'leadfoot/node_modules/@dojo/shim/interfaces';
	import { Executor } from 'leadfoot/node_modules/@dojo/shim/Promise';
	import ExtensiblePromise, { ListOfPromises, DictionaryOfPromises } from 'leadfoot/node_modules/@dojo/core/async/ExtensiblePromise';
	import { Iterable } from 'leadfoot/node_modules/@dojo/shim/iterator';
	/**
	 * Describe the internal state of a task.
	 */
	export const enum State {
	    Fulfilled = 0,
	    Pending = 1,
	    Rejected = 2,
	    Canceled = 3,
	}
	/**
	 * A type guard that determines if `value` is a `Task`
	 * @param value The value to guard
	 */
	export function isTask<T>(value: any): value is Task<T>;
	/**
	 * Returns true if a given value has a `then` method.
	 * @param {any} value The value to check if is Thenable
	 * @returns {is Thenable<T>} A type guard if the value is thenable
	 */
	export function isThenable<T>(value: any): value is Thenable<T>;
	/**
	 * Task is an extension of Promise that supports cancellation and the Task#finally method.
	 */
	export default class Task<T> extends ExtensiblePromise<T> {
	    /**
	     * Return a Task that resolves when one of the passed in objects have resolved
	     *
	     * @param iterable    An iterable of values to resolve. These can be Promises, ExtensiblePromises, or other objects
	     * @returns {Task}
	     */
	    static race<F extends ExtensiblePromise<T>, T>(iterable: Iterable<(T | Thenable<T>)> | (T | Thenable<T>)[]): Task<T>;
	    /**
	     * Return a rejected promise wrapped in a Task
	     *
	     * @param {Error?} reason    The reason for the rejection
	     * @returns {Task}
	     */
	    static reject<T>(reason?: Error): Task<T>;
	    /**
	     * Return a resolved task.
	     *
	     * @param value The value to resolve with
	     *
	     * @return {Task}
	     */
	    static resolve(): Task<void>;
	    static resolve<T>(value: (T | Thenable<T>)): Task<T>;
	    static all<T>(iterable: DictionaryOfPromises<T>): Task<{
	        [key: string]: T;
	    }>;
	    static all<T>(iterable: (T | Thenable<T>)[]): Task<T[]>;
	    static all<T>(iterable: T | Thenable<T>): Task<T[]>;
	    static all<T>(iterable: ListOfPromises<T>): Task<T[]>;
	    /**
	     * A cancelation handler that will be called if this task is canceled.
	     */
	    private canceler;
	    /**
	     * Children of this Task (i.e., Tasks that were created from this Task with `then` or `catch`).
	     */
	    private readonly children;
	    /**
	     * The finally callback for this Task (if it was created by a call to `finally`).
	     */
	    private _finally;
	    /**
	     * The state of the task
	     */
	    protected _state: State;
	    readonly state: State;
	    /**
	     * @constructor
	     *
	     * Create a new task. Executor is run immediately. The canceler will be called when the task is canceled.
	     *
	     * @param executor Method that initiates some task
	     * @param canceler Method to call when the task is canceled
	     *
	     */
	    constructor(executor: Executor<T>, canceler?: () => void);
	    /**
	     * Propagates cancellation down through a Task tree. The Task's state is immediately set to canceled. If a Thenable
	     * finally task was passed in, it is resolved before calling this Task's finally callback; otherwise, this Task's
	     * finally callback is immediately executed. `_cancel` is called for each child Task, passing in the value returned
	     * by this Task's finally callback or a Promise chain that will eventually resolve to that value.
	     */
	    private _cancel(finallyTask?);
	    /**
	     * Immediately cancels this task if it has not already resolved. This Task and any descendants are synchronously set
	     * to the Canceled state and any `finally` added downstream from the canceled Task are invoked.
	     */
	    cancel(): void;
	    catch(onRejected: (reason: Error) => T | Thenable<T> | void): Task<T>;
	    /**
	     * Allows for cleanup actions to be performed after resolution of a Promise.
	     */
	    finally(callback: () => void): Task<T>;
	    /**
	     * Adds a callback to be invoked when the Task resolves or is rejected.
	     *
	     * @param {Function} onFulfilled   A function to call to handle the resolution. The paramter to the function will be the resolved value, if any.
	     * @param {Function} onRejected    A function to call to handle the error. The parameter to the function will be the caught error.
	     *
	     * @returns {ExtensiblePromise}
	     */
	    then<U, V>(onFulfilled: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected: (reason: Error) => (V | Thenable<V>)): Task<U | V>;
	    then<U>(onFulfilled?: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected?: (reason: Error) => void): Task<U>;
	    then<U>(onFulfilled?: ((value: T) => (U | Thenable<U> | undefined)) | undefined, onRejected?: (reason: Error) => (U | Thenable<U>)): Task<U>;
	}

}
declare module 'leadfoot/node_modules/@dojo/interfaces/core' {
	/**
	 * An interface for an object which provides a cancelable event API.  By calling the
	 * `.preventDefault()` method on the object, the event should be cancelled and not
	 * proceed any further
	 */
	export interface EventCancelableObject<T extends string, U> {
		/**
		 * Can the event be canceled?
		 */
		readonly cancelable: boolean;

		/**
		 * Was the event canceled?
		 */
		readonly defaultPrevented: boolean;

		/**
		 * Cancel the event
		 */
		preventDefault(): void;

		/**
		 * The target for the event
		 */
		readonly target: U;

		/**
		 * The type of the event
		 */
		readonly type: T;
	}

	export interface EventErrorObject<T> {
		/**
		 * The error that is the subject of this event
		 */
		readonly error: Error;

		/**
		 * The target for the event
		 */
		readonly target: T;

		/**
		 * The type of the event
		 */
		readonly type: 'error';
	}

	/**
	 * The base event object, which provides a `type` property
	 */
	export interface EventObject {
		/**
		 * The type of the event
		 */
		readonly type: string;
	}

	/**
	 * An event object which has a typed target
	 */
	export interface EventTargettedObject<T> {
		/**
		 * The target of the event
		 */
		readonly target: T;

		/**
		 * The type of the event
		 */
		readonly type: string;
	}

	/**
	 * An event object which has a string literal type
	 */
	export interface EventTypedObject<T extends string> {
		/**
		 * The type of the event
		 */
		readonly type: T;
	}

	/**
	 * A generic definition for a factory function which, given an optional set of options will
	 * return an instance of the supplied generic type
	 */
	export interface Factory<T, O> {
		/**
		 * Create an instance
		 *
		 * @param options The options used to create the instance
		 */
		(options?: O): T;

		/**
		 * The prototype that will be used when constructing the instance
		 */
		prototype: T;
	}

	/**
	 * Used for inserting an item into a posistion
	 */
	export type InsertPosition = number | 'first' | 'last' | 'before' | 'after';

	/**
	 * Used through the toolkit as a consistent API to manage how callers can "cleanup"
	 * when doing a function.
	 */
	export interface Handle {
		/**
		 * Perform the destruction/cleanup logic associated with this handle
		 */
		destroy(): void;
	}

	/**
	 * A general interface that can be used to renference a general index map of values of a particular type
	 */
	export interface Hash<T> {
		[ id: string ]: T;
	}

	/**
	 * A base map of styles where each key is the name of the style attribute and the value is a string
	 * which represents the style
	 */
	export interface StylesMap {
		[style: string]: string;
	}

}
declare module 'leadfoot/node_modules/@dojo/core/lang' {
	import { Handle } from 'leadfoot/node_modules/@dojo/interfaces/core';
	/**
	 * Copies the values of all enumerable own properties of one or more source objects to the target object.
	 *
	 * @param target The target object to receive values from source objects
	 * @param sources Any number of objects whose enumerable own properties will be copied to the target object
	 * @return The modified target object
	 */
	export const assign: <T extends {}, U extends {}>(target: T, ...sources: (U | null | undefined)[]) => T & U;
	/**
	 * Creates a new object from the given prototype, and copies all enumerable own properties of one or more
	 * source objects to the newly created target object.
	 *
	 * @param prototype The prototype to create a new object from
	 * @param mixins Any number of objects whose enumerable own properties will be copied to the created object
	 * @return The new object
	 */
	export function create<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}, Z extends {}>(prototype: T, mixin1: U, mixin2: V, mixin3: W, mixin4: X, mixin5: Y, mixin6: Z): T & U & V & W & X & Y & Z;
	export function create<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}>(prototype: T, mixin1: U, mixin2: V, mixin3: W, mixin4: X, mixin5: Y): T & U & V & W & X & Y;
	export function create<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}>(prototype: T, mixin1: U, mixin2: V, mixin3: W, mixin4: X): T & U & V & W & X;
	export function create<T extends {}, U extends {}, V extends {}, W extends {}>(prototype: T, mixin1: U, mixin2: V, mixin3: W): T & U & V & W;
	export function create<T extends {}, U extends {}, V extends {}>(prototype: T, mixin1: U, mixin2: V): T & U & V;
	export function create<T extends {}, U extends {}>(prototype: T, mixin: U): T & U;
	export function create<T extends {}>(prototype: T): T;
	/**
	 * Copies the values of all enumerable own properties of one or more source objects to the target object,
	 * recursively copying all nested objects and arrays as well.
	 *
	 * @param target The target object to receive values from source objects
	 * @param sources Any number of objects whose enumerable own properties will be copied to the target object
	 * @return The modified target object
	 */
	export function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}, Z extends {}>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y, source6: Z): T & U & V & W & X & Y & Z;
	export function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y): T & U & V & W & X & Y;
	export function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}>(target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
	export function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
	export function deepAssign<T extends {}, U extends {}, V extends {}>(target: T, source1: U, source2: V): T & U & V;
	export function deepAssign<T extends {}, U extends {}>(target: T, source: U): T & U;
	/**
	 * Copies the values of all enumerable (own or inherited) properties of one or more source objects to the
	 * target object, recursively copying all nested objects and arrays as well.
	 *
	 * @param target The target object to receive values from source objects
	 * @param sources Any number of objects whose enumerable properties will be copied to the target object
	 * @return The modified target object
	 */
	export function deepMixin<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}, Z extends {}>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y, source6: Z): T & U & V & W & X & Y & Z;
	export function deepMixin<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y): T & U & V & W & X & Y;
	export function deepMixin<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}>(target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
	export function deepMixin<T extends {}, U extends {}, V extends {}, W extends {}>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
	export function deepMixin<T extends {}, U extends {}, V extends {}>(target: T, source1: U, source2: V): T & U & V;
	export function deepMixin<T extends {}, U extends {}>(target: T, source: U): T & U;
	/**
	 * Creates a new object using the provided source's prototype as the prototype for the new object, and then
	 * deep copies the provided source's values into the new target.
	 *
	 * @param source The object to duplicate
	 * @return The new object
	 */
	export function duplicate<T extends {}>(source: T): T;
	/**
	 * Determines whether two values are the same value.
	 *
	 * @param a First value to compare
	 * @param b Second value to compare
	 * @return true if the values are the same; false otherwise
	 */
	export function isIdentical(a: any, b: any): boolean;
	/**
	 * Returns a function that binds a method to the specified object at runtime. This is similar to
	 * `Function.prototype.bind`, but instead of a function it takes the name of a method on an object.
	 * As a result, the function returned by `lateBind` will always call the function currently assigned to
	 * the specified property on the object as of the moment the function it returns is called.
	 *
	 * @param instance The context object
	 * @param method The name of the method on the context object to bind to itself
	 * @param suppliedArgs An optional array of values to prepend to the `instance[method]` arguments list
	 * @return The bound function
	 */
	export function lateBind(instance: {}, method: string, ...suppliedArgs: any[]): (...args: any[]) => any;
	/**
	 * Copies the values of all enumerable (own or inherited) properties of one or more source objects to the
	 * target object.
	 *
	 * @return The modified target object
	 */
	export function mixin<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}, Z extends {}>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y, source6: Z): T & U & V & W & X & Y & Z;
	export function mixin<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y): T & U & V & W & X & Y;
	export function mixin<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}>(target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
	export function mixin<T extends {}, U extends {}, V extends {}, W extends {}>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
	export function mixin<T extends {}, U extends {}, V extends {}>(target: T, source1: U, source2: V): T & U & V;
	export function mixin<T extends {}, U extends {}>(target: T, source: U): T & U;
	/**
	 * Returns a function which invokes the given function with the given arguments prepended to its argument list.
	 * Like `Function.prototype.bind`, but does not alter execution context.
	 *
	 * @param targetFunction The function that needs to be bound
	 * @param suppliedArgs An optional array of arguments to prepend to the `targetFunction` arguments list
	 * @return The bound function
	 */
	export function partial(targetFunction: (...args: any[]) => any, ...suppliedArgs: any[]): (...args: any[]) => any;
	/**
	 * Returns an object with a destroy method that, when called, calls the passed-in destructor.
	 * This is intended to provide a unified interface for creating "remove" / "destroy" handlers for
	 * event listeners, timers, etc.
	 *
	 * @param destructor A function that will be called when the handle's `destroy` method is invoked
	 * @return The handle object
	 */
	export function createHandle(destructor: () => void): Handle;
	/**
	 * Returns a single handle that can be used to destroy multiple handles simultaneously.
	 *
	 * @param handles An array of handles with `destroy` methods
	 * @return The handle object
	 */
	export function createCompositeHandle(...handles: Handle[]): Handle;

}
declare module 'leadfoot/src/lib/util' {
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	/**
	 * Creates a promise that resolves itself after `ms` milliseconds.
	 *
	 * @param ms Time until resolution in milliseconds.
	 */
	export function sleep(ms: number): Task<void>;
	/**
	 * Annotates the method with additional properties that provide guidance to [[Command]] about
	 * how the method interacts with stored context elements.
	 */
	export function forCommand(fn: Function, properties: {
	    usesElement?: boolean;
	    createsContext?: boolean;
	}): Function;
	/**
	 * Converts a function to a string representation suitable for use with the `execute` API endpoint.
	 */
	export function toExecuteString(fn: Function | string): string;
	/**
	 * Removes the first line of a stack trace, which in V8 is the string representation of the object holding the stack
	 * trace (which is garbage for captured stack traces).
	 */
	export function trimStack(stack: string): string;
	export function applyMixins(derivedCtor: any, baseCtors: any[], includePrivates?: boolean): void;

}
declare module 'leadfoot/src/lib/statusCodes' {
	 const statusCodes: {
	    0: string[];
	    6: string[];
	    7: string[];
	    8: string[];
	    9: string[];
	    10: string[];
	    11: string[];
	    12: string[];
	    13: string[];
	    15: string[];
	    17: string[];
	    19: string[];
	    21: string[];
	    23: string[];
	    24: string[];
	    25: string[];
	    26: string[];
	    27: string[];
	    28: string[];
	    29: string[];
	    30: string[];
	    31: string[];
	    32: string[];
	    33: string[];
	    34: string[];
	};
	export default statusCodes;

}
declare module 'leadfoot/src/keys' {
	 const keys: {
	    'NULL': string;
	    'CANCEL': string;
	    'HELP': string;
	    'BACKSPACE': string;
	    'TAB': string;
	    'CLEAR': string;
	    'RETURN': string;
	    'ENTER': string;
	    'SHIFT': string;
	    'CONTROL': string;
	    'ALT': string;
	    'PAUSE': string;
	    'ESCAPE': string;
	    'SPACE': string;
	    'PAGE_UP': string;
	    'PAGE_DOWN': string;
	    'END': string;
	    'HOME': string;
	    'ARROW_LEFT': string;
	    'ARROW_UP': string;
	    'ARROW_RIGHT': string;
	    'ARROW_DOWN': string;
	    'INSERT': string;
	    'DELETE': string;
	    'SEMICOLON': string;
	    'EQUALS': string;
	    'NUMPAD0': string;
	    'NUMPAD1': string;
	    'NUMPAD2': string;
	    'NUMPAD3': string;
	    'NUMPAD4': string;
	    'NUMPAD5': string;
	    'NUMPAD6': string;
	    'NUMPAD7': string;
	    'NUMPAD8': string;
	    'NUMPAD9': string;
	    'MULTIPLY': string;
	    'ADD': string;
	    'SEPARATOR': string;
	    'SUBTRACT': string;
	    'DECIMAL': string;
	    'DIVIDE': string;
	    'F1': string;
	    'F2': string;
	    'F3': string;
	    'F4': string;
	    'F5': string;
	    'F6': string;
	    'F7': string;
	    'F8': string;
	    'F9': string;
	    'F10': string;
	    'F11': string;
	    'F12': string;
	    'META': string;
	    'COMMAND': string;
	    'ZENKAKU_HANKAKU': string;
	    '\uE000': string;
	    '\uE001': string;
	    '\uE002': string;
	    '\uE003': string;
	    '\uE004': string;
	    '\uE005': string;
	    '\uE006': string;
	    '\uE007': string;
	    '\uE008': string;
	    '\uE009': string;
	    '\uE00A': string;
	    '\uE00B': string;
	    '\uE00C': string;
	    '\uE00D': string;
	    '\uE00E': string;
	    '\uE00F': string;
	    '\uE010': string;
	    '\uE011': string;
	    '\uE012': string;
	    '\uE013': string;
	    '\uE014': string;
	    '\uE015': string;
	    '\uE016': string;
	    '\uE017': string;
	    '\uE018': string;
	    '\uE019': string;
	    '\uE01A': string;
	    '\uE01B': string;
	    '\uE01C': string;
	    '\uE01D': string;
	    '\uE01E': string;
	    '\uE01F': string;
	    '\uE020': string;
	    '\uE021': string;
	    '\uE022': string;
	    '\uE023': string;
	    '\uE024': string;
	    '\uE025': string;
	    '\uE026': string;
	    '\uE027': string;
	    '\uE028': string;
	    '\uE029': string;
	    '\uE031': string;
	    '\uE032': string;
	    '\uE033': string;
	    '\uE034': string;
	    '\uE035': string;
	    '\uE036': string;
	    '\uE037': string;
	    '\uE038': string;
	    '\uE039': string;
	    '\uE03A': string;
	    '\uE03B': string;
	    '\uE03C': string;
	    '\uE03D': string;
	    '\uE040': string;
	};
	export default keys;

}
declare module 'leadfoot/node_modules/@dojo/shim/Map' {
	import { ArrayLike } from 'leadfoot/node_modules/@dojo/shim/interfaces';
	import { Iterable, IterableIterator } from 'leadfoot/node_modules/@dojo/shim/iterator';
	import 'leadfoot/node_modules/@dojo/shim/Symbol';
	export namespace Shim {
	    /**
	     * An implementation analogous to the Map specification in ES2015.
	     */
	    class Map<K, V> {
	        protected readonly _keys: K[];
	        protected readonly _values: V[];
	        /**
	         * An alternative to Array.prototype.indexOf using Object.is
	         * to check for equality. See http://mzl.la/1zuKO2V
	         */
	        protected _indexOfKey(keys: K[], key: K): number;
	        /**
	         * Creates a new Map
	         *
	         * @constructor
	         *
	         * @param iterator
	         * Array or iterator containing two-item tuples used to initially populate the map.
	         * The first item in each tuple corresponds to the key of the map entry.
	         * The second item corresponds to the value of the map entry.
	         */
	        constructor(iterable?: ArrayLike<[K, V]> | Iterable<[K, V]>);
	        /**
	         * Returns the number of key / value pairs in the Map.
	         *
	         * @return the number of key / value pairs in the Map
	         */
	        readonly size: number;
	        /**
	         * Deletes all keys and their associated values.
	         */
	        clear(): void;
	        /**
	         * Deletes a given key and its associated value.
	         *
	         * @param key The key to delete
	         * @return true if the key exists, false if it does not
	         */
	        delete(key: K): boolean;
	        /**
	         * Returns an iterator that yields each key/value pair as an array.
	         *
	         * @return An iterator for each key/value pair in the instance.
	         */
	        entries(): IterableIterator<[K, V]>;
	        /**
	         * Executes a given function for each map entry. The function
	         * is invoked with three arguments: the element value, the
	         * element key, and the associated Map instance.
	         *
	         * @param callback The function to execute for each map entry,
	         * @param context The value to use for `this` for each execution of the calback
	         */
	        forEach(callback: (value: V, key: K, mapInstance: Map<K, V>) => any, context?: {}): void;
	        /**
	         * Returns the value associated with a given key.
	         *
	         * @param key The key to look up
	         * @return The value if one exists or undefined
	         */
	        get(key: K): V | undefined;
	        /**
	         * Checks for the presence of a given key.
	         *
	         * @param key The key to check for
	         * @return true if the key exists, false if it does not
	         */
	        has(key: K): boolean;
	        /**
	         * Returns an iterator that yields each key in the map.
	         *
	         * @return An iterator containing the instance's keys.
	         */
	        keys(): IterableIterator<K>;
	        /**
	         * Sets the value associated with a given key.
	         *
	         * @param key The key to define a value to
	         * @param value The value to assign
	         * @return The Map instance
	         */
	        set(key: K, value: V): Map<K, V>;
	        /**
	         * Returns an iterator that yields each value in the map.
	         *
	         * @return An iterator containing the instance's values.
	         */
	        values(): IterableIterator<V>;
	        [Symbol.iterator](): IterableIterator<[K, V]>;
	        [Symbol.toStringTag]: string;
	    }
	}
	export default class Map<K, V> {
	    constructor(iterable?: ArrayLike<[K, V]> | Iterable<[K, V]>);
	    readonly size: number;
	    clear(): void;
	    delete(key: K): boolean;
	    entries(): IterableIterator<[K, V]>;
	    forEach(callback: (value: V, key: K, mapInstance: Map<K, V>) => any, context?: {}): void;
	    get(key: K): V | undefined;
	    has(key: K): boolean;
	    keys(): IterableIterator<K>;
	    set(key: K, value: V): Map<K, V>;
	    values(): IterableIterator<V>;
	    [Symbol.iterator](): IterableIterator<[K, V]>;
	    [Symbol.toStringTag]: string;
	}

}
declare module 'leadfoot/node_modules/@dojo/shim/Observable' {
	import { Iterable } from 'leadfoot/node_modules/@dojo/shim/iterator';
	import 'leadfoot/node_modules/@dojo/shim/Symbol';
	/**
	 * Handles an individual subscription to an Observable.
	 */
	export interface Subscription {
	    /**
	     * Whether or not the subscription is closed. Closed subscriptions will not emit values.
	     */
	    closed: boolean;
	    /**
	     * A function to call to close the subscription. Calling this will call any associated tear down methods.
	     */
	    unsubscribe: (() => void);
	}
	/**
	 * Describes an object that can be subscribed to
	 */
	export interface Subscribable<T> {
	    subscribe(observer: Observer<T>): Subscription;
	    subscribe(onNext: (value: T) => any, onError?: (error: any) => any, onComplete?: (completeValue?: any) => void): Subscription;
	}
	/**
	 * Handles events emitted from the subscription
	 */
	export interface Observer<T> {
	    /**
	     * Called to handle a single emitted event.
	     *
	     * @param {T} value    The value that was emitted.
	     */
	    next?(value: T): any;
	    /**
	     * An optional method to be called when the subscription starts (before any events are emitted).
	     * @param observer
	     */
	    start?(observer: Subscription): void;
	    /**
	     * An optional method to be called if an error occurs during subscription or handling.
	     *
	     * @param errorValue    The error
	     */
	    error?(errorValue: any): any;
	    /**
	     * An optional method to be called when the subscription is completed (unless an error occurred and the error method was specified)
	     *
	     * @param completeValue    The value passed to the completion method.
	     */
	    complete?(completeValue?: any): void;
	}
	/**
	 * An object used to control a single subscription and an observer.
	 */
	export interface SubscriptionObserver<T> {
	    /**
	     * Whether or not the subscription is closed.
	     */
	    readonly closed: boolean;
	    /**
	     * Emit an event to the observer.
	     *
	     * @param value    The value to be emitted.
	     */
	    next(value: T): any;
	    /**
	     * Report an error. The subscription will be closed after an error has occurred.
	     *
	     * @param errorValue    The error to be reported.
	     */
	    error(errorValue: any): any;
	    /**
	     * Report completion of the subscription. The subscription will be closed, and no new values will be emitted,
	     * after completion.
	     *
	     * @param completeValue?    A value to pass to the completion handler.
	     */
	    complete(completeValue?: any): void;
	}
	export interface Subscriber<T> {
	    (observer: SubscriptionObserver<T>): (() => void) | void | {
	        unsubscribe: () => void;
	    };
	}
	/**
	 * An object that implements a Symbol.observerable method.
	 */
	export interface ObservableObject {
	    [Symbol.observable]: () => any;
	}
	export default class Observable<T> implements ObservableObject {
	    /**
	     * Create a new observerable with a subscriber function. The subscriber function will get called with a
	     * SubscriptionObserver parameter for controlling the subscription.  I a function is returned, it will be
	     * run when the subscription is complete.
	     *
	     * @param {Subscriber<T>} subscriber    The subscription function to be called when observers are subscribed
	     *
	     * @example
	     * const source = new Observer<number>((observer) => {
	     *     observer.next(1);
	     *     observer.next(2);
	     *     observer.next(3);
	     * });
	     */
	    constructor(subscriber: Subscriber<T>);
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     * executes the observable's subscriber function, which will take action to set up the underlying data stream.
	     *
	     * @param {Observer<T>} observer    The observer object that will handle events
	     *
	     * @return {Subscription} A Subscription object that can be used to manage the subscription.
	     */
	    subscribe(observer: Observer<T>): Subscription;
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     * executes the observable's subscriber function, which will take action to set up the underlying data stream.
	     *
	     * @param onNext        A function to handle an emitted value. Value is passed in as the first parameter to the function.
	     * @param onError?        A function to handle errors that occur during onNext, or during subscription.
	     * @param onComplete?    A function that gets called when the subscription is complete, and will not send any more values. This function will also get called if an error occurs and onError is not defined.
	     *
	     * @return {Subscription} A Subscription object that can be used to manage the subscription.
	     */
	    subscribe(onNext: (value: T) => any, onError?: (error: any) => any, onComplete?: (completeValue?: any) => void): Subscription;
	    /**
	     * Create an Observable from a list of values.
	     *
	     * @param {...T} items The values to be emitted
	     *
	     * @return {Observable<T>}    An Observable that will emit the specified values
	     *
	     * @example
	     *
	     * let source = Observable.of(1, 2, 3);
	     *
	     * // will emit three separate values, 1, 2, and 3.
	     */
	    static of<T>(...items: T[]): Observable<T>;
	    /**
	     * Create an Observable from another object. If the object is in itself Observable, the object will be returned.
	     * Otherwise, the value will be wrapped in an Observable. If the object is iterable, an Observable will be created
	     * that emits each item of the iterable.
	     *
	     * @param {Iterable<T> | ArrayLike<T> | ObservableObject} item The item to be turned into an Observable
	     *
	     * @return {Observable<T>}    An observable for the item you passed in
	     */
	    static from<T>(item: Iterable<T> | ArrayLike<T> | ObservableObject): Observable<T>;
	    [Symbol.observable](): any;
	}

}
declare module 'leadfoot/node_modules/@dojo/interfaces/vdom' {
	/**
	 * These interfaces are derived from Maquette.
	 *
	 * https://github.com/AFASSoftware/maquette
	 *
	 * Copyright (c) 2015 Maquette contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */

	/**
	 * Options that may be passed when creating the [[Projector]]
	 */
	export interface ProjectorOptions {
		/**
		 * A transition strategy to invoke when enterAnimation and exitAnimation properties are provided as strings.
		 * The module `cssTransitions` in the provided `css-transitions.js` file provides such a strategy.
		 * A transition strategy is not needed when enterAnimation and exitAnimation properties are provided as functions.
		 */
		readonly transitions?: TransitionStrategy;
		/**
		 * May be used to add vendor prefixes when applying inline styles when needed.
		 * This function is called when [[styles]] is used.
		 * This function should execute `domNode.style[styleName] = value` or do something smarter.
		 *
		 * @param domNode   The DOM Node that needs to receive the style
		 * @param styleName The name of the style that should be applied, for example `transform`.
		 * @param value     The value of this style, for example `rotate(45deg)`.
		 */
		styleApplyer?(domNode: HTMLElement, styleName: string, value: string): void;
	}

	/**
	 * Options that influence how the DOM is rendered and updated.
	 */
	export interface ProjectionOptions extends ProjectorOptions {
		/**
		 * Only for internal use. Used for rendering SVG Nodes.
		 */
		readonly namespace?: string;
		/**
		 * May be used to intercept registration of event-handlers.
		 *
		 * Used by the [[Projector]] to wrap eventHandler-calls to call [[scheduleRender]] as well.
		 *
		 * @param propertyName             The name of the property to be assigned, for example onclick
		 * @param eventHandler             The function that was registered on the [[VNode]]
		 * @param domNode                  The real DOM element
		 * @param properties               The whole set of properties that was put on the VNode
		 * @returns                        The function that is to be placed on the DOM node as the event handler, instead of `eventHandler`.
		 */
		eventHandlerInterceptor?: (propertyName: string, eventHandler: Function, domNode: Node, properties: VNodeProperties) => Function;
	}

	/**
	 * These functions are called when [[VNodeProperties.enterAnimation]] and [[VNodeProperties.exitAnimation]] are provided as strings.
	 * See [[ProjectionOptions.transitions]].
	 */
	export interface TransitionStrategy {
		/**
		 * Function that is called when a [[VNode]] with an `enterAnimation` string is added to an already existing parent [[VNode]].
		 *
		 * @param element         Element that was just added to the DOM.
		 * @param properties      The properties object that was supplied to the [[h]] method
		 * @param enterAnimation  The string that was passed to [[VNodeProperties.enterAnimation]].
		 */
		enter(element: Element, properties: VNodeProperties, enterAnimation: string): void;
		/**
		 * Function that is called when a [[VNode]] with an `exitAnimation` string is removed from a existing parent [[VNode]] that remains.
		 *
		 * @param element         Element that ought to be removed from to the DOM.
		 * @param properties      The properties object that was supplied to the [[h]] method that rendered this [[VNode]] the previous time.
		 * @param exitAnimation   The string that was passed to [[VNodeProperties.exitAnimation]].
		 * @param removeElement   Function that removes the element from the DOM.
		 *                        This argument is provided purely for convenience.
		 *                        You may use this function to remove the element when the animation is done.
		 */
		exit(element: Element, properties: VNodeProperties, exitAnimation: string, removeElement: () => void): void;
	}

	/**
	 * A virtual representation of a DOM Node. Maquette assumes that [[VNode]] objects are never modified externally.
	 * Instances of [[VNode]] can be created using [[h]].
	 */
	export interface VNode {
		/**
		 * The CSS selector containing tagname, css classnames and id. An empty string is used to denote a text node.
		 */
		readonly vnodeSelector: string;
		/**
		 * Object containing attributes, properties, event handlers and more, see [[h]].
		 */
		readonly properties: VNodeProperties | undefined;
		/**
		 * Array of [[VNode]]s to be used as children. This array is already flattened.
		 */
		readonly children: Array<VNode> | undefined;
		/**
		 * Used in a special case when a [[VNode]] only has one childnode which is a textnode. Only used in combination with children === undefined.
		 */
		readonly text: string | undefined;
		/**
		 * Used by maquette to store the domNode that was produced from this [[VNode]].
		 */
		domNode: Node | null;
	}

	/**
	 * Object containing attributes, properties, event handlers and more that can be put on DOM nodes.
	 *
	 * For your convenience, all common attributes, properties and event handlers are listed here and are
	 * type-checked when using Typescript.
	 */
	export interface VNodeProperties {
		/**
		 * The animation to perform when this node is added to an already existing parent.
		 * When this value is a string, you must pass a `projectionOptions.transitions` object when creating the
		 * projector using [[createProjector]].
		 * {@link http://maquettejs.org/docs/animations.html|More about animations}.
		 * @param element - Element that was just added to the DOM.
		 * @param properties - The properties object that was supplied to the [[h]] method
		 */
		enterAnimation?: ((element: Element, properties?: VNodeProperties) => void) | string;
		/**
		 * The animation to perform when this node is removed while its parent remains.
		 * When this value is a string, you must pass a `projectionOptions.transitions` object when creating the projector using [[createProjector]].
		 * {@link http://maquettejs.org/docs/animations.html|More about animations}.
		 * @param element - Element that ought to be removed from to the DOM.
		 * @param removeElement - Function that removes the element from the DOM.
		 * This argument is provided purely for convenience.
		 * You may use this function to remove the element when the animation is done.
		 * @param properties - The properties object that was supplied to the [[h]] method that rendered this [[VNode]] the previous time.
		 */
		exitAnimation?: ((element: Element, removeElement: () => void, properties?: VNodeProperties) => void) | string;
		/**
		 * The animation to perform when the properties of this node change.
		 * This also includes attributes, styles, css classes. This callback is also invoked when node contains only text and that text changes.
		 * {@link http://maquettejs.org/docs/animations.html|More about animations}.
		 * @param element - Element that was modified in the DOM.
		 * @param properties - The last properties object that was supplied to the [[h]] method
		 * @param previousProperties - The previous properties object that was supplied to the [[h]] method
		 */
		updateAnimation?: (element: Element, properties?: VNodeProperties, previousProperties?: VNodeProperties) => void;
		/**
		 * Callback that is executed after this node is added to the DOM. Childnodes and properties have
		 * already been applied.
		 * @param element - The element that was added to the DOM.
		 * @param projectionOptions - The projection options that were used see [[createProjector]].
		 * @param vnodeSelector - The selector passed to the [[h]] function.
		 * @param properties - The properties passed to the [[h]] function.
		 * @param children - The children that were created.
		 */
		afterCreate?(element: Element, projectionOptions: ProjectionOptions, vnodeSelector: string, properties: VNodeProperties,
		children: VNode[]): void;
		/**
		 * Callback that is executed every time this node may have been updated. Childnodes and properties
		 * have already been updated.
		 * @param element - The element that may have been updated in the DOM.
		 * @param projectionOptions - The projection options that were used see [[createProjector]].
		 * @param vnodeSelector - The selector passed to the [[h]] function.
		 * @param properties - The properties passed to the [[h]] function.
		 * @param children - The children for this node.
		 */
		afterUpdate?(element: Element, projectionOptions: ProjectionOptions, vnodeSelector: string, properties: VNodeProperties,
		children: VNode[]): void;
		/**
		 * When specified, the event handlers will be invoked with 'this' pointing to the value.
		 * This is useful when using the prototype/class based implementation of Components.
		 *
		 * When no [[key]] is present, this object is also used to uniquely identify a DOM node.
		 */
		readonly bind?: Object;
		/**
		 * Used to uniquely identify a DOM node among siblings.
		 * A key is required when there are more children with the same selector and these children are added or removed dynamically.
		 * NOTE: this does not have to be a string or number, a [[Component]] Object for instance is also possible.
		 */
		readonly key?: Object;
		/**
		 * An object literal like `{important:true}` which allows css classes, like `important` to be added and removed
		 * dynamically.
		 */
		readonly classes?: { [index: string]: boolean | null | undefined };
		/**
		 * An object literal like `{height:'100px'}` which allows styles to be changed dynamically. All values must be strings.
		 */
		readonly styles?: { [index: string]: string | null | undefined };

		// From Element
		ontouchcancel?(ev?: TouchEvent): boolean | void;
		ontouchend?(ev?: TouchEvent): boolean | void;
		ontouchmove?(ev?: TouchEvent): boolean | void;
		ontouchstart?(ev?: TouchEvent): boolean | void;
		// From HTMLFormElement
		readonly action?: string;
		readonly encoding?: string;
		readonly enctype?: string;
		readonly method?: string;
		readonly name?: string;
		readonly target?: string;
		// From HTMLElement
		onblur?(ev?: FocusEvent): boolean | void;
		onchange?(ev?: Event): boolean | void;
		onclick?(ev?: MouseEvent): boolean | void;
		ondblclick?(ev?: MouseEvent): boolean | void;
		onfocus?(ev?: FocusEvent): boolean | void;
		oninput?(ev?: Event): boolean | void;
		onkeydown?(ev?: KeyboardEvent): boolean | void;
		onkeypress?(ev?: KeyboardEvent): boolean | void;
		onkeyup?(ev?: KeyboardEvent): boolean | void;
		onload?(ev?: Event): boolean | void;
		onmousedown?(ev?: MouseEvent): boolean | void;
		onmouseenter?(ev?: MouseEvent): boolean | void;
		onmouseleave?(ev?: MouseEvent): boolean | void;
		onmousemove?(ev?: MouseEvent): boolean | void;
		onmouseout?(ev?: MouseEvent): boolean | void;
		onmouseover?(ev?: MouseEvent): boolean | void;
		onmouseup?(ev?: MouseEvent): boolean | void;
		onmousewheel?(ev?: WheelEvent | MouseWheelEvent): boolean | void;
		onscroll?(ev?: UIEvent): boolean | void;
		onsubmit?(ev?: Event): boolean | void;
		readonly spellcheck?: boolean;
		readonly tabIndex?: number;
		readonly disabled?: boolean;
		readonly title?: string;
		readonly accessKey?: string;
		readonly id?: string;
		// From HTMLInputElement
		readonly type?: string;
		readonly autocomplete?: string;
		readonly checked?: boolean;
		readonly placeholder?: string;
		readonly readOnly?: boolean;
		readonly src?: string;
		readonly value?: string;
		// From HTMLImageElement
		readonly alt?: string;
		readonly srcset?: string;
		/**
		 * Puts a non-interactive piece of html inside the DOM node.
		 *
		 * Note: if you use innerHTML, maquette cannot protect you from XSS vulnerabilities and you must make sure that the innerHTML value is safe.
		 */
		readonly innerHTML?: string;

		/**
		 * Everything that is not explicitly listed (properties and attributes that are either uncommon or custom).
		 */
		readonly [index: string]: any;
	}

}
declare module 'leadfoot/node_modules/@dojo/interfaces/abilities' {
	/**
	 * This definition module contains interfaces that are partial interfaces of likely larger interfaces
	 * which have a very narrow ability which the a consumer might want to guard against or interface with
	 *
	 * It is very unlikely that these interfaces would be actually implemented as they stand
	 */

	import Promise from 'leadfoot/node_modules/@dojo/shim/Promise';
	import Map from  'leadfoot/node_modules/@dojo/shim/Map';
	import Observable from  'leadfoot/node_modules/@dojo/shim/Observable';
	import { Destroyable, EventedListener } from 'leadfoot/node_modules/@dojo/interfaces/bases';
	import { EventTargettedObject, Handle } from 'leadfoot/node_modules/@dojo/interfaces/core';
	import { VNode } from 'leadfoot/node_modules/@dojo/interfaces/vdom';

	/**
	 * The abstract interface for items that are Actionable
	 */
	export interface Actionable<T, E extends EventTargettedObject<T>> {
		/**
		 * The *do* method of an Action, which can take a `options` property of an `event`
		 *
		 * @param options Options passed which includes an `event` object
		 */
		do(options?: ActionableOptions<T, E>): any;
	}

	/**
	 * A base interface for typing the options which are passed to an Actionable
	 */
	export interface ActionableOptions<T, E extends EventTargettedObject<T>> {
		[ option: string ]: any;

		/**
		 * An event object
		 */
		event: E;
	}

	export interface Invalidatable {
		/**
		 * Signal to the instance that it is in an invalide state
		 */
		invalidate(): void;

		/**
		 * Attach a listener to the invalidated event, which is emitted when the `.invalidate()` method is called
		 *
		 * @param type The event type to listen for
		 * @param listener The listener to call when the event is emitted
		 */
		on(type: 'invalidated', listener: EventedListener<Renderable, EventTargettedObject<Renderable>>): Handle;
	}

	export interface Renderable extends Destroyable, Invalidatable {
		/**
		 * The ID of the child
		 */
		readonly id: string;

		/**
		 * Takes no arguments and returns a VNode
		 */
		render(): VNode;

		/**
		 * The tag name to be used
		 */
		tagName: string;
	}

	export interface RenderableParent extends Renderable {
		/**
		 * Append the child to the children which are managed by the parent
		 *
		 * @param child The child to append
		 */
		append(child: Renderable[] | Renderable): Handle;

		/* TODO: Add Insert API */

		/**
		 * The immutable list of children *owned* by the parent
		 */
		readonly children: Map<string, Renderable>;
	}

	export interface ObservableStore<T> {
		/**
		 * A method that allows the return of an `Observable` interface for a particular `id`
		 * @param id The ID to observe
		 */
		observe(id: string): Observable<T>;

		/**
		 * A method to retrieve item(s) by ids
		 * @param ids The IDs of the item(s)
		 */
		get(ids: string | string[]): Promise<T | undefined | T[]>;
	}

	export type ObservablePatchableStore<T> = ObservableStore<T> & PatchableStore<T>;

	export interface PatchableStore<T> {
		/**
		 * A method that allows an partial object to be passed to patch the object
		 * and receive the full object back as a resolution to a Promise
		 * @param partial The partial object to be *patched*
		 * @param options A map of options, which includes the `id` being patched
		 */
		patch(partial: any, options?: { id?: string }): Promise<T>;
	}

}
declare module 'leadfoot/node_modules/@dojo/interfaces/bases' {
	/**
	 * These are the bases of the Dojo 2 class system, where the most common functionality is located.
	 *
	 * These interfaces will have specific implementations but likely have significant cross cutting concerns
	 * and therefore are extracted out into this package.
	 */

	import Promise from 'leadfoot/node_modules/@dojo/shim/Promise';
	import { Actionable } from 'leadfoot/node_modules/@dojo/interfaces/abilities';
	import { EventErrorObject, EventObject, EventTargettedObject, EventTypedObject, Handle } from 'leadfoot/node_modules/@dojo/interfaces/core';

	export interface Destroyable {
		/**
		 * Take a handle and *own* it, which ensures that the handle's `destroy()` method is called when the
		 * *owner* is destroyed.
		 *
		 * @param handle The handle to own
		 * @returns A handle to *unown* the passed handle
		 */
		own(handle: Handle): Handle;

		/**
		 * Invoke `destroy()` on any owned handles.
		 *
		 * @returns A promise that resolves to `true` if successful, otherwise `false`
		 */
		destroy(): Promise<boolean>;
	}

	/**
	 * A base class, which provides the functionality of emitting events and attaching listeners to those
	 * events
	 */
	export interface Evented extends Destroyable {
		/**
		 * Emit an event.
		 *
		 * The event is determined by the `event.type`, if there are no listeners for an event type,
		 * `emit` is essentially a noop.
		 *
		 * @param event The `EventTargettedObject` to be delivered to listeners based on `event.type`
		 */
		emit<E extends EventObject>(event: E): void;

		/**
		 * Attach a map to events *types* specified by the key of the map and the value being the *listener* or
		 * array of *listeners*.
		 *
		 * @param listeners An object which contains key value pairs of event types and listeners.
		 * @returns A handle which can be used to remove the listeners
		 */
		on<T>(listeners: EventedListenersMap<T>): Handle;

		/**
		 * Attach a listener (or array of listeners) to an `error` event.
		 *
		 * @param type The type of event to listen for (`error`)
		 * @param listener A listener or array of listeners that accept error events
		 * @returns A handle which can be used to remove the listeners
		 */
		on<T extends Evented>(type: 'error', listener: EventedListenerOrArray<T, EventErrorObject<T>>): Handle;

		/**
		 * Attach a `listener` to a particular event `type`.
		 *
		 * @param type The event to attach the listener to
		 * @param listener Either a function which takes an emitted `event` object, something that is `Actionable`,
		 *                 or an array of of such listeners.
		 * @returns A handle which can be used to remove the listener
		 */
		on<T>(type: string, listener: EventedListenerOrArray<T, EventTargettedObject<T>>): Handle;
	}

	/**
	 * Evented options interface
	 */
	export interface EventedOptions {
		listeners?: EventedListenersMap<any>;
	}

	export interface EventedCallback<E extends EventObject> {
		/**
		 * A callback that takes an `event` argument
		 *
		 * @param event The event object
		 */
		(event: E): boolean | void;
	}

	/**
	 * Either an EventedCallback or an Actionable, which are valid listeners for Evented events
	 */
	export type EventedListener<T, E extends EventTargettedObject<T>> = EventedCallback<E> | Actionable<T, E>;

	/**
	 * A map of listeners to be applied, where the key of the map is the `event.type` to listen for
	 */
	export interface EventedListenersMap<T> {
		[type: string]: EventedListenerOrArray<T, EventTargettedObject<T>>;
	}

	/**
	 * A type which is either a targeted event listener or an array of listeners
	 * @template T The type of target for the events
	 * @template E The event type for the events
	 */
	export type EventedListenerOrArray<T, E extends EventTargettedObject<T>> = EventedListener<T, E> | EventedListener<T, E>[];

	export interface StateChangeEvent<S, T extends Stateful<S>> extends EventTypedObject<'state:changed'> {
		/**
		 * The state of the target
		 */
		state: S;

		/**
		 * A Stateful instance
		 */
		target: T;
	}

	export interface State {
		[index: string]: any;
	}

	/**
	 * The stateful mixin interface
	 */
	export interface StatefulMixin<S extends State> extends Evented {
		/**
		 * A state of the instannce
		 */
		readonly state: S;

		/**
		 * Set the state on the instance.
		 *
		 * Set state can take a partial value, therefore if a key is ommitted from the value, it will not be changed.
		 * To *clear* a value, set a key to `undefined`
		 *
		 * @param value The state (potentially partial) to be set
		 */
		setState(state: Partial<S>): void;
	}

	/**
	 * Stateful type
	 */
	export type Stateful<S extends State> = StatefulMixin<S> & {
		/**
		 * Add a listener for a `state:changed` event, which occurs whenever the state changes on the instance.
		 *
		 * @param type The event type to listen for
		 * @param listener The listener that will be called when the event occurs
		 */
		on(type: 'state:changed', listener: EventedListener<Stateful<S>, StateChangeEvent<S, Stateful<S>>>): Handle;
	};

	/**
	 * Options for a stateful object
	 */
	export interface StatefulOptions<S extends State> extends EventedOptions {}

}
declare module 'leadfoot/node_modules/@dojo/core/Destroyable' {
	import { Handle } from 'leadfoot/node_modules/@dojo/interfaces/core';
	import Promise from 'leadfoot/node_modules/@dojo/shim/Promise';
	export class Destroyable {
	    /**
	     * register handles for the instance
	     */
	    private handles;
	    /**
	     * @constructor
	     */
	    constructor();
	    /**
	     * Register handles for the instance that will be destroyed when `this.destroy` is called
	     *
	     * @param {Handle} handle The handle to add for the instance
	     * @returns {Handle} a handle for the handle, removes the handle for the instance and calls destroy
	     */
	    own(handle: Handle): Handle;
	    /**
	     * Destrpys all handers registered for the instance
	     *
	     * @returns {Promise<any} a promise that resolves once all handles have been destroyed
	     */
	    destroy(): Promise<any>;
	}
	export default Destroyable;

}
declare module 'leadfoot/node_modules/@dojo/core/Evented' {
	import { EventedListenerOrArray, EventedListenersMap, EventedCallback } from 'leadfoot/node_modules/@dojo/interfaces/bases';
	import { EventObject, EventTargettedObject, EventErrorObject, Handle } from 'leadfoot/node_modules/@dojo/interfaces/core';
	import Map from  'leadfoot/node_modules/@dojo/shim/Map';
	import { Destroyable } from 'leadfoot/node_modules/@dojo/core/Destroyable';
	/**
	 * Interface for Evented constructor options
	 */
	export interface EventedOptions {
	    /**
	     * Optional listeners to add
	     */
	    listeners?: EventedListenersMap<any>;
	}
	export interface BaseEventedEvents {
	    /**
	     * Regsister a callback for a specific event type
	     *
	     * @param listeners map of listeners
	     */
	    (listeners: EventedListenersMap<Evented>): Handle;
	    /**
	     * @param type the type of the event
	     * @param listener the listener to attach
	     */
	    (type: string, listener: EventedListenerOrArray<Evented, EventTargettedObject<Evented>>): Handle;
	    /**
	     * @param type the type for `error`
	     * @param listener the listener to attach
	     */
	    (type: 'error', listener: EventedListenerOrArray<Evented, EventErrorObject<Evented>>): Handle;
	}
	export interface Evented {
	    on: BaseEventedEvents;
	}
	/**
	 * Determines is the event type glob has been matched
	 *
	 * @returns boolean that indicates if the glob is matched
	 */
	export function isGlobMatch(globString: string, targetString: string): boolean;
	/**
	 * Event Class
	 */
	export class Evented extends Destroyable implements Evented {
	    /**
	     * map of listeners keyed by event type
	     */
	    protected listenersMap: Map<string, EventedCallback<EventObject>>;
	    /**
	     * @constructor
	     * @param options The constructor argurments
	     */
	    constructor(options?: EventedOptions);
	    /**
	     * Emits the event objet for the specified type
	     *
	     * @param event the event to emit
	     */
	    emit<E extends EventObject>(event: E): void;
	    /**
	     * Catch all handler for various call signatures. The signatures are defined in
	     * `BaseEventedEvents`.  You can add your own event type -> handler types by extending
	     * `BaseEventedEvents`.  See example for details.
	     *
	     * @param args
	     *
	     * @example
	     *
	     * interface WidgetBaseEvents extends BaseEventedEvents {
	     *     (type: 'properties:changed', handler: PropertiesChangedHandler): Handle;
	     * }
	     * class WidgetBase extends Evented {
	     *    on: WidgetBaseEvents;
	     * }
	     *
	     * @return {any}
	     */
	    on: BaseEventedEvents;
	}
	export default Evented;

}
declare module 'leadfoot/node_modules/@dojo/core/UrlSearchParams' {
	import { Hash } from 'leadfoot/node_modules/@dojo/interfaces/core';
	/**
	 * Object with string keys and string or string array values that describes a query string.
	 */
	export type ParamList = Hash<string | string[]>;
	/**
	 * Represents a set of URL query search parameters.
	 */
	export default class UrlSearchParams {
	    /**
	     * Constructs a new UrlSearchParams from a query string, an object of parameters and values, or another
	     * UrlSearchParams.
	     */
	    constructor(input?: string | ParamList | UrlSearchParams);
	    /**
	     * Maps property keys to arrays of values. The value for any property that has been set will be an array containing
	     * at least one item. Properties that have been deleted will have a value of 'undefined'.
	     */
	    protected readonly _list: Hash<string[] | undefined>;
	    /**
	     * Appends a new value to the set of values for a key.
	     * @param key The key to add a value for
	     * @param value The value to add
	     */
	    append(key: string, value: string): void;
	    /**
	     * Deletes all values for a key.
	     * @param key The key whose values are to be removed
	     */
	    delete(key: string): void;
	    /**
	     * Returns the first value associated with a key.
	     * @param key The key to return the first value for
	     * @return The first string value for the key
	     */
	    get(key: string): string | undefined;
	    /**
	     * Returns all the values associated with a key.
	     * @param key The key to return all values for
	     * @return An array of strings containing all values for the key
	     */
	    getAll(key: string): string[] | undefined;
	    /**
	     * Returns true if a key has been set to any value, false otherwise.
	     * @param key The key to test for existence
	     * @return A boolean indicating if the key has been set
	     */
	    has(key: string): boolean;
	    /**
	     * Returns an array of all keys which have been set.
	     * @return An array of strings containing all keys set in the UrlSearchParams instance
	     */
	    keys(): string[];
	    /**
	     * Sets the value associated with a key.
	     * @param key The key to set the value of
	     */
	    set(key: string, value: string): void;
	    /**
	     * Returns this object's data as an encoded query string.
	     * @return A string in application/x-www-form-urlencoded format containing all of the set keys/values
	     */
	    toString(): string;
	}

}
declare module 'leadfoot/node_modules/@dojo/core/request/interfaces' {
	import { EventedListenerOrArray } from 'leadfoot/node_modules/@dojo/interfaces/bases';
	import { Handle } from 'leadfoot/node_modules/@dojo/interfaces/core';
	import { IterableIterator } from 'leadfoot/node_modules/@dojo/shim/iterator';
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import { BaseEventedEvents, Evented } from 'leadfoot/node_modules/@dojo/core/Evented';
	import UrlSearchParams, { ParamList } from 'leadfoot/node_modules/@dojo/core/UrlSearchParams';

	export interface Body {
		readonly bodyUsed: boolean;

		arrayBuffer(): Task<ArrayBuffer>;
		blob(): Task<Blob>;
		formData(): Task<FormData>;
		json<T>(): Task<T>;
		text(): Task<string>;
	}

	export interface Headers {
		append(name: string, value: string): void;
		delete(name: string): void;
		entries(): IterableIterator<[string, string]>;
		get(name: string): string | null;
		getAll(name: string): string[];
		has(name: string): boolean;
		keys(): IterableIterator<string>;
		set(name: string, value: string): void;
		values(): IterableIterator<string>;
		[Symbol.iterator](): IterableIterator<[string, string]>;
	}

	interface ResponseEvent {
		response: Response;
		target: any;
	}

	export interface DataEvent extends ResponseEvent {
		type: 'data';
		chunk: any;
	}

	export interface EndEvent extends ResponseEvent {
		type: 'end';
	}

	export interface ProgressEvent extends ResponseEvent {
		type: 'progress';
		totalBytesDownloaded: number;
	}

	export interface StartEvent extends ResponseEvent {
		type: 'start';
	}

	export type Provider = (url: string, options?: RequestOptions) => Task<Response>;

	export type ProviderTest = (url: string, options?: RequestOptions) => boolean | null;

	export interface RequestOptions {
		cacheBust?: boolean;
		credentials?: 'omit' | 'same-origin' | 'include';
		body?: Blob | BufferSource | FormData | UrlSearchParams | string;
		headers?: Headers | { [key: string]: string; };
		method?: string;
		password?: string;
		timeout?: number;
		user?: string;
		query?: string | ParamList;
	}

	export interface ResponseEvents extends BaseEventedEvents {
		(type: 'data', handler: EventedListenerOrArray<Evented, DataEvent>): Handle;
		(type: 'end', handler: EventedListenerOrArray<Evented, EndEvent>): Handle;
		(type: 'progress', handler: EventedListenerOrArray<Evented, ProgressEvent>): Handle;
		(type: 'start', handler: EventedListenerOrArray<Evented, StartEvent>): Handle;
	}

	export interface Response extends Body {
		readonly headers: Headers;
		readonly ok: boolean;
		readonly status: number;
		readonly statusText: string;
		readonly url: string;

		on: ResponseEvents;
	}

}
declare module 'leadfoot/node_modules/@dojo/core/MatchRegistry' {
	import { Handle } from 'leadfoot/node_modules/@dojo/interfaces/core';
	/**
	 * A registry of values tagged with matchers.
	 */
	export default class MatchRegistry<T> {
	    protected _defaultValue: T | undefined;
	    private readonly _entries;
	    /**
	     * Construct a new MatchRegistry, optionally containing a given default value.
	     */
	    constructor(defaultValue?: T);
	    /**
	     * Return the first entry in this registry that matches the given arguments. If no entry matches and the registry
	     * was created with a default value, that value will be returned. Otherwise, an exception is thrown.
	     *
	     * @param ...args Arguments that will be used to select a matching value.
	     * @returns the matching value, or a default value if one exists.
	     */
	    match(...args: any[]): T;
	    /**
	     * Register a test + value pair with this registry.
	     *
	     * @param test The test that will be used to determine if the registered value matches a set of arguments.
	     * @param value A value being registered.
	     * @param first If true, the newly registered test and value will be the first entry in the registry.
	     */
	    register(test: Test | null, value: T | null, first?: boolean): Handle;
	}
	/**
	 * The interface that a test function must implement.
	 */
	export interface Test {
	    (...args: any[]): boolean | null;
	}

}
declare module 'leadfoot/node_modules/@dojo/core/request/ProviderRegistry' {
	import { Provider, ProviderTest } from 'leadfoot/node_modules/@dojo/core/request/interfaces';
	import MatchRegistry from 'leadfoot/node_modules/@dojo/core/MatchRegistry';
	import { Handle } from 'leadfoot/node_modules/@dojo/interfaces/core';
	export default class ProviderRegistry extends MatchRegistry<Provider> {
	    setDefaultProvider(provider: Provider): void;
	    register(test: string | RegExp | ProviderTest | null, value: Provider, first?: boolean): Handle;
	}

}
declare module 'leadfoot/node_modules/@dojo/core/request/Headers' {
	import { Headers as HeadersInterface } from 'leadfoot/node_modules/@dojo/core/request/interfaces';
	import { IterableIterator } from 'leadfoot/node_modules/@dojo/shim/iterator';
	import Map from  'leadfoot/node_modules/@dojo/shim/Map';
	export default class Headers implements HeadersInterface {
	    protected map: Map<string, string[]>;
	    constructor(headers?: {
	        [key: string]: string;
	    } | HeadersInterface);
	    append(name: string, value: string): void;
	    delete(name: string): void;
	    entries(): IterableIterator<[string, string]>;
	    get(name: string): string | null;
	    getAll(name: string): string[];
	    has(name: string): boolean;
	    keys(): IterableIterator<string>;
	    set(name: string, value: string): void;
	    values(): IterableIterator<string>;
	    [Symbol.iterator](): IterableIterator<[string, string]>;
	}

}
declare module 'leadfoot/node_modules/@dojo/core/request/TimeoutError' {
	export default class TimeoutError implements Error {
	    readonly message: string;
	    readonly name: string;
	    constructor(message?: string);
	}

}
declare module 'leadfoot/node_modules/@dojo/core/QueuingEvented' {
	import { EventObject } from 'leadfoot/node_modules/@dojo/interfaces/core';
	import Evented from 'leadfoot/node_modules/@dojo/core/Evented';
	/**
	 * An implementation of the Evented class that queues up events when no listeners are
	 * listening. When a listener is subscribed, the queue will be published to the listener.
	 * When the queue is full, the oldest events will be discarded to make room for the newest ones.
	 *
	 * @property maxEvents  The number of events to queue before old events are discarded. If zero (default), an unlimited number of events is queued.
	 */
	export default class QueuingEvented extends Evented {
	    private _queue;
	    private _originalOn;
	    maxEvents: number;
	    constructor();
	    emit<E extends EventObject>(event: E): void;
	}

}
declare module 'leadfoot/node_modules/@dojo/core/request/Response' {
	import Promise from 'leadfoot/node_modules/@dojo/shim/Promise';
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import QueuingEvented from 'leadfoot/node_modules/@dojo/core/QueuingEvented';
	import Headers from 'leadfoot/node_modules/@dojo/core/request/Headers';
	import { Response as ResponseInterface, RequestOptions } from 'leadfoot/node_modules/@dojo/core/request/interfaces';
	export interface ResponseData {
	    task: Task<any>;
	    used: boolean;
	} abstract class Response extends QueuingEvented implements ResponseInterface {
	    readonly abstract headers: Headers;
	    readonly abstract ok: boolean;
	    readonly abstract status: number;
	    readonly abstract statusText: string;
	    readonly abstract url: string;
	    readonly abstract bodyUsed: boolean;
	    readonly requestOptions: RequestOptions;
	    json<T>(): Task<T>;
	    abstract arrayBuffer(): Task<ArrayBuffer>;
	    abstract blob(): Task<Blob>;
	    abstract formData(): Task<FormData>;
	    abstract text(): Task<string>;
	}
	export default Response;
	export function getFileReaderPromise<T>(reader: FileReader): Promise<T>;
	export function getTextFromBlob(blob: Blob): Promise<string>;
	export function getArrayBufferFromBlob(blob: Blob): Promise<ArrayBuffer>;
	export function getTextFromArrayBuffer(buffer: ArrayBuffer): string;

}
declare module 'leadfoot/node_modules/@dojo/core/request' {
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import { RequestOptions, Response, Provider } from 'leadfoot/node_modules/@dojo/core/request/interfaces';
	import ProviderRegistry from 'leadfoot/node_modules/@dojo/core/request/ProviderRegistry';
	export const providerRegistry: ProviderRegistry; const request: {
	    (url: string, options?: RequestOptions): Task<Response>;
	    delete(url: string, options?: RequestOptions): Task<Response>;
	    get(url: string, options?: RequestOptions): Task<Response>;
	    head(url: string, options?: RequestOptions): Task<Response>;
	    options(url: string, options?: RequestOptions): Task<Response>;
	    post(url: string, options?: RequestOptions): Task<Response>;
	    put(url: string, options?: RequestOptions): Task<Response>;
	    setDefaultProvider(provider: Provider): void;
	};
	export default request;
	export * from 'leadfoot/node_modules/@dojo/core/request/interfaces';
	export { default as Headers } from 'leadfoot/node_modules/@dojo/core/request/Headers';
	export { default as TimeoutError } from 'leadfoot/node_modules/@dojo/core/request/TimeoutError';
	export { default as Response, ResponseData } from 'leadfoot/node_modules/@dojo/core/request/Response';

}
declare module 'leadfoot/node_modules/@dojo/core/request/providers/node' {
	/// <reference types="node" />
	import * as http from 'http';
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import Headers from 'leadfoot/node_modules/@dojo/core/request/Headers';
	import { RequestOptions } from 'leadfoot/node_modules/@dojo/core/request/interfaces';
	import Response from 'leadfoot/node_modules/@dojo/core/request/Response';
	/**
	 * Request options specific to a node request
	 */
	export interface NodeRequestOptions extends RequestOptions {
	    agent?: any;
	    ca?: any;
	    cert?: string;
	    ciphers?: string;
	    dataEncoding?: string;
	    followRedirects?: boolean;
	    key?: string;
	    localAddress?: string;
	    passphrase?: string;
	    pfx?: any;
	    proxy?: string;
	    rejectUnauthorized?: boolean;
	    secureProtocol?: string;
	    socketPath?: string;
	    acceptCompression?: boolean;
	    socketOptions?: {
	        keepAlive?: number;
	        noDelay?: boolean;
	        timeout?: number;
	    };
	    streamEncoding?: string;
	    redirectOptions?: {
	        limit?: number;
	        count?: number;
	        keepOriginalMethod?: boolean;
	    };
	}
	/**
	 * Turn a node native response object into something that resembles the fetch api
	 */
	export class NodeResponse extends Response {
	    readonly headers: Headers;
	    readonly ok: boolean;
	    readonly status: number;
	    readonly statusText: string;
	    downloadBody: boolean;
	    readonly bodyUsed: boolean;
	    readonly nativeResponse: http.IncomingMessage;
	    readonly requestOptions: NodeRequestOptions;
	    readonly url: string;
	    constructor(response: http.IncomingMessage);
	    arrayBuffer(): Task<ArrayBuffer>;
	    blob(): Task<Blob>;
	    formData(): Task<FormData>;
	    text(): Task<string>;
	}
	export function getAuth(proxyAuth: string | undefined, options: NodeRequestOptions): string | undefined;
	export default function node(url: string, options?: NodeRequestOptions): Task<Response>;

}
declare module 'leadfoot/src/interfaces' {
	/// <reference types="node" />
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import { Url } from 'url';
	export interface Capabilities {
	    _filled?: boolean;
	    applicationCacheEnabled?: boolean;
	    brokenActiveElement?: boolean;
	    brokenClick?: boolean;
	    brokenComputedStyles?: boolean;
	    brokenCookies?: boolean;
	    brokenCssTransformedSize?: boolean;
	    brokenDeleteCookie?: boolean;
	    brokenDeleteWindow?: boolean;
	    brokenDoubleClick?: boolean;
	    brokenElementDisplayedOffscreen?: boolean;
	    brokenElementDisplayedOpacity?: boolean;
	    brokenElementPosition?: boolean;
	    brokenElementSerialization?: boolean;
	    brokenEmptyPost?: boolean;
	    brokenExecuteElementReturn?: boolean;
	    brokenExecuteForNonHttpUrl?: boolean;
	    brokenExecuteUndefinedReturn?: boolean;
	    brokenFileSendKeys?: boolean;
	    brokenFlickFinger?: boolean;
	    brokenHtmlMouseMove?: boolean;
	    brokenHtmlTagName?: boolean;
	    brokenLinkTextLocator?: boolean;
	    brokenLongTap?: boolean;
	    brokenMouseEvents?: boolean;
	    brokenMoveFinger?: boolean;
	    brokenNavigation?: boolean;
	    brokenNullGetSpecAttribute?: boolean;
	    brokenOptionSelect?: boolean;
	    brokenPageSource?: boolean;
	    brokenParentFrameSwitch?: boolean;
	    brokenRefresh?: boolean;
	    brokenSendKeys?: boolean;
	    brokenSessionList?: boolean;
	    brokenSubmitElement?: boolean;
	    brokenTouchScroll?: boolean;
	    brokenWhitespaceNormalization?: boolean;
	    brokenWindowClose?: boolean;
	    brokenWindowPosition?: boolean;
	    brokenWindowSize?: boolean;
	    brokenWindowSwitch?: boolean;
	    brokenZeroTimeout?: boolean;
	    browserName?: string;
	    browserVersion?: string;
	    deviceName?: string;
	    dynamicViewport?: boolean;
	    fixSessionCapabilities?: 'no-detect' | boolean;
	    fixedLogTypes?: false | string[] | Task<string[]>;
	    handleAlerts?: boolean;
	    handlesAlerts?: boolean;
	    hasTouchScreen?: boolean;
	    implicitWindowHandles?: boolean;
	    initialBrowserUrl?: string;
	    isWebDriver?: boolean;
	    locationContextEnabled?: boolean;
	    mouseEnabled?: boolean;
	    nativeEvents?: boolean;
	    platform?: string;
	    platformName?: string;
	    platformVersion?: string;
	    remoteFiles?: boolean;
	    returnsFromClickImmediately?: boolean;
	    rotatable?: boolean;
	    scriptedParentFrameCrashesBrowser?: boolean;
	    shortcutKey?: any;
	    supportsCssTransforms?: boolean;
	    supportsExecuteAsync?: boolean;
	    supportsKeysCommand?: boolean;
	    supportsNavigationDataUris?: boolean;
	    supportsWindowRectCommand?: boolean;
	    takesScreenshot?: boolean;
	    touchEnabled?: boolean;
	    version?: string;
	    webStorageEnabled?: boolean;
	    [key: string]: any;
	}
	export interface Geolocation {
	    altitude?: number;
	    latitude?: number;
	    longitude?: number;
	}
	export interface LogEntry {
	    timestamp: number;
	    level: string;
	    message: string;
	}
	export interface Thenable<T> {
	    then<U>(onFulfilled?: (value?: T) => Thenable<U> | U, onRejected?: (error?: Error) => Thenable<U> | U): Thenable<U>;
	}
	export interface WebDriverCookie {
	    name: string;
	    value: string;
	    path?: string;
	    domain?: string;
	    secure?: boolean;
	    expiry?: string | Date | number;
	}
	export interface LeadfootURL extends Url {
	    username?: string;
	    password?: string;
	    accessKey?: string;
	}
	export interface LeadfootError extends Error {
	    response?: {
	        text: string;
	    };
	}

}
declare module 'leadfoot/src/Server' {
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import { RequestOptions } from 'leadfoot/node_modules/@dojo/core/request';
	import { NodeRequestOptions } from 'leadfoot/node_modules/@dojo/core/request/providers/node';
	import Session from 'leadfoot/src/Session';
	import { Capabilities, LeadfootURL } from 'leadfoot/src/interfaces';
	export default class Server {
	    url: string;
	    requestOptions: RequestOptions;
	    /**
	     * An alternative session constructor. Defaults to the standard [[Session]] constructor if
	     * one is not provided.
	     */
	    sessionConstructor: typeof Session;
	    /**
	     * Whether or not to detect and/or correct environnment capabilities when creating a new Server. If the value is
	     * "no-detect", capabilities will be updated with pre-known features and defects based on the platform, but no tests
	     * will be run.
	     */
	    fixSessionCapabilities: boolean | 'no-detect';
	    /**
	     * The Server class represents a remote HTTP server implementing the WebDriver wire protocol that can be used to
	     * generate new remote control sessions.
	     *
	     * @param url
	     * The fully qualified URL to the JsonWireProtocol endpoint on the server. The default endpoint for a
	     * JsonWireProtocol HTTP server is http://localhost:4444/wd/hub. You may also pass a parsed URL object which will
	     * be converted to a string.
	     * @param options
	     * Additional request options to be used for requests to the server.
	     */
	    constructor(url: string | LeadfootURL, options?: NodeRequestOptions);
	    /**
	     * A function that performs an HTTP request to a JsonWireProtocol endpoint and normalises response status and
	     * data.
	     *
	     * @param method
	     * The HTTP method to fix
	     *
	     * @param path
	     * The path-part of the JsonWireProtocol URL. May contain placeholders in the form `/\$\d/` that will be
	     * replaced by entries in the `pathParts` argument.
	     *
	     * @param requestData
	     * The payload for the request.
	     *
	     * @param pathParts Optional placeholder values to inject into the path of the URL.
	     */
	    private _sendRequest<T>(method, path, requestData, pathParts?);
	    get<T>(path: string, requestData?: Object, pathParts?: string[]): Task<any>;
	    post<T>(path: string, requestData?: Object, pathParts?: string[]): Task<any>;
	    delete<T>(path: string, requestData?: Object, pathParts?: string[]): Task<any>;
	    /**
	     * Gets the status of the remote server.
	     *
	     * @returns An object containing arbitrary properties describing the status of the remote
	     * server.
	     */
	    getStatus(): Task<any>;
	    /**
	     * Creates a new remote control session on the remote server.
	     *
	     * @param desiredCapabilities
	     * A hash map of desired capabilities of the remote environment. The server may return an environment that does
	     * not match all the desired capabilities if one is not available.
	     *
	     * @param requiredCapabilities
	     * A hash map of required capabilities of the remote environment. The server will not return an environment that
	     * does not match all the required capabilities if one is not available.
	     */
	    createSession<S extends Session>(desiredCapabilities: Capabilities, requiredCapabilities?: Capabilities): Task<S>;
	    /**
	     * Fill in known capabilities/defects and optionally run tests to detect more
	     */
	    private _fillCapabilities(session, detectCapabilities?);
	    /**
	     * Return capabilities and defects that don't require running tests
	     */
	    private _getKnownCapabilities(session);
	    /**
	     * Run tests to detect capabilities/defects
	     */
	    private _detectCapabilities(session);
	    /**
	     * Gets a list of all currently active remote control sessions on this server.
	     */
	    getSessions(): Task<Session[]>;
	    /**
	     * Gets information on the capabilities of a given session from the server. The list of capabilities returned
	     * by this command will not include any of the extra session capabilities detected by Leadfoot and may be
	     * inaccurate.
	     */
	    getSessionCapabilities(sessionId: string): Task<Capabilities>;
	    /**
	     * Terminates a session on the server.
	     */
	    deleteSession(sessionId: string): Task<void>;
	}
	export type Method = 'post' | 'get' | 'delete';

}
declare module 'leadfoot/src/lib/Locator' {
	 abstract class Locator<E, L, V> {
	    abstract find(strategy: Strategies, value: string): E;
	    abstract findAll(strategy: Strategies, value: string): L;
	    abstract findDisplayed(strategy: Strategies, value: string): E;
	    abstract waitForDeleted(strategy: Strategies, value: string): V;
	    /**
	     * Gets the first element inside this element matching the given CSS class name.
	     *
	     * @param className The CSS class name to search for.
	     */
	    findByClassName(className: string): E;
	    /**
	     * Gets the first element inside this element matching the given CSS selector.
	     *
	     * @param selector The CSS selector to search for.
	     */
	    findByCssSelector(selector: string): E;
	    /**
	     * Gets the first element inside this element matching the given ID.
	     *
	     * @param id The ID of the element.
	     */
	    findById(id: string): E;
	    /**
	     * Gets the first element inside this element matching the given name attribute.
	     *
	     * @param name The name of the element.
	     */
	    findByName(name: string): E;
	    /**
	     * Gets the first element inside this element matching the given case-insensitive link text.
	     *
	     * @param text The link text of the element.
	     */
	    findByLinkText(text: string): E;
	    /**
	     * Gets the first element inside this element partially matching the given case-insensitive link text.
	     *
	     * @param text The partial link text of the element.
	     */
	    findByPartialLinkText(text: string): E;
	    /**
	     * Gets the first element inside this element matching the given HTML tag name.
	     *
	     * @param tagName The tag name of the element.
	     */
	    findByTagName(tagName: string): E;
	    /**
	     * Gets the first element inside this element matching the given XPath selector.
	     *
	     * @param path The XPath selector to search for.
	     */
	    findByXpath(path: string): E;
	    /**
	     * Gets all elements inside this element matching the given CSS class name.
	     *
	     * @param className The CSS class name to search for.
	     */
	    findAllByClassName(className: string): L;
	    /**
	     * Gets all elements inside this element matching the given CSS selector.
	     *
	     * @param selector The CSS selector to search for.
	     */
	    findAllByCssSelector(selector: string): L;
	    /**
	     * Gets all elements inside this element matching the given name attribute.
	     *
	     * @param name The name of the element.
	     */
	    findAllByName(name: string): L;
	    /**
	     * Gets all elements inside this element matching the given case-insensitive link text.
	     *
	     * @param text The link text of the element.
	     */
	    findAllByLinkText(text: string): L;
	    /**
	     * Gets all elements inside this element partially matching the given case-insensitive link text.
	     *
	     * @param text The partial link text of the element.
	     */
	    findAllByPartialLinkText(text: string): L;
	    /**
	     * Gets all elements inside this element matching the given HTML tag name.
	     *
	     * @param tagName The tag name of the element.
	     */
	    findAllByTagName(tagName: string): L;
	    /**
	     * Gets all elements inside this element matching the given XPath selector.
	     *
	     * @param path The XPath selector to search for.
	     */
	    findAllByXpath(path: string): L;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * matching the given CSS class name. This is inherently slower than [[Element.find]], so should
	     * only be used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     * @param className The CSS class name to search for.
	     */
	    findDisplayedByClassName(className: string): E;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * matching the given CSS selector. This is inherently slower than [[Element.find]], so should
	     * only be used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     * @param selector The CSS selector to search for.
	     */
	    findDisplayedByCssSelector(selector: string): E;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * matching the given ID. This is inherently slower than [[Element.find]], so should
	     * only be used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     * @param id The ID of the element.
	     */
	    findDisplayedById(id: string): E;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * matching the given name attribute. This is inherently slower than [[Element.find]], so should
	     * only be used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     * @param name The name of the element.
	     */
	    findDisplayedByName(name: string): E;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * matching the given case-insensitive link text. This is inherently slower than [[Element.find]],
	     * so should only be used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     * @param text The link text of the element.
	     */
	    findDisplayedByLinkText(text: string): E;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * partially matching the given case-insensitive link text. This is inherently slower than
	     * [[Element.find]], so should only be used in cases where the visibility of an element cannot be
	     * ensured in advance.
	     *
	     * @since 1.6
	     * @param text The partial link text of the element.
	     */
	    findDisplayedByPartialLinkText(text: string): E;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * matching the given HTML tag name. This is inherently slower than [[Element.find]], so should
	     * only be used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     * @param tagName The tag name of the element.
	     */
	    findDisplayedByTagName(tagName: string): E;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * matching the given XPath selector. This is inherently slower than [[Element.find]], so should
	     * only be used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     * @param path The XPath selector to search for.
	     */
	    findDisplayedByXpath(path: string): E;
	    /**
	     * Waits for all elements inside this element matching the given CSS class name to be destroyed.
	     *
	     * @param className The CSS class name to search for.
	     */
	    waitForDeletedByClassName(className: string): V;
	    /**
	     * Waits for all elements inside this element matching the given CSS selector to be destroyed.
	     *
	     * @param selector The CSS selector to search for.
	     */
	    waitForDeletedByCssSelector(selector: string): V;
	    /**
	     * Waits for all elements inside this element matching the given ID to be destroyed.
	     *
	     * @param id The ID of the element.
	     */
	    waitForDeletedById(id: string): V;
	    /**
	     * Waits for all elements inside this element matching the given name attribute to be destroyed.
	     *
	     * @param name The name of the element.
	     */
	    waitForDeletedByName(name: string): V;
	    /**
	     * Waits for all elements inside this element matching the given case-insensitive link text to be destroyed.
	     *
	     * @param text The link text of the element.
	     */
	    waitForDeletedByLinkText(text: string): V;
	    /**
	     * Waits for all elements inside this element partially matching the given case-insensitive link text to be
	     * destroyed.
	     *
	     * @param text The partial link text of the element.
	     */
	    waitForDeletedByPartialLinkText(text: string): V;
	    /**
	     * Waits for all elements inside this element matching the given HTML tag name to be destroyed.
	     *
	     * @param tagName The tag name of the element.
	     */
	    waitForDeletedByTagName(tagName: string): V;
	    /**
	     * Waits for all elements inside this element matching the given XPath selector to be destroyed.
	     *
	     * @param path The XPath selector to search for.
	     */
	    waitForDeletedByXpath(path: string): V;
	}
	export default Locator;
	export const strategies: {
	    'class name': boolean;
	    'css selector': boolean;
	    'id': boolean;
	    'name': boolean;
	    'link text': boolean;
	    'partial link text': boolean;
	    'tag name': boolean;
	    'xpath': boolean;
	};
	export type Strategies = keyof typeof strategies;
	export function toW3cLocator(using: string, value: string): {
	    using: string;
	    value: string;
	};

}
declare module 'leadfoot/src/lib/waitForDeleted' {
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import Session from 'leadfoot/src/Session';
	import Element from 'leadfoot/src/Element';
	export default function waitForDeleted(session: Session, locator: Session | Element, strategy: string, value: string): Task<void>;

}
declare module 'leadfoot/src/Session' {
	/// <reference types="node" />
	import Element from 'leadfoot/src/Element';
	import Server from 'leadfoot/src/Server';
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import statusCodes from 'leadfoot/src/lib/statusCodes';
	import Locator from 'leadfoot/src/lib/Locator';
	import { Capabilities, Geolocation, LogEntry, WebDriverCookie } from 'leadfoot/src/interfaces';
	export default class Session extends Locator<Task<Element>, Task<Element[]>, Task<void>> {
	    private _sessionId;
	    private _server;
	    private _capabilities;
	    private _closedWindows;
	    private _timeouts;
	    private _movedToElement;
	    private _lastMousePosition;
	    private _lastAltitude;
	    private _nextRequest;
	    /**
	     * A Session represents a connection to a remote environment that can be driven programmatically.
	     *
	     * @param sessionId The ID of the session, as provided by the remote.
	     * @param server The server that the session belongs to.
	     * @param capabilities A map of bugs and features that the remote environment exposes.
	     */
	    constructor(sessionId: string, server: Server, capabilities: Capabilities);
	    /**
	     * Information about the available features and bugs in the remote environment.
	     *
	     * @readonly
	     */
	    readonly capabilities: Capabilities;
	    /**
	     * The current session ID.
	     *
	     * @readonly
	     */
	    readonly sessionId: string;
	    /**
	     * The Server that the session runs on.
	     *
	     * @readonly
	     */
	    readonly server: Server;
	    /**
	     * Delegates the HTTP request for a method to the underlying [[Server]] object.
	     *
	     * @private
	     */
	    private _delegateToServer<T>(method, path, requestData, pathParts?);
	    serverGet<T>(path: string, requestData?: any, pathParts?: string[]): Task<T>;
	    serverPost<T>(path: string, requestData?: any, pathParts?: string[]): Task<T>;
	    serverDelete<T>(path: string, requestData?: any, pathParts?: string[]): Task<T>;
	    /**
	     * Gets the current value of a timeout for the session.
	     *
	     * @param type The type of timeout to retrieve. One of 'script', 'implicit', or 'page load'.
	     * @returns The timeout, in milliseconds.
	     */
	    getTimeout(type: string): Task<number>;
	    /**
	     * Sets the value of a timeout for the session.
	     *
	     * @param type
	     * The type of timeout to set. One of 'script', 'implicit', or 'page load'.
	     *
	     * @param ms
	     * The length of time to use for the timeout, in milliseconds. A value of 0 will cause operations to time out
	     * immediately.
	     */
	    setTimeout(type: string, ms: number): Task<void>;
	    /**
	     * Gets the identifier for the window that is currently focused.
	     *
	     * @returns A window handle identifier that can be used with other window handling functions.
	     */
	    getCurrentWindowHandle(): Task<string>;
	    /**
	     * Gets a list of identifiers for all currently open windows.
	     */
	    getAllWindowHandles(): Task<string[]>;
	    /**
	     * Gets the URL that is loaded in the focused window/frame.
	     */
	    getCurrentUrl(): Task<string>;
	    /**
	     * Navigates the focused window/frame to a new URL.
	     */
	    get(url: string): Task<void>;
	    /**
	     * Navigates the focused window/frame forward one page using the browser’s navigation history.
	     */
	    goForward(): Task<void>;
	    /**
	     * Navigates the focused window/frame back one page using the browser’s navigation history.
	     */
	    goBack(): Task<void>;
	    /**
	     * Reloads the current browser window/frame.
	     */
	    refresh(): Task<void>;
	    /**
	     * Executes JavaScript code within the focused window/frame. The code should return a value synchronously.
	     *
	     * @see [[Session.executeAsync]] to execute code that returns values asynchronously.
	     *
	     * @param script
	     * The code to execute. This function will always be converted to a string, sent to the remote environment, and
	     * reassembled as a new anonymous function on the remote end. This means that you cannot access any variables
	     * through closure. If your code needs to get data from variables on the local end, they should be passed using
	     * `args`.
	     *
	     * @param args
	     * An array of arguments that will be passed to the executed code. Only values that can be serialised to JSON, plus
	     * [[Element]] objects, can be specified as arguments.
	     *
	     * @returns
	     * The value returned by the remote code. Only values that can be serialised to JSON, plus DOM elements, can be
	     * returned.
	     */
	    execute<T>(script: Function | string, args?: any[]): Task<T>;
	    /**
	     * Executes JavaScript code within the focused window/frame. The code must invoke the provided callback in
	     * order to signal that it has completed execution.
	     *
	     * @see [[Session.execute]] to execute code that returns values synchronously.
	     * @see [[Session.setExecuteAsyncTimeout]] to set the time until an asynchronous script is
	     * considered timed out.
	     *
	     * @param script
	     * The code to execute. This function will always be converted to a string, sent to the remote environment, and
	     * reassembled as a new anonymous function on the remote end. This means that you cannot access any variables
	     * through closure. If your code needs to get data from variables on the local end, they should be passed using
	     * `args`.
	     *
	     * @param args
	     * An array of arguments that will be passed to the executed code. Only values that can be serialised to JSON, plus
	     * [[Element]] objects, can be specified as arguments. In addition to these arguments, a
	     * callback function will always be passed as the final argument to the function specified in `script`. This
	     * callback function must be invoked in order to signal that execution has completed. The return value of the
	     * execution, if any, should be passed to this callback function.
	     *
	     * @returns
	     * The value returned by the remote code. Only values that can be serialised to JSON, plus DOM elements, can be
	     * returned.
	     */
	    executeAsync<T>(script: Function | string, args?: any[]): Task<any>;
	    /**
	     * Gets a screenshot of the focused window and returns it in PNG format.
	     *
	     * @returns A buffer containing a PNG image.
	     */
	    takeScreenshot(): Task<Buffer>;
	    /**
	     * Gets a list of input method editor engines available to the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     */
	    getAvailableImeEngines(): Task<string[]>;
	    /**
	     * Gets the currently active input method editor for the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     */
	    getActiveImeEngine(): Task<string>;
	    /**
	     * Returns whether or not an input method editor is currently active in the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     */
	    isImeActivated(): Task<boolean>;
	    /**
	     * Deactivates any active input method editor in the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     */
	    deactivateIme(): Task<void>;
	    /**
	     * Activates an input method editor in the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     *
	     * @param engine The type of IME to activate.
	     */
	    activateIme(engine: string): Task<void>;
	    /**
	     * Switches the currently focused frame to a new frame.
	     *
	     * @param id
	     * The frame to switch to. In most environments, a number or string value corresponds to a key in the
	     * `window.frames` object of the currently active frame. If `null`, the topmost (default) frame will be used.
	     * If an Element is provided, it must correspond to a `<frame>` or `<iframe>` element.
	     */
	    switchToFrame(id: string | number | Element): Task<void>;
	    /**
	     * Switches the currently focused window to a new window.
	     *
	     * @param handle
	     * The handle of the window to switch to. In mobile environments and environments based on the W3C WebDriver
	     * standard, this should be a handle as returned by [[Session.getAllWindowHandles]].
	     *
	     * In environments using the JsonWireProtocol, this value corresponds to the `window.name` property of a window.
	     */
	    switchToWindow(handle: string): Task<void>;
	    /**
	     * Switches the currently focused frame to the parent of the currently focused frame.
	     */
	    switchToParentFrame(): Task<void>;
	    /**
	     * Closes the currently focused window. In most environments, after the window has been closed, it is necessary
	     * to explicitly switch to whatever window is now focused.
	     */
	    closeCurrentWindow(): Task<void>;
	    /**
	     * Sets the dimensions of a window.
	     *
	     * @param windowHandle
	     * The name of the window to resize. See [[Session.switchToWindow]] to learn about valid
	     * window names. Omit this argument to resize the currently focused window.
	     *
	     * @param width
	     * The new width of the window, in CSS pixels.
	     *
	     * @param height
	     * The new height of the window, in CSS pixels.
	     */
	    setWindowSize(width: number, height: number): Task<void>;
	    setWindowSize(windowHandle: string, width: number, height: number): Task<void>;
	    /**
	     * Gets the dimensions of a window.
	     *
	     * @param windowHandle
	     * The name of the window to query. See [[Session.switchToWindow]] to learn about valid
	     * window names. Omit this argument to query the currently focused window.
	     *
	     * @returns
	     * An object describing the width and height of the window, in CSS pixels.
	     */
	    getWindowSize(windowHandle?: string): Task<{
	        width: number;
	        height: number;
	    }>;
	    /**
	     * Sets the position of a window.
	     *
	     * Note that this method is not part of the W3C WebDriver standard.
	     *
	     * @param windowHandle
	     * The name of the window to move. See [[Session.switchToWindow]] to learn about valid
	     * window names. Omit this argument to move the currently focused window.
	     *
	     * @param x
	     * The screen x-coordinate to move to, in CSS pixels, relative to the left edge of the primary monitor.
	     *
	     * @param y
	     * The screen y-coordinate to move to, in CSS pixels, relative to the top edge of the primary monitor.
	     */
	    setWindowPosition(x: number, y: number): Task<void>;
	    setWindowPosition(windowHandle: string, x: number, y: number): Task<void>;
	    /**
	     * Gets the position of a window.
	     *
	     * Note that this method is not part of the W3C WebDriver standard.
	     *
	     * @param windowHandle
	     * The name of the window to query. See [[Session.switchToWindow]] to learn about valid
	     * window names. Omit this argument to query the currently focused window.
	     *
	     * @returns
	     * An object describing the position of the window, in CSS pixels, relative to the top-left corner of the
	     * primary monitor. If a secondary monitor exists above or to the left of the primary monitor, these values
	     * will be negative.
	     */
	    getWindowPosition(windowHandle?: string): Task<{
	        x: number;
	        y: number;
	    }>;
	    /**
	     * Maximises a window according to the platform’s window system behaviour.
	     *
	     * @param windowHandle
	     * The name of the window to resize. See [[Session.switchToWindow]] to learn about valid
	     * window names. Omit this argument to resize the currently focused window.
	     */
	    maximizeWindow(windowHandle?: string): Task<void>;
	    /**
	     * Gets all cookies set on the current page.
	     */
	    getCookies(): Task<any[]>;
	    /**
	     * Sets a cookie on the current page.
	     */
	    setCookie(cookie: WebDriverCookie): Task<void>;
	    /**
	     * Clears all cookies for the current page.
	     */
	    clearCookies(): Task<void>;
	    /**
	     * Deletes a cookie on the current page.
	     *
	     * @param name The name of the cookie to delete.
	     */
	    deleteCookie(name: string): Task<void>;
	    /**
	     * Gets the HTML loaded in the focused window/frame. This markup is serialised by the remote environment so
	     * may not exactly match the HTML provided by the Web server.
	     */
	    getPageSource(): Task<string>;
	    /**
	     * Gets the title of the top-level browsing context of the current window or tab.
	     */
	    getPageTitle(): Task<string>;
	    /**
	     * Gets the first element from the focused window/frame that matches the given query.
	     *
	     * @see [[Session.setFindTimeout]] to set the amount of time it the remote environment
	     * should spend waiting for an element that does not exist at the time of the `find` call before timing
	     * out.
	     *
	     * @param using
	     * The element retrieval strategy to use. One of 'class name', 'css selector', 'id', 'name', 'link text',
	     * 'partial link text', 'tag name', 'xpath'.
	     *
	     * @param value
	     * The strategy-specific value to search for. For example, if `using` is 'id', `value` should be the ID of the
	     * element to retrieve.
	     */
	    find(using: string, value: string): Task<Element>;
	    /**
	     * Gets an array of elements from the focused window/frame that match the given query.
	     *
	     * @param using
	     * The element retrieval strategy to use. See [[Session.find]] for options.
	     *
	     * @param {string} value
	     * The strategy-specific value to search for. See [[Session.find]] for details.
	     */
	    findAll(using: string, value: string): Task<Element[]>;
	    /**
	     * Gets the currently focused element from the focused window/frame.
	     */
	    getActiveElement(): Task<Element>;
	    /**
	     * Types into the focused window/frame/element.
	     *
	     * @param keys
	     * The text to type in the remote environment. It is possible to type keys that do not have normal character
	     * representations (modifier keys, function keys, etc.) as well as keys that have two different representations
	     * on a typical US-ASCII keyboard (numpad keys); use the values from [[keys]] to type these
	     * special characters. Any modifier keys that are activated by this call will persist until they are
	     * deactivated. To deactivate a modifier key, type the same modifier key a second time, or send `\uE000`
	     * ('NULL') to deactivate all currently active modifier keys.
	     */
	    pressKeys(keys: string | string[]): Task<void> | Task<{}>;
	    /**
	     * Gets the current screen orientation.
	     *
	     * @returns Either 'portrait' or 'landscape'.
	     */
	    getOrientation(): Task<string>;
	    /**
	     * Sets the screen orientation.
	     *
	     * @param orientation Either 'portrait' or 'landscape'.
	     */
	    setOrientation(orientation: string): Task<void>;
	    /**
	     * Gets the text displayed in the currently active alert pop-up.
	     */
	    getAlertText(): Task<string>;
	    /**
	     * Types into the currently active prompt pop-up.
	     *
	     * @param text The text to type into the pop-up’s input box.
	     */
	    typeInPrompt(text: string | string[]): Task<void>;
	    /**
	     * Accepts an alert, prompt, or confirmation pop-up. Equivalent to clicking the 'OK' button.
	     */
	    acceptAlert(): Task<void>;
	    /**
	     * Dismisses an alert, prompt, or confirmation pop-up. Equivalent to clicking the 'OK' button of an alert pop-up
	     * or the 'Cancel' button of a prompt or confirmation pop-up.
	     */
	    dismissAlert(): Task<void>;
	    /**
	     * Moves the remote environment’s mouse cursor to the specified element or relative position. If the element is
	     * outside of the viewport, the remote driver will attempt to scroll it into view automatically.
	     *
	     * @param element
	     * The element to move the mouse to. If x-offset and y-offset are not specified, the mouse will be moved to the
	     * centre of the element.
	     *
	     * @param xOffset
	     * The x-offset of the cursor, maybe in CSS pixels, relative to the left edge of the specified element’s
	     * bounding client rectangle. If no element is specified, the offset is relative to the previous position of the
	     * mouse, or to the left edge of the page’s root element if the mouse was never moved before.
	     *
	     * @param yOffset
	     * The y-offset of the cursor, maybe in CSS pixels, relative to the top edge of the specified element’s bounding
	     * client rectangle. If no element is specified, the offset is relative to the previous position of the mouse,
	     * or to the top edge of the page’s root element if the mouse was never moved before.
	     */
	    moveMouseTo(): Task<void>;
	    moveMouseTo(xOffset?: number, yOffset?: number): Task<void>;
	    moveMouseTo(element?: Element, xOffset?: number, yOffset?: number): Task<void>;
	    /**
	     * Clicks a mouse button at the point where the mouse cursor is currently positioned. This method may fail to
	     * execute with an error if the mouse has not been moved anywhere since the page was loaded.
	     *
	     * @param button
	     * The button to click. 0 corresponds to the primary mouse button, 1 to the middle mouse button, 2 to the
	     * secondary mouse button. Numbers above 2 correspond to any additional buttons a mouse might provide.
	     */
	    clickMouseButton(button?: number): Task<void>;
	    /**
	     * Depresses a mouse button without releasing it.
	     *
	     * @param button The button to press. See [[Session.click]] for available options.
	     */
	    pressMouseButton(button?: number): Task<void>;
	    /**
	     * Releases a previously depressed mouse button.
	     *
	     * @param button The button to press. See [[Session.click]] for available options.
	     */
	    releaseMouseButton(button?: number): Task<void>;
	    /**
	     * Double-clicks the primary mouse button.
	     */
	    doubleClick(): Task<void>;
	    /**
	     * Taps an element on a touch screen device. If the element is outside of the viewport, the remote driver will
	     * attempt to scroll it into view automatically.
	     *
	     * @param element The element to tap.
	     */
	    tap(element: Element): Task<void>;
	    /**
	     * Depresses a new finger at the given point on a touch screen device without releasing it.
	     *
	     * @param x The screen x-coordinate to press, maybe in device pixels.
	     * @param y The screen y-coordinate to press, maybe in device pixels.
	     */
	    pressFinger(x: number, y: number): Task<void>;
	    /**
	     * Releases whatever finger exists at the given point on a touch screen device.
	     *
	     * @param x The screen x-coordinate where a finger is pressed, maybe in device pixels.
	     * @param y The screen y-coordinate where a finger is pressed, maybe in device pixels.
	     */
	    releaseFinger(x: number, y: number): Task<void>;
	    /**
	     * Moves the last depressed finger to a new point on the touch screen.
	     *
	     * @param x The screen x-coordinate to move to, maybe in device pixels.
	     * @param y The screen y-coordinate to move to, maybe in device pixels.
	     */
	    moveFinger(x: number, y: number): Task<void>;
	    /**
	     * Scrolls the currently focused window on a touch screen device.
	     *
	     * @param element
	     * An element to scroll to. The window will be scrolled so the element is as close to the top-left corner of the
	     * window as possible.
	     *
	     * @param xOffset
	     * An optional x-offset, relative to the left edge of the element, in CSS pixels. If no element is specified,
	     * the offset is relative to the previous scroll position of the window.
	     *
	     * @param yOffset
	     * An optional y-offset, relative to the top edge of the element, in CSS pixels. If no element is specified,
	     * the offset is relative to the previous scroll position of the window.
	     */
	    touchScroll(xOffset: number, yOffset: number): Task<void>;
	    touchScroll(element?: Element, xOffset?: number, yOffset?: number): Task<void>;
	    /**
	     * Performs a double-tap gesture on an element.
	     *
	     * @param element The element to double-tap.
	     */
	    doubleTap(element?: Element): Task<void>;
	    /**
	     * Performs a long-tap gesture on an element.
	     *
	     * @param element The element to long-tap.
	     */
	    longTap(element?: Element): Task<void>;
	    /**
	     * Flicks a finger. Note that this method is currently badly specified and highly dysfunctional and is only
	     * provided for the sake of completeness.
	     *
	     * @param element The element where the flick should start.
	     * @param xOffset The x-offset in pixels to flick by.
	     * @param yOffset The x-offset in pixels to flick by.
	     * @param speed The speed of the flick, in pixels per *second*. Most human flicks are 100–200ms, so
	     * this value will be higher than expected.
	     */
	    flickFinger(element: Element, xOffset: number, yOffset: number, speed?: number): Task<void>;
	    flickFinger(xOffset: number, yOffset: number, speed?: number): Task<void>;
	    /**
	     * Gets the current geographical location of the remote environment.
	     *
	     * @returns
	     * Latitude and longitude are specified using standard WGS84 decimal latitude/longitude. Altitude is specified
	     * as meters above the WGS84 ellipsoid. Not all environments support altitude.
	     */
	    getGeolocation(): Task<Geolocation>;
	    /**
	     * Sets the geographical location of the remote environment.
	     *
	     * @param location
	     * Latitude and longitude are specified using standard WGS84 decimal latitude/longitude. Altitude is specified
	     * as meters above the WGS84 ellipsoid. Not all environments support altitude.
	     */
	    setGeolocation(location: Geolocation): Task<void>;
	    /**
	     * Gets all logs from the remote environment of the given type. The logs in the remote environment are cleared
	     * once they have been retrieved.
	     *
	     * @param type
	     * The type of log entries to retrieve. Available log types differ between remote environments. Use
	     * [[Session.getAvailableLogTypes]] to learn what log types are currently available. Not all
	     * environments support all possible log types.
	     *
	     * @returns
	     * An array of log entry objects. Timestamps in log entries are Unix timestamps, in seconds.
	     */
	    getLogsFor(type: string): Task<string[] | LogEntry[]>;
	    /**
	     * Gets the types of logs that are currently available for retrieval from the remote environment.
	     */
	    getAvailableLogTypes(): Task<string[]>;
	    /**
	     * Gets the current state of the HTML5 application cache for the current page.
	     *
	     * @returns
	     * The cache status. One of 0 (uncached), 1 (cached/idle), 2 (checking), 3 (downloading), 4 (update ready), 5
	     * (obsolete).
	     */
	    getApplicationCacheStatus(): Task<number>;
	    /**
	     * Terminates the session. No more commands will be accepted by the remote after this point.
	     */
	    quit(): Task<void>;
	    /**
	     * Searches a document or element subtree for links with the given normalized text. This method works for 'link text'
	     * and 'partial link text' search strategies.
	     *
	     * Note that this method should be passed to an `execute` call, not called directly.
	     *
	     * @param using The strategy in use ('link text' or 'partial link text')
	     * @param value The link text to search for
	     * @param multiple If true, return all matching links
	     * @param element A context element
	     * @returns The found element or elements
	     */
	    private _manualFindByLinkText(using, value, multiple, element?);
	    /**
	     * Gets the list of keys set in local storage for the focused window/frame.
	     */
	    getLocalStorageKeys(): Task<string[]>;
	    /**
	     * Sets a value in local storage for the focused window/frame.
	     *
	     * @param key The key to set.
	     * @param value The value to set.
	     */
	    setLocalStorageItem(key: string, value: string): Task<void>;
	    /**
	     * Clears all data in local storage for the focused window/frame.
	     */
	    clearLocalStorage(): Task<void>;
	    /**
	     * Gets a value from local storage for the focused window/frame.
	     *
	     * @param key The key of the data to get.
	     */
	    getLocalStorageItem(key: string): Task<string>;
	    /**
	     * Deletes a value from local storage for the focused window/frame.
	     *
	     * @param key The key of the data to delete.
	     */
	    deleteLocalStorageItem(key: string): Task<void>;
	    /**
	     * Gets the number of keys set in local storage for the focused window/frame.
	     */
	    getLocalStorageLength(): Task<number>;
	    /**
	     * Gets the list of keys set in session storage for the focused window/frame.
	     */
	    getSessionStorageKeys(): Task<string[]>;
	    /**
	     * Sets a value in session storage for the focused window/frame.
	     *
	     * @param key The key to set.
	     * @param value The value to set.
	     */
	    setSessionStorageItem(key: string, value: string): Task<void>;
	    /**
	     * Clears all data in session storage for the focused window/frame.
	     */
	    clearSessionStorage(): Task<void>;
	    /**
	     * Gets a value from session storage for the focused window/frame.
	     *
	     * @param key The key of the data to get.
	     */
	    getSessionStorageItem(key: string): Task<string>;
	    /**
	     * Deletes a value from session storage for the focused window/frame.
	     *
	     * @param key The key of the data to delete.
	     */
	    deleteSessionStorageItem(key: string): Task<void>;
	    /**
	     * Gets the number of keys set in session storage for the focused window/frame.
	     */
	    getSessionStorageLength(): Task<number>;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element in the currently active window/frame
	     * matching the given query. This is inherently slower than [[Session.find]], so should only be
	     * used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     *
	     * @param using
	     * The element retrieval strategy to use. See [[Session.find]] for options.
	     *
	     * @param value
	     * The strategy-specific value to search for. See [[Session.find]] for details.
	     */
	    findDisplayed(using: string, value: string): Task<Element | Element[]>;
	    /**
	     * Waits for all elements in the currently active window/frame to be destroyed.
	     *
	     * @param using
	     * The element retrieval strategy to use. See [[Session.find]] for options.
	     *
	     * @param value
	     * The strategy-specific value to search for. See [[Session.find]] for details.
	     */
	    waitForDeleted(strategy: string, value: string): Task<void>;
	    /**
	     * Gets the timeout for [[Session.executeAsync]] calls.
	     */
	    getExecuteAsyncTimeout(): Task<number>;
	    /**
	     * Sets the timeout for [[Session.executeAsync]] calls.
	     *
	     * @param ms The length of the timeout, in milliseconds.
	     */
	    setExecuteAsyncTimeout(ms: number): Task<void>;
	    /**
	     * Gets the timeout for [[Session.find]] calls.
	     */
	    getFindTimeout(): Task<number>;
	    /**
	     * Sets the timeout for [[Session.find]] calls.
	     *
	     * @param ms The length of the timeout, in milliseconds.
	     */
	    setFindTimeout(ms: number): Task<void>;
	    /**
	     * Gets the timeout for [[Session.get]] calls.
	     */
	    getPageLoadTimeout(): Task<number>;
	    /**
	     * Sets the timeout for [[Session.get]] calls.
	     *
	     * @param ms The length of the timeout, in milliseconds.
	     */
	    setPageLoadTimeout(ms: number): Task<void>;
	}
	export interface SessionError extends Error {
	    status?: keyof typeof statusCodes;
	}

}
declare module 'leadfoot/src/lib/findDisplayed' {
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import Element from 'leadfoot/src/Element';
	import Session from 'leadfoot/src/Session';
	export default function findDisplayed(session: Session, locator: Session | Element, strategy: string, value: string): Task<Element | Element[]>;

}
declare module 'leadfoot/src/Element' {
	import Locator from 'leadfoot/src/lib/Locator';
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import Session from 'leadfoot/src/Session';
	/**
	 * An Element represents a DOM or UI element within the remote environment.
	 */
	export default class Element extends Locator<Task<Element>, Task<Element[]>, Task<void>> {
	    private _elementId;
	    private _session;
	    /**
	     * @constructor module:leadfoot/Element
	     *
	     * @param elementId
	     * The ID of the element, as provided by the remote.
	     *
	     * @param session
	     * The session that the element belongs to.
	     */
	    constructor(elementId: any, session?: Session);
	    /**
	     * The opaque, remote-provided ID of the element.
	     *
	     * @member elementId
	     * @readonly
	     */
	    readonly elementId: string;
	    /**
	     * The [[Session]] that the element belongs to.
	     * @readonly
	     */
	    readonly session: Session;
	    private _get<T>(path, requestData?, pathParts?);
	    private _post<T>(path, requestData?, pathParts?);
	    toJSON(): {
	        ELEMENT: string;
	    };
	    /**
	     * Normalize whitespace in the same way that most browsers generate innerText.
	     *
	     * @param text
	     * @returns Text with leading and trailing whitespace removed, with inner runs of spaces changed to a
	     * single space, and with "\r\n" pairs converted to "\n".
	     */
	    private _normalizeWhitespace(text);
	    /**
	     * Uploads a file to a remote Selenium server for use when testing file uploads. This API is not part of the
	     * WebDriver specification and should not be used directly. To send a file to a server that supports file uploads,
	     * use [[Element.type]] to type the name of the local file into a file input field and the file
	     * will be transparently transmitted and used by the server.
	     */
	    private _uploadFile(filename);
	    /**
	     * Gets the first element within this element that matches the given query.
	     *
	     * @see [[Session.setFindTimeout]] to set the amount of time it the remote environment
	     * should spend waiting for an element that does not exist at the time of the `find` call before timing
	     * out.
	     *
	     * @param using
	     * The element retrieval strategy to use. See [[Session.find]] for options.
	     *
	     * @param value
	     * The strategy-specific value to search for. See [[Session.find]] for details.
	     */
	    find(using: string, value: string): Task<Element>;
	    /**
	     * Gets all elements within this element that match the given query.
	     *
	     * @param using
	     * The element retrieval strategy to use. See [[Session.find]] for options.
	     *
	     * @param value
	     * The strategy-specific value to search for. See [[Session.find]] for details.
	     */
	    findAll(using: string, value: string): Task<Element[]>;
	    /**
	     * Clicks the element. This method works on both mouse and touch platforms.
	     */
	    click(): Task<void>;
	    /**
	     * Submits the element, if it is a form, or the form belonging to the element, if it is a form element.
	     */
	    submit(): Task<void>;
	    /**
	     * Gets the visible text within the element. `<br>` elements are converted to line breaks in the returned
	     * text, and whitespace is normalised per the usual XML/HTML whitespace normalisation rules.
	     */
	    getVisibleText(): Task<string>;
	    /**
	     * Types into the element. This method works the same as the [[Session.pressKeys]] method
	     * except that any modifier keys are automatically released at the end of the command. This method should be used
	     * instead of [[Session.pressKeys]] to type filenames into file upload fields.
	     *
	     * Since 1.5, if the WebDriver server supports remote file uploads, and you type a path to a file on your local
	     * computer, that file will be transparently uploaded to the remote server and the remote filename will be typed
	     * instead. If you do not want to upload local files, use [[Session.pressKeys]] instead.
	     *
	     * @param value
	     * The text to type in the remote environment. See [[Session.pressKeys]] for more information.
	     */
	    type(value: string | string[]): Task<void>;
	    /**
	     * Gets the tag name of the element. For HTML documents, the value is always lowercase.
	     */
	    getTagName(): Task<string>;
	    /**
	     * Clears the value of a form element.
	     */
	    clearValue(): Task<void>;
	    /**
	     * Returns whether or not a form element is currently selected (for drop-down options and radio buttons), or
	     * whether or not the element is currently checked (for checkboxes).
	     */
	    isSelected(): Task<boolean>;
	    /**
	     * Returns whether or not a form element can be interacted with.
	     */
	    isEnabled(): Task<boolean>;
	    /**
	     * Gets a property or attribute of the element according to the WebDriver specification algorithm. Use of this
	     * method is not recommended; instead, use [[Element.getAttribute]] to retrieve DOM attributes
	     * and [[Element.getProperty]] to retrieve DOM properties.
	     *
	     * This method uses the following algorithm on the server to determine what value to return:
	     *
	     * 1. If `name` is 'style', returns the `style.cssText` property of the element.
	     * 2. If the attribute exists and is a boolean attribute, returns 'true' if the attribute is true, or null
	     *    otherwise.
	     * 3. If the element is an `<option>` element and `name` is 'value', returns the `value` attribute if it exists,
	     *    otherwise returns the visible text content of the option.
	     * 4. If the element is a checkbox or radio button and `name` is 'selected', returns 'true' if the element is
	     *    checked, or null otherwise.
	     * 5. If the returned value is expected to be a URL (e.g. element is `<a>` and attribute is `href`), returns the
	     *    fully resolved URL from the `href`/`src` property of the element, not the attribute.
	     * 6. If `name` is 'class', returns the `className` property of the element.
	     * 7. If `name` is 'readonly', returns 'true' if the `readOnly` property is true, or null otherwise.
	     * 8. If `name` corresponds to a property of the element, and the property is not an Object, return the property
	     *    value coerced to a string.
	     * 9. If `name` corresponds to an attribute of the element, return the attribute value.
	     *
	     * @param name The property or attribute name.
	     * @returns The value of the attribute as a string, or `null` if no such property or
	     * attribute exists.
	     */
	    getSpecAttribute(name: string): Task<string>;
	    /**
	     * Gets an attribute of the element.
	     *
	     * @see [[Element.getProperty]] to retrieve an element property.
	     * @param name The name of the attribute.
	     * @returns The value of the attribute, or `null` if no such attribute exists.
	     */
	    getAttribute(name: string): Task<string>;
	    /**
	     * Gets a property of the element.
	     *
	     * @see [[Element.getAttribute]] to retrieve an element attribute.
	     * @param name The name of the property.
	     * @returns The value of the property.
	     */
	    getProperty(name: string): Task<any>;
	    /**
	     * Determines if this element is equal to another element.
	     */
	    equals(other: Element): Task<boolean>;
	    /**
	     * Returns whether or not the element would be visible to an actual user. This means that the following types
	     * of elements are considered to be not displayed:
	     *
	     * 1. Elements with `display: none`
	     * 2. Elements with `visibility: hidden`
	     * 3. Elements positioned outside of the viewport that cannot be scrolled into view
	     * 4. Elements with `opacity: 0`
	     * 5. Elements with no `offsetWidth` or `offsetHeight`
	     */
	    isDisplayed(): Task<boolean>;
	    /**
	     * Gets the position of the element relative to the top-left corner of the document, taking into account
	     * scrolling and CSS transformations (if they are supported).
	     */
	    getPosition(): Task<{
	        x: number;
	        y: number;
	    }>;
	    /**
	     * Gets the size of the element, taking into account CSS transformations (if they are supported).
	     */
	    getSize(): Task<{
	        width: number;
	        height: number;
	    }>;
	    /**
	     * Gets a CSS computed property value for the element.
	     *
	     * @param propertyName
	     * The CSS property to retrieve. This argument must be hyphenated, *not* camel-case.
	     */
	    getComputedStyle(propertyName: string): Task<string>;
	    /**
	     * Gets the first [[Element.isDisplayed displayed]] element inside this element
	     * matching the given query. This is inherently slower than [[Element.find]], so should only be
	     * used in cases where the visibility of an element cannot be ensured in advance.
	     *
	     * @since 1.6
	     *
	     * @param using
	     * The element retrieval strategy to use. See [[Session.find]] for options.
	     *
	     * @param value
	     * The strategy-specific value to search for. See [[Session.find]] for details.
	     */
	    findDisplayed(using: string, value: string): Task<Element>;
	    /**
	     * Waits for all elements inside this element that match the given query to be destroyed.
	     *
	     * @method waitForDeleted
	     * @memberOf module:leadfoot/Element#
	     *
	     * @param using
	     * The element retrieval strategy to use. See [[Session.find]] for options.
	     *
	     * @param value
	     * The strategy-specific value to search for. See [[Session.find]] for details.
	     */
	    waitForDeleted(strategy: string, value: string): Task<void>;
	}
	export type ElementOrElementId = {
	    ELEMENT: string;
	} | Element | string;

}
declare module 'leadfoot/src/Command' {
	/// <reference types="node" />
	import Element from 'leadfoot/src/Element';
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	import { Thenable } from 'leadfoot/node_modules/@dojo/shim/interfaces';
	import Session from 'leadfoot/src/Session';
	import Locator from 'leadfoot/src/lib/Locator';
	import { LogEntry, Geolocation, WebDriverCookie } from 'leadfoot/src/interfaces';
	/**
	 * The Command class is a chainable, subclassable object type that can be used to execute commands serially against a
	 * remote WebDriver environment. The standard Command class includes methods from the [[Session]]
	 * and [[Element]] classes, so you can perform all standard session and element operations that
	 * come with Leadfoot without being forced to author long promise chains.
	 *
	 * In order to use the Command class, you first need to pass it a [[Session]] instance for it to
	 * use:
	 *
	 * ```js
	 * var command = new Command(session);
	 * ```
	 *
	 * Once you have created the Command, you can then start chaining methods, and they will execute in order one after
	 * another:
	 *
	 * ```js
	 * command.get('http://example.com')
	 *   .findByTagName('h1')
	 *   .getVisibleText()
	 *   .then(function (text) {
	 *       assert.strictEqual(text, 'Example Domain');
	 *   });
	 * ```
	 *
	 * Because these operations are asynchronous, you need to use a `then` callback in order to retrieve the value from the
	 * last method. Command objects are Thenables, which means that they can be used with any Promises/A+ or ES6-confirmant
	 * Promises implementation, though there are some specific differences in the arguments and context that are provided
	 * to callbacks; see [[Command.then]] for more details.
	 *
	 * ---
	 *
	 * Each call on a Command generates a new Command object, which means that certain operations can be parallelised:
	 *
	 * ```js
	 * command = command.get('http://example.com');
	 * Promise.all([
	 *   command.getPageTitle(),
	 *   command.findByTagName('h1').getVisibleText()
	 * ]).then(function (results) {
	 *   assert.strictEqual(results[0], results[1]);
	 * });
	 * ```
	 *
	 * In this example, the commands on line 3 and 4 both depend upon the `get` call completing successfully but are
	 * otherwise independent of each other and so execute here in parallel. This is different from commands in Intern 1
	 * which were always chained onto the last called method within a given test.
	 *
	 * ---
	 *
	 * Command objects actually encapsulate two different types of interaction: *session* interactions, which operate
	 * against the entire browser session, and *element* interactions, which operate against specific elements taken from
	 * the currently loaded page. Things like navigating the browser, moving the mouse cursor, and executing scripts are
	 * session interactions; things like getting text displayed on the page, typing into form fields, and getting element
	 * attributes are element interactions.
	 *
	 * Session interactions can be performed at any time, from any Command. On the other hand, to perform element
	 * interactions, you first need to retrieve one or more elements to interact with. This can be done using any of the
	 * `find` or `findAll` methods, by the `getActiveElement` method, or by returning elements from `execute` or
	 * `executeAsync` calls. The retrieved elements are stored internally as the *element context* of all chained
	 * Commands. When an element method is called on a chained Command with a single element context, the result will be
	 * returned as-is:
	 *
	 * ```js
	 * command = command.get('http://example.com')
	 *   // finds one element -> single element context
	 *   .findByTagName('h1')
	 *   .getVisibleText()
	 *   .then(function (text) {
	 *     // `text` is the text from the element context
	 *     assert.strictEqual(text, 'Example Domain');
	 *   });
	 * ```
	 *
	 * When an element method is called on a chained Command with a multiple element context, the result will be returned
	 * as an array:
	 *
	 * ```js
	 * command = command.get('http://example.com')
	 *   // finds multiple elements -> multiple element context
	 *   .findAllByTagName('p')
	 *   .getVisibleText()
	 *   .then(function (texts) {
	 *     // `texts` is an array of text from each of the `p` elements
	 *     assert.deepEqual(texts, [
	 *       'This domain is established to be used for […]',
	 *       'More information...'
	 *     ]);
	 *   });
	 * ```
	 *
	 * The `find` and `findAll` methods are special and change their behaviour based on the current element filtering state
	 * of a given command. If a command has been filtered by element, the `find` and `findAll` commands will only find
	 * elements *within* the currently filtered set of elements. Otherwise, they will find elements throughout the page.
	 *
	 * Some method names, like `click`, are identical for both Session and Element APIs; in this case, the element APIs
	 * are suffixed with the word `Element` in order to identify them uniquely.
	 *
	 * ---
	 *
	 * Commands can be subclassed in order to add additional functionality without making direct modifications to the
	 * default Command prototype that might break other parts of the system:
	 *
	 * ```js
	 * function CustomCommand() {
	 *   Command.apply(this, arguments);
	 * }
	 * CustomCommand.prototype = Object.create(Command.prototype);
	 * CustomCommand.prototype.constructor = CustomCommand;
	 * CustomCommand.prototype.login = function (username, password) {
	 *   return new this.constructor(this, function () {
	 *     return this.parent
	 *       .findById('username')
	 *         .click()
	 *         .type(username)
	 *         .end()
	 *       .findById('password')
	 *         .click()
	 *         .type(password)
	 *         .end()
	 *       .findById('login')
	 *         .click()
	 *         .end();
	 *   });
	 * };
	 * ```
	 *
	 * Note that returning `this`, or a command chain starting from `this`, from a callback or command initialiser will
	 * deadlock the Command, as it waits for itself to settle before settling.
	 */
	export default class Command<T> extends Locator<Command<Element>, Command<Element[]>, Command<void>> {
	    /**
	     * Augments `target` with a conversion of the `originalFn` method that enables its use with a Command object.
	     * This can be used to easily add new methods from any custom object that implements the Session API to any target
	     * object that implements the Command API.
	     *
	     * Functions that are copied may have the following extra properties in order to change the way that Command works
	     * with these functions:
	     *
	     * - `createsContext` (boolean): If this property is specified, the return value from the function will be used as
	     *   the new context for the returned Command.
	     * - `usesElement` (boolean): If this property is specified, element(s) from the current context will be used as
	     *   the first argument to the function, if the explicitly specified first argument is not already an element.
	     *
	     * @memberOf module:leadfoot/Command
	     * @param {module:leadfoot/Command} target
	     * @param {string} key
	     * @param {Function} originalFn
	     */
	    static addSessionMethod<U>(target: Command<U>, key: string, originalFn: Function): void;
	    /**
	     * Augments `target` with a method that will call `key` on all context elements stored within `target`.
	     * This can be used to easily add new methods from any custom object that implements the Element API to any target
	     * object that implements the Command API.
	     *
	     * Functions that are copied may have the following extra properties in order to change the way that Command works
	     * with these functions:
	     *
	     * - `createsContext` (boolean): If this property is specified, the return value from the function will be used as
	     *   the new context for the returned Command.
	     *
	     * @memberOf module:leadfoot/Command
	     * @param {module:leadfoot/Command} target
	     * @param {string} key
	     */
	    static addElementMethod<T>(target: Command<T>, key: string): void;
	    private _parent;
	    private _session;
	    private _context;
	    private _task;
	    /**
	     * @param parent
	     * The parent command that this command is chained to, or a [[Sesssion]] object if this is the
	     * first command in a command chain.
	     *
	     * @param initialiser
	     * A function that will be executed when all parent commands have completed execution. This function can create a
	     * new context for this command by calling the passed `setContext` function any time prior to resolving the Promise
	     * that it returns. If no context is explicitly provided, the context from the parent command will be used.
	     *
	     * @param errback
	     * A function that will be executed if any parent commands failed to complete successfully. This function can create
	     * a new context for the current command by calling the passed `setContext` function any time prior to resolving the
	     * Promise that it returns. If no context is explicitly provided, the context from the parent command will be used.
	     */
	    constructor(parent: Session | Command<any>, initialiser?: (setContext: Function, value: any) => any | Task<any>, errback?: (setContext: Function, error: Error) => any | Task<any>);
	    /**
	     * The parent Command of the Command, if one exists.
	     *
	     * @readonly
	     */
	    readonly parent: Session | Command<any>;
	    /**
	     * The parent Session of the Command.
	     *
	     * @readonly
	     */
	    readonly session: Session;
	    /**
	     * The filtered elements that will be used if an element-specific method is invoked. Note that this property is not
	     * valid until the parent Command has been settled. The context array also has two additional properties:
	     *
	     * - isSingle (boolean): If true, the context will always contain a single element. This is used to differentiate
	     *   between methods that should still return scalar values (`find`) and methods that should return arrays of
	     *   values even if there is only one element in the context (`findAll`).
	     * - depth (number): The depth of the context within the command chain. This is used to prevent traversal into
	     *   higher filtering levels by [[Command.end]].
	     *
	     * @readonly
	     */
	    readonly context: Context;
	    /**
	     * The underlying Promise for the Command.
	     *
	     * @readonly
	     */
	    readonly promise: Task<any>;
	    /**
	     * Pauses execution of the next command in the chain for `ms` milliseconds.
	     *
	     * @param ms Time to delay, in milliseconds.
	     */
	    sleep(ms: number): Command<{}>;
	    /**
	     * Ends the most recent filtering operation in the current Command chain and returns the set of matched elements
	     * to the previous state. This is equivalent to the `jQuery#end` method.
	     *
	     * @example
	     * ```js
	     * command
	     *   .findById('parent') // sets filter to #parent
	     *     .findByClassName('child') // sets filter to all .child inside #parent
	     *       .getVisibleText()
	     *       .then(function (visibleTexts) {
	     *         // all the visible texts from the children
	     *       })
	     *       .end() // resets filter to #parent
	     *     .end(); // resets filter to nothing (the whole document)
	     *  ```
	     *
	     * @param numCommandsToPop The number of element contexts to pop. Defaults to 1.
	     */
	    end(numCommandsToPop?: number): Command<void>;
	    /**
	     * Adds a callback to be invoked once the previously chained operation has completed.
	     *
	     * This method is compatible with the `Promise#then` API, with two important differences:
	     *
	     * 1. The context (`this`) of the callback is set to the Command object, rather than being `undefined`. This allows
	     *    promise helpers to be created that can retrieve the appropriate session and element contexts for execution.
	     * 2. A second non-standard `setContext` argument is passed to the callback. This `setContext` function can be
	     *    called at any time before the callback fulfills its return value and expects either a single
	     *    [[Element]] or an array of Elements to be provided as its only argument. The provided
	     *    element(s) will be used as the context for subsequent element method invocations (`click`, etc.). If
	     *    the `setContext` method is not called, the element context from the parent will be passed through unmodified.
	     */
	    then<U>(callback?: (value: T, setContext: SetContextMethod<U>) => U | Thenable<U> | Command<U>, errback?: (error: Error) => void | U | Thenable<U> | Command<U>): Command<{}>;
	    /**
	     * Adds a callback to be invoked when any of the previously chained operations have failed.
	     */
	    catch(errback: (reason: Error) => void | T | Command<T>): Command<{}>;
	    /**
	     * Adds a callback to be invoked once the previously chained operations have resolved.
	     */
	    finally(callback: () => void): this;
	    /**
	     * Cancels all outstanding chained operations of the Command. Calling this method will cause this command and all
	     * subsequent chained commands to fail with a CancelError.
	     */
	    cancel(): this;
	    find(strategy: string, value: string): Command<Element>;
	    findAll(strategy: string, value: string): Command<Element[]>;
	    findDisplayed(strategy: string, value: string): Command<Element>;
	    /**
	     * a function that, when called, creates a new Command that retrieves elements from the parent context and
	     * uses them as the context for the newly created Command.
	     */
	    private _callFindElementMethod<U>(key, ...args);
	    private _callElementMethod<U>(key, ...args);
	    private _callSessionMethod<U>(key, ...args);
	    /**
	     * Gets the current value of a timeout for the session.
	     *
	     * @param type The type of timeout to retrieve. One of 'script', 'implicit', or 'page load'.
	     * @returns The timeout, in milliseconds.
	     */
	    getTimeout(type: string): Command<number>;
	    /**
	     * Sets the value of a timeout for the session.
	     *
	     * @param type
	     * The type of timeout to set. One of 'script', 'implicit', or 'page load'.
	     *
	     * @param ms
	     * The length of time to use for the timeout, in milliseconds. A value of 0 will cause operations to time out
	     * immediately.
	     */
	    setTimeout(type: string, ms: number): Command<void>;
	    /**
	     * Gets the identifier for the window that is currently focused.
	     *
	     * @returns A window handle identifier that can be used with other window handling functions.
	     */
	    getCurrentWindowHandle(): Command<string>;
	    /**
	     * Gets a list of identifiers for all currently open windows.
	     */
	    getAllWindowHandles(): Command<string[]>;
	    /**
	     * Gets the URL that is loaded in the focused window/frame.
	     */
	    getCurrentUrl(): Command<string>;
	    /**
	     * Navigates the focused window/frame to a new URL.
	     */
	    get(url: string): Command<void>;
	    /**
	     * Navigates the focused window/frame forward one page using the browser’s navigation history.
	     */
	    goForward(): Command<void>;
	    /**
	     * Navigates the focused window/frame back one page using the browser’s navigation history.
	     */
	    goBack(): Command<void>;
	    /**
	     * Reloads the current browser window/frame.
	     */
	    refresh(): Command<void>;
	    /**
	     * Executes JavaScript code within the focused window/frame. The code should return a value synchronously.
	     *
	     * @see [[Command.executeAsync]] to execute code that returns values asynchronously.
	     *
	     * @param script
	     * The code to execute. This function will always be converted to a string, sent to the remote environment, and
	     * reassembled as a new anonymous function on the remote end. This means that you cannot access any variables
	     * through closure. If your code needs to get data from variables on the local end, they should be passed using
	     * `args`.
	     *
	     * @param args
	     * An array of arguments that will be passed to the executed code. Only values that can be serialised to JSON, plus
	     * [[Element]] objects, can be specified as arguments.
	     *
	     * @returns
	     * The value returned by the remote code. Only values that can be serialised to JSON, plus DOM elements, can be
	     * returned.
	     */
	    execute(script: Function | string, args?: any[]): Command<any>;
	    /**
	     * Executes JavaScript code within the focused window/frame. The code must invoke the provided callback in
	     * order to signal that it has completed execution.
	     *
	     * @see [[Command.execute]] to execute code that returns values synchronously.
	     * @see [[Command.setExecuteAsyncTimeout]] to set the time until an asynchronous script is
	     * considered timed out.
	     *
	     * @param script
	     * The code to execute. This function will always be converted to a string, sent to the remote environment, and
	     * reassembled as a new anonymous function on the remote end. This means that you cannot access any variables
	     * through closure. If your code needs to get data from variables on the local end, they should be passed using
	     * `args`.
	     *
	     * @param args
	     * An array of arguments that will be passed to the executed code. Only values that can be serialised to JSON, plus
	     * [[Element]] objects, can be specified as arguments. In addition to these arguments, a
	     * callback function will always be passed as the final argument to the function specified in `script`. This
	     * callback function must be invoked in order to signal that execution has completed. The return value of the
	     * execution, if any, should be passed to this callback function.
	     *
	     * @returns
	     * The value returned by the remote code. Only values that can be serialised to JSON, plus DOM elements, can be
	     * returned.
	     */
	    executeAsync(script: Function | string, args?: any[]): Command<any>;
	    /**
	     * Gets a screenshot of the focused window and returns it in PNG format.
	     */
	    takeScreenshot(): Command<Buffer>;
	    /**
	     * Gets a list of input method editor engines available to the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     */
	    getAvailableImeEngines(): Command<string[]>;
	    /**
	     * Gets the currently active input method editor for the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     */
	    getActiveImeEngine(): Command<string>;
	    /**
	     * Returns whether or not an input method editor is currently active in the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     */
	    isImeActivated(): Command<boolean>;
	    /**
	     * Deactivates any active input method editor in the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     */
	    deactivateIme(): Command<void>;
	    /**
	     * Activates an input method editor in the remote environment.
	     * As of April 2014, no known remote environments support IME functions.
	     *
	     * @param engine The type of IME to activate.
	     */
	    activateIme(engine: string): Command<void>;
	    /**
	     * Switches the currently focused frame to a new frame.
	     *
	     * @param id
	     * The frame to switch to. In most environments, a number or string value corresponds to a key in the
	     * `window.frames` object of the currently active frame. If `null`, the topmost (default) frame will be used.
	     * If an Element is provided, it must correspond to a `<frame>` or `<iframe>` element.
	     */
	    switchToFrame(id: string | number | Element): Command<void>;
	    /**
	     * Switches the currently focused window to a new window.
	     *
	     * @param handle
	     * The handle of the window to switch to. In mobile environments and environments based on the W3C WebDriver
	     * standard, this should be a handle as returned by [[Command.getAllWindowHandles]].
	     *
	     * In environments using the JsonWireProtocol, this value corresponds to the `window.name` property of a window.
	     */
	    switchToWindow(handle: string): Command<void>;
	    /**
	     * Switches the currently focused frame to the parent of the currently focused frame.
	     */
	    switchToParentFrame(): Command<void>;
	    /**
	     * Closes the currently focused window. In most environments, after the window has been closed, it is necessary
	     * to explicitly switch to whatever window is now focused.
	     */
	    closeCurrentWindow(): Command<void>;
	    /**
	     * Sets the dimensions of a window.
	     *
	     * @param windowHandle
	     * The name of the window to resize. See [[Command.switchToWindow]] to learn about valid
	     * window names. Omit this argument to resize the currently focused window.
	     *
	     * @param width
	     * The new width of the window, in CSS pixels.
	     *
	     * @param height
	     * The new height of the window, in CSS pixels.
	     */
	    setWindowSize(width: number, height: number): Command<void>;
	    setWindowSize(windowHandle: string, width: number, height: number): Command<void>;
	    /**
	     * Gets the dimensions of a window.
	     *
	     * @param windowHandle
	     * The name of the window to query. See [[Command.switchToWindow]] to learn about valid
	     * window names. Omit this argument to query the currently focused window.
	     *
	     * @returns
	     * An object describing the width and height of the window, in CSS pixels.
	     */
	    getWindowSize(windowHandle?: string): Command<{
	        width: number;
	        height: number;
	    }>;
	    /**
	     * Sets the position of a window.
	     *
	     * Note that this method is not part of the W3C WebDriver standard.
	     *
	     * @param windowHandle
	     * The name of the window to move. See [[Command.switchToWindow]] to learn about valid
	     * window names. Omit this argument to move the currently focused window.
	     *
	     * @param x
	     * The screen x-coordinate to move to, in CSS pixels, relative to the left edge of the primary monitor.
	     *
	     * @param y
	     * The screen y-coordinate to move to, in CSS pixels, relative to the top edge of the primary monitor.
	     */
	    setWindowPosition(x: number, y: number): Command<void>;
	    setWindowPosition(windowHandle: string, x: number, y: number): Command<void>;
	    /**
	     * Gets the position of a window.
	     *
	     * Note that this method is not part of the W3C WebDriver standard.
	     *
	     * @param windowHandle
	     * The name of the window to query. See [[Command.switchToWindow]] to learn about valid
	     * window names. Omit this argument to query the currently focused window.
	     *
	     * @returns
	     * An object describing the position of the window, in CSS pixels, relative to the top-left corner of the
	     * primary monitor. If a secondary monitor exists above or to the left of the primary monitor, these values
	     * will be negative.
	     */
	    getWindowPosition(windowHandle?: string): Command<{
	        x: number;
	        y: number;
	    }>;
	    /**
	     * Maximises a window according to the platform’s window system behaviour.
	     *
	     * @param windowHandle
	     * The name of the window to resize. See [[Command.switchToWindow] to learn about valid
	     * window names. Omit this argument to resize the currently focused window.
	     */
	    maximizeWindow(windowHandle?: string): Command<void>;
	    /**
	     * Gets all cookies set on the current page.
	     */
	    getCookies(): Command<WebDriverCookie[]>;
	    /**
	     * Sets a cookie on the current page.
	     */
	    setCookie(cookie: WebDriverCookie): Command<void>;
	    /**
	     * Clears all cookies for the current page.
	     */
	    clearCookies(): Command<void>;
	    /**
	     * Deletes a cookie on the current page.
	     *
	     * @param name The name of the cookie to delete.
	     */
	    deleteCookie(name: string): Command<void>;
	    /**
	     * Gets the HTML loaded in the focused window/frame. This markup is serialised by the remote environment so
	     * may not exactly match the HTML provided by the Web server.
	     */
	    getPageSource(): Command<string>;
	    /**
	     * Gets the title of the top-level browsing context of the current window or tab.
	     */
	    getPageTitle(): Command<string>;
	    /**
	     * Gets the currently focused element from the focused window/frame.
	     */
	    getActiveElement(): Command<Element>;
	    /**
	     * Types into the focused window/frame/element.
	     *
	     * @param keys
	     * The text to type in the remote environment. It is possible to type keys that do not have normal character
	     * representations (modifier keys, function keys, etc.) as well as keys that have two different representations
	     * on a typical US-ASCII keyboard (numpad keys); use the values from [[keys]] to type these
	     * special characters. Any modifier keys that are activated by this call will persist until they are
	     * deactivated. To deactivate a modifier key, type the same modifier key a second time, or send `\uE000`
	     * ('NULL') to deactivate all currently active modifier keys.
	     */
	    pressKeys(keys: string | string[]): Command<void>;
	    /**
	     * Gets the current screen orientation.
	     */
	    getOrientation(): Command<"portrait" | "landscape">;
	    /**
	     * Sets the screen orientation.
	     *
	     * @param orientation Either 'portrait' or 'landscape'.
	     */
	    setOrientation(orientation: 'portrait' | 'landscape'): Command<void>;
	    /**
	     * Gets the text displayed in the currently active alert pop-up.
	     */
	    getAlertText(): Command<string>;
	    /**
	     * Types into the currently active prompt pop-up.
	     *
	     * @param text The text to type into the pop-up’s input box.
	     */
	    typeInPrompt(text: string | string[]): Command<void>;
	    /**
	     * Accepts an alert, prompt, or confirmation pop-up. Equivalent to clicking the 'OK' button.
	     */
	    acceptAlert(): Command<void>;
	    /**
	     * Dismisses an alert, prompt, or confirmation pop-up. Equivalent to clicking the 'OK' button of an alert pop-up
	     * or the 'Cancel' button of a prompt or confirmation pop-up.
	     */
	    dismissAlert(): Command<void>;
	    /**
	     * Moves the remote environment’s mouse cursor to the specified element or relative position. If the element is
	     * outside of the viewport, the remote driver will attempt to scroll it into view automatically.
	     *
	     * @param element
	     * The element to move the mouse to. If x-offset and y-offset are not specified, the mouse will be moved to the
	     * centre of the element.
	     *
	     * @param xOffset
	     * The x-offset of the cursor, maybe in CSS pixels, relative to the left edge of the specified element’s
	     * bounding client rectangle. If no element is specified, the offset is relative to the previous position of the
	     * mouse, or to the left edge of the page’s root element if the mouse was never moved before.
	     *
	     * @param yOffset
	     * The y-offset of the cursor, maybe in CSS pixels, relative to the top edge of the specified element’s bounding
	     * client rectangle. If no element is specified, the offset is relative to the previous position of the mouse,
	     * or to the top edge of the page’s root element if the mouse was never moved before.
	     */
	    moveMouseTo(xOffset?: number, yOffset?: number): Command<void>;
	    moveMouseTo(element?: Element, xOffset?: number, yOffset?: number): Command<void>;
	    /**
	     * Clicks a mouse button at the point where the mouse cursor is currently positioned. This method may fail to
	     * execute with an error if the mouse has not been moved anywhere since the page was loaded.
	     *
	     * @param button
	     * The button to click. 0 corresponds to the primary mouse button, 1 to the middle mouse button, 2 to the
	     * secondary mouse button. Numbers above 2 correspond to any additional buttons a mouse might provide.
	     */
	    clickMouseButton(button?: number): Command<void>;
	    /**
	     * Depresses a mouse button without releasing it.
	     *
	     * @param button The button to press. See [[Command.click]] for available options.
	     */
	    pressMouseButton(button?: number): Command<void>;
	    /**
	     * Releases a previously depressed mouse button.
	     *
	     * @param button The button to press. See [[Command.click]] for available options.
	     */
	    releaseMouseButton(button?: number): Command<void>;
	    /**
	     * Double-clicks the primary mouse button.
	     */
	    doubleClick(): Command<void>;
	    /**
	     * Taps an element on a touch screen device. If the element is outside of the viewport, the remote driver will
	     * attempt to scroll it into view automatically.
	     *
	     * @param element The element to tap.
	     */
	    tap(element: Element): Command<void>;
	    /**
	     * Depresses a new finger at the given point on a touch screen device without releasing it.
	     *
	     * @param x The screen x-coordinate to press, maybe in device pixels.
	     * @param y The screen y-coordinate to press, maybe in device pixels.
	     */
	    pressFinger(x: number, y: number): Command<void>;
	    /**
	     * Releases whatever finger exists at the given point on a touch screen device.
	     *
	     * @param x The screen x-coordinate where a finger is pressed, maybe in device pixels.
	     * @param y The screen y-coordinate where a finger is pressed, maybe in device pixels.
	     */
	    releaseFinger(x: number, y: number): Command<void>;
	    /**
	     * Moves the last depressed finger to a new point on the touch screen.
	     *
	     * @param x The screen x-coordinate to move to, maybe in device pixels.
	     * @param y The screen y-coordinate to move to, maybe in device pixels.
	     */
	    moveFinger(x: number, y: number): Command<void>;
	    /**
	     * Scrolls the currently focused window on a touch screen device.
	     *
	     * @param element
	     * An element to scroll to. The window will be scrolled so the element is as close to the top-left corner of the
	     * window as possible.
	     *
	     * @param xOffset
	     * An optional x-offset, relative to the left edge of the element, in CSS pixels. If no element is specified,
	     * the offset is relative to the previous scroll position of the window.
	     *
	     * @param yOffset
	     * An optional y-offset, relative to the top edge of the element, in CSS pixels. If no element is specified,
	     * the offset is relative to the previous scroll position of the window.
	     */
	    touchScroll(xOffset: number, yOffset: number): Command<void>;
	    touchScroll(element?: Element, xOffset?: number, yOffset?: number): Command<void>;
	    /**
	     * Performs a double-tap gesture on an element.
	     *
	     * @method
	     * @param element The element to double-tap.
	     */
	    doubleTap(element?: Element): Command<void>;
	    /**
	     * Performs a long-tap gesture on an element.
	     *
	     * @method
	     * @param element The element to long-tap.
	     */
	    longTap(element?: Element): Command<void>;
	    /**
	     * Flicks a finger. Note that this method is currently badly specified and highly dysfunctional and is only
	     * provided for the sake of completeness.
	     *
	     * @param element The element where the flick should start.
	     * @param xOffset The x-offset in pixels to flick by.
	     * @param yOffset The x-offset in pixels to flick by.
	     * @param speed The speed of the flick, in pixels per *second*. Most human flicks are 100–200ms, so
	     * this value will be higher than expected.
	     */
	    flickFinger(element: Element, xOffset: number, yOffset: number, speed?: number): Command<void>;
	    flickFinger(xOffset: number, yOffset: number, speed?: number): Command<void>;
	    /**
	     * Gets the current geographical location of the remote environment.
	     *
	     * @returns
	     * Latitude and longitude are specified using standard WGS84 decimal latitude/longitude. Altitude is specified
	     * as meters above the WGS84 ellipsoid. Not all environments support altitude.
	     */
	    getGeolocation(): Command<Geolocation>;
	    /**
	     * Sets the geographical location of the remote environment.
	     *
	     * @param location
	     * Latitude and longitude are specified using standard WGS84 decimal latitude/longitude. Altitude is specified
	     * as meters above the WGS84 ellipsoid. Not all environments support altitude.
	     */
	    setGeolocation(location: Geolocation): Command<void>;
	    /**
	     * Gets all logs from the remote environment of the given type. The logs in the remote environment are cleared
	     * once they have been retrieved.
	     *
	     * @param type
	     * The type of log entries to retrieve. Available log types differ between remote environments. Use
	     * [[Command.getAvailableLogTypes]] to learn what log types are currently available. Not all
	     * environments support all possible log types.
	     *
	     * @returns
	     * An array of log entry objects. Timestamps in log entries are Unix timestamps, in seconds.
	     */
	    getLogsFor(type: string): Command<LogEntry[]>;
	    /**
	     * Gets the types of logs that are currently available for retrieval from the remote environment.
	     */
	    getAvailableLogTypes(): Command<string[]>;
	    /**
	     * Gets the current state of the HTML5 application cache for the current page.
	     *
	     * @returns
	     * The cache status. One of 0 (uncached), 1 (cached/idle), 2 (checking), 3 (downloading), 4 (update ready), 5
	     * (obsolete).
	     */
	    getApplicationCacheStatus(): Command<number>;
	    /**
	     * Terminates the session. No more commands will be accepted by the remote after this point.
	     */
	    quit(): Command<void>;
	    /**
	     * Waits for all elements in the currently active window/frame to be destroyed.
	     *
	     * @param using
	     * The element retrieval strategy to use. See [[Command.find]] for options.
	     *
	     * @param value
	     * The strategy-specific value to search for. See [[Command.find]] for details.
	     */
	    waitForDeleted(using: string, value: string): Command<void>;
	    /**
	     * Gets the timeout for [[Command.executeAsync]] calls.
	     */
	    getExecuteAsyncTimeout(): Command<number>;
	    /**
	     * Sets the timeout for [[Command.executeAsync]] calls.
	     *
	     * @param ms The length of the timeout, in milliseconds.
	     */
	    setExecuteAsyncTimeout(ms: number): Command<void>;
	    /**
	     * Gets the timeout for [[Command.find]] calls.
	     */
	    getFindTimeout(): Command<number>;
	    /**
	     * Sets the timeout for [[Command.find]] calls.
	     *
	     * @param ms The length of the timeout, in milliseconds.
	     */
	    setFindTimeout(ms: number): Command<void>;
	    /**
	     * Gets the timeout for [[Command.get]] calls.
	     */
	    getPageLoadTimeout(): Command<number>;
	    /**
	     * Sets the timeout for [[Command.get]] calls.
	     *
	     * @param ms The length of the timeout, in milliseconds.
	     */
	    setPageLoadTimeout(ms: string): Command<void>;
	    /**
	     * Clicks the element. This method works on both mouse and touch platforms.
	     */
	    click(): Command<void>;
	    /**
	     * Submits the element, if it is a form, or the form belonging to the element, if it is a form element.
	     */
	    submit(): Command<void>;
	    /**
	     * Gets the visible text within the element. `<br>` elements are converted to line breaks in the returned
	     * text, and whitespace is normalised per the usual XML/HTML whitespace normalisation rules.
	     */
	    getVisibleText(): Command<string>;
	    /**
	     * Types into the element. This method works the same as the [[Command.pressKeys]] method
	     * except that any modifier keys are automatically released at the end of the command. This method should be used
	     * instead of [[Command.pressKeys]] to type filenames into file upload fields.
	     *
	     * Since 1.5, if the WebDriver server supports remote file uploads, and you type a path to a file on your local
	     * computer, that file will be transparently uploaded to the remote server and the remote filename will be typed
	     * instead. If you do not want to upload local files, use [[Command.pressKeys]] instead.
	     *
	     * @param value
	     * The text to type in the remote environment. See [[Command.pressKeys]] for more information.
	     */
	    type(value: string | string[]): Command<void>;
	    /**
	     * Gets the tag name of the element. For HTML documents, the value is always lowercase.
	     */
	    getTagName(): Command<string>;
	    /**
	     * Clears the value of a form element.
	     */
	    clearValue(): Command<void>;
	    /**
	     * Returns whether or not a form element is currently selected (for drop-down options and radio buttons), or
	     * whether or not the element is currently checked (for checkboxes).
	     */
	    isSelected(): Command<boolean>;
	    /**
	     * Returns whether or not a form element can be interacted with.
	     */
	    isEnabled(): Command<boolean>;
	    /**
	     * Gets a property or attribute of the element according to the WebDriver specification algorithm. Use of this
	     * method is not recommended; instead, use [[Command.getAttribute]] to retrieve DOM attributes
	     * and [[Command.getProperty]] to retrieve DOM properties.
	     *
	     * This method uses the following algorithm on the server to determine what value to return:
	     *
	     * 1. If `name` is 'style', returns the `style.cssText` property of the element.
	     * 2. If the attribute exists and is a boolean attribute, returns 'true' if the attribute is true, or null
	     *    otherwise.
	     * 3. If the element is an `<option>` element and `name` is 'value', returns the `value` attribute if it exists,
	     *    otherwise returns the visible text content of the option.
	     * 4. If the element is a checkbox or radio button and `name` is 'selected', returns 'true' if the element is
	     *    checked, or null otherwise.
	     * 5. If the returned value is expected to be a URL (e.g. element is `<a>` and attribute is `href`), returns the
	     *    fully resolved URL from the `href`/`src` property of the element, not the attribute.
	     * 6. If `name` is 'class', returns the `className` property of the element.
	     * 7. If `name` is 'readonly', returns 'true' if the `readOnly` property is true, or null otherwise.
	     * 8. If `name` corresponds to a property of the element, and the property is not an Object, return the property
	     *    value coerced to a string.
	     * 9. If `name` corresponds to an attribute of the element, return the attribute value.
	     *
	     * @param name The property or attribute name.
	     * @returns The value of the attribute as a string, or `null` if no such property or
	     * attribute exists.
	     */
	    getSpecAttribute(name: string): Command<string>;
	    /**
	     * Gets an attribute of the element.
	     *
	     * @see Element#getProperty to retrieve an element property.
	     * @param name The name of the attribute.
	     * @returns The value of the attribute, or `null` if no such attribute exists.
	     */
	    getAttribute(name: string): Command<{}>;
	    /**
	     * Gets a property of the element.
	     *
	     * @see Element#getAttribute to retrieve an element attribute.
	     * @param name The name of the property.
	     * @returns The value of the property.
	     */
	    getProperty(name: string): Command<{}>;
	    /**
	     * Determines if this element is equal to another element.
	     */
	    equals(other: Element): Command<boolean>;
	    /**
	     * Returns whether or not the element would be visible to an actual user. This means that the following types
	     * of elements are considered to be not displayed:
	     *
	     * 1. Elements with `display: none`
	     * 2. Elements with `visibility: hidden`
	     * 3. Elements positioned outside of the viewport that cannot be scrolled into view
	     * 4. Elements with `opacity: 0`
	     * 5. Elements with no `offsetWidth` or `offsetHeight`
	     */
	    isDisplayed(): Command<boolean>;
	    /**
	     * Gets the position of the element relative to the top-left corner of the document, taking into account
	     * scrolling and CSS transformations (if they are supported).
	     */
	    getPosition(): Command<{
	        x: number;
	        y: number;
	    }>;
	    /**
	     * Gets the size of the element, taking into account CSS transformations (if they are supported).
	     */
	    getSize(): Command<{
	        width: number;
	        height: number;
	    }>;
	    /**
	     * Gets a CSS computed property value for the element.
	     *
	     * @param propertyName
	     * The CSS property to retrieve. This argument must be hyphenated, *not* camel-case.
	     */
	    getComputedStyle(propertyName: string): Command<string>;
	}
	export interface SetContextMethod<T> {
	    (context: T | T[]): void;
	}
	export interface Context extends Array<any> {
	    isSingle?: boolean;
	    depth?: number;
	}

}
declare module 'leadfoot/src/helpers/pollUntil' {
	import Task from 'leadfoot/node_modules/@dojo/core/async/Task';
	/**
	 * A [[Command]] helper that polls for a value within the client environment until the value exists
	 * or a timeout is reached.
	 *
	 * @param poller
	 * The poller function to execute on an interval. The function should return `null` or `undefined` if there is not a
	 * result. If the poller function throws, polling will halt.
	 *
	 * @param args
	 * An array of arguments to pass to the poller function when it is invoked. Only values that can be serialised to JSON,
	 * plus [[Element]] objects, can be specified as arguments.
	 *
	 * @param timeout
	 * The maximum amount of time to wait for a successful result, in milliseconds. If not specified, the current
	 * `executeAsync` maximum timeout for the session will be used.
	 *
	 * @param pollInterval
	 * The amount of time to wait between calls to the poller function, in milliseconds. If not specified, defaults to 67ms.
	 *
	 * @returns
	 * A [[Command]] callback function that, when called, returns a promise that resolves to the
	 * value returned by the poller function on success and rejects on failure.
	 *
	 * @example
	 *
	 * ```js
	 * var Command = require('leadfoot/Command');
	 * var pollUntil = require('leadfoot/helpers/pollUntil');
	 *
	 * new Command(session)
	 *     .get('http://example.com')
	 *     .then(pollUntil('return document.getElementById("a");', 1000))
	 *     .then(function (elementA) {
	 *         // element was found
	 *     }, function (error) {
	 *         // element was not found
	 *     });
	 * ```
	 *
	 * @example
	 *
	 * ```js
	 * var Command = require('leadfoot/Command');
	 * var pollUntil = require('leadfoot/helpers/pollUntil');
	 *
	 * new Command(session)
	 *     .get('http://example.com')
	 *     .then(pollUntil(function (value) {
	 *         var element = document.getElementById('a');
	 *         return element && element.value === value ? true : null;
	 *     }, [ 'foo' ], 1000))
	 *     .then(function () {
	 *         // value was set to 'foo'
	 *     }, function (error) {
	 *         // value was never set
	 *     });
	 * ```
	 */
	export default function pollUntil(poller: Function | string, args?: any[], timeout?: number, pollInterval?: number): () => Task<any>;
	export default function pollUntil(poller: Function | string, timeout?: number, pollInterval?: number): () => Task<any>;

}
declare module 'leadfoot/src/index' {
	/**
	 * @see [[Server]]
	 */
	export { default as Server } from 'leadfoot/src/Server';
	/**
	 * @see [[Session]]
	 */
	export { default as Session } from 'leadfoot/src/Session';
	/**
	 * @see [[Element]]
	 */
	export { default as Element } from 'leadfoot/src/Element';
	/**
	 * @see [[Command]]
	 */
	export { default as Command } from 'leadfoot/src/Command';
	/**
	 * @see [[keys]]
	 */
	export { default as keys } from 'leadfoot/src/keys';
	/**
	 * @see [[helpers/pollUntil]]
	 */
	export { default as pollUntil } from 'leadfoot/src/helpers/pollUntil';
	export * from 'leadfoot/src/interfaces';

}
