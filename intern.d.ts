declare module 'intern/src/lib/Deferred' {
	import Promise from '@dojo/shim/Promise';
	export default class Deferred<T> {
	    private _resolver;
	    private _rejector;
	    readonly promise: Promise<T>;
	    constructor();
	    /**
	     * Wraps any callback to resolve the deferred so long as the callback
	     * executes without throwing any Errors.
	     */
	    callback(callback: Function): any;
	    /**
	     * Wraps a callback to reject the deferred if the callback throws an Error.
	     */
	    rejectOnError(callback: Function): any;
	    resolve(value?: T): void;
	    reject(error?: Error): void;
	    protected _finalize(): void;
	}

}
declare module 'intern/src/lib/types' {
	import Test from 'intern/src/lib/Test';
	export interface InternError {
	    name: string;
	    message: string;
	    stack?: string;
	    showDiff?: boolean;
	    actual?: any;
	    expected?: any;
	    relatedTest?: Test;
	}
	export type RuntimeEnvironment = 'node' | 'browser';

}
declare module 'intern/src/lib/common/util' {
	import Task from '@dojo/core/async/Task';
	export interface TextLoader {
	    (path: string): Task<string>;
	}
	/**
	 * Load config data from a given path, using a given text loader, and mixing args and/or a childConfig into the final
	 * config value if provided.
	 */
	export function loadConfig(configPath: string, loadText: TextLoader, args?: {
	    [key: string]: any;
	}, childConfig?: string | string[]): Task<any>;
	export function getConfigDescription(config: any): string;
	/**
	 * Normalize a path such that it ends in '/'
	 */
	export function normalizePathEnding(path: string): string;
	/**
	 * Parse an array of name=value arguments into an object
	 */
	export function parseArgs(rawArgs: string[]): {
	    [key: string]: any;
	};
	/**
	 * Parse a JSON string that may contain comments
	 */
	export function parseJson(json: string): any;
	/**
	 * Parse a particular type of value from a given value
	 *
	 * @param name The 'name' of the value being parsed (used for error messages)
	 * @param value A value to parse something from
	 * @param parser The type of thing to parse, or a parser function
	 * @param requiredProperty Only used with 'object' and 'object[]' parsers
	 */
	export function parseValue(name: string, value: any, parser: TypeName | Parser, requiredProperty?: string): any;
	export type TypeName = 'string' | 'boolean' | 'number' | 'regexp' | 'object' | 'string[]' | 'object[]';
	export type Parser<T = any> = (value: any) => T;
	/**
	 * Remove all instances of of an item from any array and return the removed instances.
	 */
	export function pullFromArray<T>(haystack: T[], needle: T): T[];
	/**
	 * Split a config path into a file name and a child config name.
	 */
	export function splitConfigPath(path: string): {
	    configFile: string;
	    childConfig?: string;
	};
	/**
	 * Convert an object to JSON, handling non-primitive properties
	 *
	 * @param object The object to serialise.
	 * @returns A JSON string
	 */
	export function stringify(object: Object, indent?: string): string;

}
declare module 'intern/src/lib/node/util' {
	import { RawSourceMap } from 'source-map';
	/**
	 * Expand a list of glob patterns into a flat file list
	 */
	export function expandFiles(patterns?: string[] | string): any;
	/**
	 * Get the user-supplied config data, which may include command line args and a config file.
	 */
	export function getConfig(configFile?: string): any;
	/**
	 * Normalize a path (e.g., resolve '..')
	 */
	export function normalizePath(path: string): any;
	/**
	 * Given a source filename, and optionally code, return the file's source map if one exists.
	 */
	export function readSourceMap(sourceFile: string, code?: string): RawSourceMap | undefined;

}
declare module 'intern/src/lib/common/ErrorFormatter' {
	import { InternError } from 'intern/src/lib/types';
	import Executor from 'intern/src/lib/executors/Executor';
	export default class ErrorFormatter implements ErrorFormatterProperties {
	    readonly executor: Executor;
	    constructor(executor: Executor);
	    /**
	     * Generates a full error message from a plain Error object, avoiding duplicate error messages that might be
	     * caused by different opinions on what a stack trace should look like.
	     *
	     * @param error An object describing the error.
	     * @returns A string message describing the error.
	     */
	    format(error: string | Error | InternError, options?: ErrorFormatOptions): string;
	    protected _getSource(tracepath: string): string;
	    /**
	     * Creates a unified diff to explain the difference between two objects.
	     *
	     * @param actual The actual result.
	     * @param expected The expected result.
	     * @returns A unified diff formatted string representing the difference between the two objects.
	     */
	    protected _createDiff(actual: Object, expected: Object): string;
	    /**
	     * Return a trace line in a standardized format.
	     */
	    protected _formatLine(data: {
	        func?: string;
	        source: string;
	    }): string;
	    /**
	     * Parse a stack trace, apply any source mappings, and normalize its format.
	     */
	    protected _normalizeStackTrace(stack: string): string;
	    /**
	     * Process Chrome, Opera, and IE traces.
	     *
	     * Ex)
	     *   at Object._updateExpressionOptions (AxiomEditor.js:511)
	     *   at Object.<anonymous> (AxiomEditor.js:291)
	     *   at Function.m.emit (dojo.js.uncompressed.js:8875)
	     */
	    protected _processChromeTrace(lines: string[]): string[];
	    /**
	     * Process Safari and Firefox traces.
	     *
	     * Ex)
	     *   _updateExpressionOptions@http://localhost:8080/AxiomEditor.js:511:49
	     *   http://localhost:8080/AxiomEditor.js:291:34
	     *   dispatchEvent@[native code]
	     *   emit@http://ajax.googleapis.com/ajax/libs/dojo/1.12.2/dojo/dojo.js:118:282
	     */
	    protected _processSafariTrace(lines: string[]): string[];
	}
	export interface ErrorFormatterProperties {
	    executor: Executor;
	}
	export interface ErrorFormatOptions {
	    space?: string;
	}

}
declare module 'intern/src/lib/node/ErrorFormatter' {
	import ErrorFormatter from 'intern/src/lib/common/ErrorFormatter';
	import Node from 'intern/src/lib/executors/Node';
	export default class NodeErrorFormatter extends ErrorFormatter {
	    private fileSourceMaps;
	    private fileSources;
	    readonly executor: Node;
	    constructor(executor: Node);
	    /**
	     * Dereference the source from a traceline.
	     */
	    protected _getSource(tracepath: string): string;
	    private _getSourceHelper(tracepath);
	    /**
	     * Get the original position of line:column based on map.
	     *
	     * Assumes mappings are is in order by generatedLine, then by generatedColumn; maps created with
	     * SourceMapConsumer.eachMapping should be in this order by default.
	     */
	    private getOriginalPosition(map, line, column?);
	    /**
	     * Load and process the source map for a given file.
	     */
	    private getSourceMap(filepath);
	}

}
declare module 'intern/src/lib/ProxiedSession' {
	import Session from 'leadfoot/Session';
	import Node from 'intern/src/lib/executors/Node';
	/**
	 * A ProxiedSession object represents a WebDriver session that interacts with the Intern instrumenting server. It
	 * collects code instrumentation data from pages and converts local filesystem paths into URLs for use with
	 * {@link module:leadfoot/Session#get}.
	 */
	export default class ProxiedSession extends Session {
	    /**
	     * Indicate whether coverage data should be requested before performing a request.
	     */
	    coverageEnabled: boolean;
	    /**
	     * The name of the global variable used to store coverage data.
	     */
	    coverageVariable: string;
	    /**
	     * The Executor hosting this session.
	     */
	    executor: Node;
	    /**
	     * The number of characters that need to be truncated from the front of file paths to get a working path-part
	     * for a URL.
	     */
	    serverBasePathLength: number;
	    /**
	     * The base URL of the server server in use.
	     */
	    serverUrl: string;
	    private _heartbeatIntervalHandle;
	    /**
	     * Navigates the browser to a new URL like {@link module:leadfoot/Session#get}, but retrieves any code coverage
	     * data recorded by the browser prior to navigation.
	     */
	    get(url: string): any;
	    /**
	     * Quits the browser like {@link module:leadfoot/Session#quit}, but retrieves any code coverage data recorded
	     * by the browser prior to quitting.
	     */
	    quit(): any;
	    /**
	     * Sets up a timer to send no-op commands to the remote server on an interval to prevent long-running unit tests
	     * from causing the session to time out.
	     *
	     * @param delay Amount of time to wait between heartbeats. Setting the delay to 0 will disable heartbeats.
	     */
	    setHeartbeatInterval(delay: number): any;
	    protected _getCoverage(): any;
	}

}
declare module 'intern/src/lib/Environment' {
	export default class Environment {
	    browserName: string;
	    version: string;
	    platform: string;
	    platformVersion: string;
	    constructor(kwArgs: {
	        [key: string]: any;
	    });
	    toString(): string;
	}

}
declare module 'intern/src/lib/resolveEnvironments' {
	import Environment from 'intern/src/lib/Environment';
	import { NormalizedEnvironment } from 'digdug/Tunnel';
	/**
	 * Resolves a collection of Intern test environments to a list of service environments
	 *
	 * @param capabilities a base set of capabilities for all environments
	 * @param environments a list of user-requested enviromnents
	 * @param available a list of available environments
	 * @returns a list of flattened service environments
	 */
	export default function resolveEnvironments(capabilities: {
	    [key: string]: any;
	}, environments: EnvironmentOptions[], available?: NormalizedEnvironment[]): Environment[];
	export interface EnvironmentOptions {
	    browserName: string | string[];
	    version?: (string | string[] | number | number[]);
	    [key: string]: any;
	}
	export interface FlatEnvironment {
	    browserName: string;
	    version?: string;
	    [key: string]: any;
	}

}
declare module 'intern/src/lib/executors/Browser' {
	import Executor, { Config, Events } from 'intern/src/lib/executors/Executor';
	import { RuntimeEnvironment } from 'intern/src/lib/types';
	/**
	 * A Browser executor is used to run unit tests in a browser.
	 */
	export default class Browser extends Executor<Events, Config> {
	    constructor(config?: Partial<Config>);
	    readonly environment: RuntimeEnvironment;
	    /**
	     * Load a script or scripts via script injection.
	     *
	     * @param script a path to a script
	     */
	    loadScript(script: string | string[]): any;
	    protected _resolveConfig(): any;
	}
	export { Events, Config };

}
declare module 'intern/src/lib/RemoteSuite' {
	import Suite, { SuiteOptions } from 'intern/src/lib/Suite';
	import Task from '@dojo/core/async/Task';
	import Node, { Events } from 'intern/src/lib/executors/Node';
	import { Config as BrowserConfig } from 'intern/src/lib/executors/Browser';
	/**
	 * RemoteSuite is a class that acts as a local server for one or more unit test suites being run in a remote browser.
	 */
	export default class RemoteSuite extends Suite {
	    executor: Node;
	    constructor(options?: Partial<SuiteOptions>);
	    /**
	     * Override Suite#id to exclude the RemoteSuite's name from the generated ID since the RemoteSuite is just a proxy
	     * for a remote suite.
	     */
	    readonly id: string;
	    /**
	     * Run a suite in a remote browser.
	     */
	    run(): Task<any>;
	}
	export interface RemoteEvents extends Events {
	    remoteStatus: string;
	}
	export interface RemoteConfig extends BrowserConfig {
	    serverUrl: string;
	    sessionId: string;
	    runInSync?: boolean;
	    socketPort?: number;
	}

}
declare module 'intern/src/lib/channels/Base' {
	import { RemoteEvents } from 'intern/src/lib/RemoteSuite';
	import Task from '@dojo/core/async/Task';
	export default abstract class BaseChannel {
	    readonly url: string;
	    readonly sessionId: string;
	    constructor(options: ChannelOptions);
	    /**
	     * Send a message, or schedule it to be sent. Return a promise that resolves when the message has been sent.
	     */
	    sendMessage(name: keyof RemoteEvents, data: any): any;
	    protected abstract _sendData(name: keyof RemoteEvents, data: any): Task<void>;
	}
	export interface ChannelOptions {
	    sessionId: string;
	    /** An HTTP URL that the testing host can be reached at */
	    url: string;
	    /** A websocket port */
	    port?: number;
	    /** A timeout for websocket responses */
	    timeout?: number;
	}
	export function isChannel(value: any): value is BaseChannel;
	export interface ChannelOptions {
	    sessionId: string;
	    url: string;
	    /** A WebSocket port */
	    port?: number;
	    /** A timeout for WebSocket responses */
	    timeout?: number;
	}
	export interface Message {
	    sessionId: string;
	    id: string;
	    name: string;
	    data: any;
	}

}
declare module 'intern/src/lib/Server' {
	import { Server as HttpServer } from 'http';
	import { Handle } from '@dojo/interfaces/core';
	import Node from 'intern/src/lib/executors/Node';
	import * as WebSocket from 'ws';
	export default class Server implements ServerProperties {
	    /** Executor managing this Server */
	    readonly executor: Node;
	    /** Base path to resolve file requests against */
	    basePath: string;
	    /** Port to use for HTTP connections */
	    port: number;
	    /** If true, wait for emit handlers to complete before responding to a message */
	    runInSync: boolean;
	    /** Port to use for WebSocket connections */
	    socketPort: number;
	    protected _codeCache: {
	        [filename: string]: {
	            mtime: number;
	            data: string;
	        };
	    } | null;
	    protected _httpServer: HttpServer | null;
	    protected _sessions: {
	        [id: string]: {
	            listeners: ServerListener[];
	        };
	    };
	    protected _wsServer: WebSocket.Server | null;
	    constructor(options: ServerOptions);
	    start(): any;
	    stop(): any;
	    /**
	     * Listen for all events for a specific session
	     */
	    subscribe(sessionId: string, listener: ServerListener): Handle;
	    private _getSession(sessionId);
	    private _handleHttp(request, response);
	    private _handleFile(request, response, shouldInstrument?, omitContent?);
	    private _handleMessage(message);
	    private _handleWebSocket(client);
	    private _publish(message);
	    private _send404(response);
	}
	export interface ServerProperties {
	    basePath: string;
	    executor: Node;
	    port: number;
	    runInSync: boolean;
	    socketPort: number;
	}
	export interface ServerListener {
	    (name: string, data: any): void;
	}
	export type ServerOptions = Partial<ServerProperties> & {
	    executor: Node;
	};

}
