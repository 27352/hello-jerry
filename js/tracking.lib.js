(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.vtg || (g.vtg = {})).tracking = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function Injectable(injectable) {
    return function (constructor) {
        constructor.prototype.injectable = injectable;
    };
}
exports.Injectable = Injectable;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.setLogger = function (logger) {
        if (typeof logger === 'object' && typeof logger.log === 'function') {
            Log.logger = logger;
        }
    };
    Log.logger = console || null;
    return Log;
}());
exports.Log = Log;
/**
 * Defines a one-to-many dependency between objects so that when one object
 * changes state, all its dependents are notified and updated automatically.
 *
 * Observable is responsible for maintaining a list of observers and notifying them
 * of state changes by invoking their onUpdate() method.
 * Observable also registers and removes Observers as needed.
 */
var Observable = /** @class */ (function () {
    function Observable() {
        /**
         * List of Observer objects
         */
        this.observers = [];
    }
    /**
     * Registers an Observer by adding it to the top of the observers list.
     * Invokes the Observer's onRegister() method.
     * @param observer
     */
    Observable.prototype.register = function (observer) {
        if (typeof observer === 'object') {
            this.observers.unshift(observer);
            observer.onRegister();
        }
    };
    /**
     * Removes the observer from the list of observers by filtering on the array list.
     *
     * @param observer
     */
    Observable.prototype.remove = function (observer) {
        this.observers = this.observers.filter(function (item) { return item !== observer; });
    };
    /**
     * Invokes each Observer's onUpdate() method to notify them of changes using the
     * supplied notification.
     *
     * @param notification The Notification object
     */
    Observable.prototype.notify = function (notification) {
        for (var i = this.observers.length; i--;) {
            var observer = this.observers[i];
            observer.onUpdate.call(observer, notification);
        }
    };
    return Observable;
}());
exports.Observable = Observable;
var SystemInfo = /** @class */ (function () {
    function SystemInfo() {
    }
    Object.defineProperty(SystemInfo, "modules", {
        // Agent modules are populated at build time from bundle.config
        get: function () {
            return [AdobeAgent, SparrowAgent];
        },
        enumerable: true,
        configurable: true
    });
    SystemInfo.isDev = function () {
        return !!(DataLayer.get('ut.env') === 'dev');
    };
    // Version is populated at build time
    SystemInfo.version = 'v0.6.2 4/21/2020';
    // Application Platform is populated at build time from bundle.config
    SystemInfo.platform = 'Comcast';
    SystemInfo.ssl = true;
    SystemInfo.tracker = {};
    return SystemInfo;
}());
exports.SystemInfo = SystemInfo;
var View = /** @class */ (function () {
    function View() {
    }
    View.isWindow = function () {
        return typeof window === 'object';
    };
    View.isTop = function () {
        return typeof top === 'object';
    };
    View.isVar = function (name, type) {
        var hier = name.split('.');
        // Check two levels deep. Ex: typeof window['ns_']['comScore']
        if (hier.length === 2) {
            return View.isWindow() && typeof window[hier[0]] === type
                && typeof window[hier[0]][hier[1]] === type;
        }
        return View.isWindow() && typeof window[name] === type;
    };
    View.getVar = function (name) {
        return View.isWindow() && window[name];
    };
    View.getScreenSize = function () {
        var win = window;
        return View.isWindow() && win.screen && win.screen.width && win.screen.height
            ? win.screen.width + 'x' + win.screen.height
            : 'N/A';
    };
    View.isHttps = function () {
        return View.isTop() && top.location.href.search(/^https/) > -1;
    };
    View.getProtocol = function () {
        if (!View.isTop()) {
            // Use ssl by default
            return 'https://';
        }
        return View.isHttps() ? 'https://' : 'http://';
    };
    View.stringify = function (data) {
        return View.isWindow && View.getVar('JSON') ? window.JSON.stringify(data) : data.toString();
    };
    return View;
}());
exports.View = View;
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Cookie.get = function (name) {
        var document = View.getVar('document');
        if (!document) {
            return '';
        }
        var cookie = '; ' + document.cookie;
        var values = cookie.split(['; ', name, '='].join(''));
        var result = '';
        if (values.length > 1) {
            var parts = values[1].split(';');
            if (parts) {
                result = parts.shift() || '';
            }
        }
        return result;
    };
    Cookie.set = function (name, value) {
        var document = View.getVar('document');
        if (!document) {
            return;
        }
        // https://en.wikipedia.org/wiki/Year_2038_problem
        document.cookie = [
            name + '=' + value,
            ';expires=Tue, 19 Jan 2038 03:14:07 UTC',
            ';path=/'
        ].join('');
    };
    return Cookie;
}());
exports.Cookie = Cookie;
var dev = SystemInfo.isDev;
var log = Log.logger.log;
var msg = '[Http]';
var HttpRequest = /** @class */ (function () {
    function HttpRequest() {
    }
    HttpRequest.POST = function (options) {
        var xhr = new XMLHttpRequest();
        var url = HttpRequest.makeUrl(options.ssl, options.url);
        var async = true;
        xhr.open('POST', url, async);
        xhr.setRequestHeader('Content-Type', options.type || 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                logger.log('[DEBUG] POST', url, xhr.status);
                logger.log('[DEBUG] POST', xhr.responseText || 'none');
                options.callback({
                    xhr: xhr,
                    status: xhr.status,
                    text: xhr.status >= 200 && xhr.status < 300 || xhr.status === 304
                        ? xhr.responseText
                        : xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            dev() && log(msg, url, xhr.status);
            options.callback({
                xhr: xhr,
                status: -1,
                text: 'Error ' + xhr.status
            });
        };
        xhr.send(options.data);
    };
    HttpRequest.GET = function (options) {
        var xhr = new XMLHttpRequest();
        var url = HttpRequest.makeUrl(options.ssl, options.url.indexOf('?') === -1 ? options.url + '?' + options.data : options.url);
        var async = true;
        xhr.open('GET', url, async);
        xhr.onload = function () {
            logger.log('[DEBUG] GET', url, xhr.status);
            logger.log('[DEBUG] GET', xhr.responseText || 'none');
            options.callback({
                xhr: xhr,
                status: xhr.status,
                text: xhr.responseText
            });
        };
        xhr.send();
    };
    /**
     * Constructs the url by prepending the protocol based
     * on the ssl boolean and the location. Ex: "https://www.cbssports.com/live"
     *
     * @param ssl
     * @param location
     * @returns string the url
     */
    HttpRequest.makeUrl = function (ssl, location) {
        return (ssl ? 'https:' : 'http:') + '//' + location;
    };
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
        this.isRunning = false;
    }
    Queue.prototype.add = function (item) {
        this.items.unshift(item);
    };
    Queue.prototype.each = function (handler) {
        if (this.isRunning) {
            return;
        }
        this.isRunning = true;
        var i = this.items.length;
        while (i--) {
            var item = this.items.pop();
            if (item) {
                handler(item);
            }
        }
        this.isRunning = false;
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Queue;
}());
exports.Queue = Queue;
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.trim = function (s) {
        return s.replace(/^\s+|\s$/g, '');
    };
    StringUtil.isDefined = function (s) {
        return !(typeof s === 'undefined' || s === 'undefined' || s === '');
    };
    return StringUtil;
}());
exports.StringUtil = StringUtil;
var Timer = /** @class */ (function () {
    function Timer(milliseconds) {
        this.milliseconds = milliseconds;
        this.isRunning = false;
    }
    Timer.prototype.start = function (handler) {
        if (!setInterval) {
            return;
        }
        if (!this.isRunning) {
            this.intervalId = setInterval(handler, this.milliseconds);
            this.isRunning = true;
        }
    };
    Timer.prototype.stop = function () {
        if (!clearInterval) {
            return;
        }
        clearInterval(this.intervalId);
        this.isRunning = false;
    };
    return Timer;
}());
exports.Timer = Timer;
function ConfigParam(value) {
    return function (target, propertyKey) {
        if (!target.keys) {
            target.keys = {};
        }
        target.keys[propertyKey] = function (data) {
            if (data.hasOwnProperty(propertyKey) && data[propertyKey]) {
                return data[propertyKey];
            }
            else {
                if (typeof value !== 'boolean') {
                    return value ? value : '';
                }
                else {
                    return value;
                }
            }
        };
    };
}
exports.ConfigParam = ConfigParam;
var DataAccess = /** @class */ (function () {
    function DataAccess(agent) {
        this.agent = agent;
        this.dataType = {};
        this.format();
    }
    DataAccess.prototype.format = function () {
        var _this = this;
        var self = this;
        var params = this.agent.config.params;
        Object.keys(this.keys).forEach(function (key) {
            self[key] = _this.keys[key](params);
        });
        return self;
    };
    /**
     * Converts all values in the dictionary to strings.
     *
     * @param map The dictionary
     * @returns The formatted dictionary
     */
    DataAccess.prototype.mapData = function (map) {
        var engine = new RulesEngine([
            Rules.ReplaceTokens,
            Rules.Ternary,
            Rules.OrCondition,
            Rules.DataType
        ]);
        var data = this.agent.getData();
        engine.addSource('data', data);
        engine.addSource('context', data.contextData || {});
        engine.addSource('config', this.agent.config.params);
        engine.setMap(map);
        engine.setType(this.dataType);
        return engine.getData();
    };
    return DataAccess;
}());
exports.DataAccess = DataAccess;
var DataLayer = /** @class */ (function () {
    function DataLayer() {
    }
    DataLayer.get = function (key) {
        var win = window;
        return (win.utag && win.utag.data) ? win.utag.data[key] : '';
    };
    return DataLayer;
}());
exports.DataLayer = DataLayer;
var DataProxy = /** @class */ (function () {
    function DataProxy() {
        this.data = {};
    }
    DataProxy.prototype.update = function (data) {
        this.data = this.merge(data);
        this.data.timestamp = (new Date()).getTime();
        this.data.utcSeconds = Math.round((new Date()).getTime() / 1000);
    };
    DataProxy.prototype.getData = function () {
        return this.data;
    };
    DataProxy.prototype.merge = function (data) {
        var vo = this.data;
        Object.keys(data).forEach(function (key) {
            var value = data[key];
            !(value === undefined || value === null) && (vo[key] = value);
        });
        return vo;
    };
    return DataProxy;
}());
exports.DataProxy = DataProxy;
var DataStorage = /** @class */ (function () {
    function DataStorage() {
    }
    DataStorage.get = function (key) {
        var win = window;
        var value = '';
        if (win.localStorage) {
            value = win.localStorage.getItem(key);
        }
        else {
            value = Cookie.get(key);
        }
        return value || '';
    };
    DataStorage.set = function (key, value) {
        var win = window;
        if (win.localStorage) {
            win.localStorage.setItem(key, value);
        }
        else {
            Cookie.set(key, value);
        }
    };
    return DataStorage;
}());
exports.DataStorage = DataStorage;
var Rules = /** @class */ (function () {
    function Rules() {
    }
    Rules.ReplaceTokens = function (options) {
        var data = {};
        Object.keys(options.map).forEach(function (key) {
            var value = options.map[key];
            var match = value ? value.toString().match(/\{\w+.\w+\}/g) : null;
            data[key] = options.map[key];
            match && match.forEach(function (item) {
                var token = item.replace(/\{|\}/g, '').split('.');
                var lookUp = options.source[token[0]];
                var value = lookUp[token[1]];
                data[key] = data[key].replace(item.toString(), value);
            });
        });
        return data;
    };
    Rules.Ternary = function (options) {
        var data = {};
        Object.keys(options.data).forEach(function (key) {
            var value = options.data[key].toString();
            var match = value.match(/(.+)\?(.+):(.+)/);
            if (match && match.length > 3) {
                var condition = StringUtil.trim(match[1]);
                var hasValue = false;
                if (condition === 'true' || condition !== 'undefined') {
                    hasValue = true;
                }
                if (condition === 'false' || condition === '') {
                    hasValue = false;
                }
                data[key] = hasValue ? match[2] : match[3];
                data[key] = StringUtil.trim(data[key]);
            }
            else {
                data[key] = options.data[key];
            }
        });
        return data;
    };
    Rules.OrCondition = function (options) {
        var data = {};
        Object.keys(options.data).forEach(function (key) {
            var value = options.data[key].toString();
            var match = value.match(/(.+)\|\|(.+)/);
            data[key] = value;
            if (match && match.length > 2) {
                var value1 = StringUtil.trim(match[1] || '');
                var value2 = StringUtil.trim(match[2] || '');
                if (StringUtil.isDefined(value1)) {
                    data[key] = value1;
                }
                else if (StringUtil.isDefined(value2)) {
                    data[key] = value2;
                }
            }
        });
        return data;
    };
    Rules.DataType = function (options) {
        var data = {};
        Object.keys(options.data).forEach(function (key) {
            var value = options.data[key].toString();
            if (value) {
                switch (options.types[key]) {
                    case 'int':
                        data[key] = parseInt(value);
                        break;
                    case 'boolean':
                        data[key] = value === 'true';
                        break;
                    default:
                        data[key] = value;
                        break;
                }
            }
        });
        return data;
    };
    return Rules;
}());
exports.Rules = Rules;
var RulesEngine = /** @class */ (function () {
    function RulesEngine(rules) {
        this.rules = [];
        this.source = {};
        this.map = {};
        this.types = {};
        this.rules = rules;
    }
    RulesEngine.prototype.addSource = function (name, data) {
        this.source[name] = data;
    };
    RulesEngine.prototype.setMap = function (map) {
        this.map = map;
    };
    RulesEngine.prototype.setType = function (types) {
        this.types = types;
    };
    RulesEngine.prototype.getData = function () {
        var data = {};
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            var options = {
                source: this.source,
                map: this.map,
                data: data,
                types: this.types
            };
            data = rule(options);
        }
        return data;
    };
    return RulesEngine;
}());
exports.RulesEngine = RulesEngine;
/**
 * Agent implements the Observer interface to get notified of state changes
 * and to update its state when notified of events and data.
 */
var Agent = /** @class */ (function () {
    function Agent(config, observable) {
        this.config = config;
        this.observable = observable;
        this.events = {};
        this.notifications = new Queue();
        this.isSdkLoaded = false;
        this.isDev = false;
        this.isDev = observable.isDev;
    }
    Agent.prototype.onRegister = function () { };
    /**
     * Responsible for processing notifications when the Observable notify() method is invoked.
     * It adds the notification to the queue. Checks if the Sdk for this agent is available
     * using hasSdkLoaded() method before processing the notification queue.
     *
     * @param notification the notification that was emitted.
     */
    Agent.prototype.onUpdate = function (notification) {
        var _this = this;
        this.notifications.add(notification);
        // Process notification queue if the SDK was loaded
        if (this.hasSdkLoaded()) {
            this.notifications.each(function (notification) {
                _this.onNotify(notification);
            });
        }
    };
    /**
     * Determines if the Agent Sdk is specified in the injectable object and if the source exists on the parent.
     * Uses View.getVar() method to safely inspect the global variable.
     *
     * @returns boolean representing the availability of the agent Sdk.
     */
    Agent.prototype.hasSdkLoaded = function () {
        var self = this;
        if (typeof self.injectable !== 'object') {
            return this.isSdkLoaded;
        }
        var injectable = self.injectable;
        var sdkObject = View.getVar(injectable.name);
        if (sdkObject) {
            self[injectable.name] = sdkObject;
            this.isSdkLoaded = true;
        }
        return this.isSdkLoaded;
    };
    /**
     * Invoked when the notification is processed.
     *
     * @param notification the notification emitted with the event.
     */
    Agent.prototype.onNotify = function (notification) {
        this.notification = notification;
        var adInfo = {
            isAd: false,
            adBreakType: 'preroll'
        };
        switch (notification.name) {
            case 'adBreakStart':
            case 'adStart':
                adInfo.isAd = true;
                var data = notification.body;
                if (data && data.adBreakType) {
                    adInfo.adBreakType = data.adBreakType.toLowerCase() + 'roll';
                }
                break;
            case 'adEnd':
            case 'adBreakEnd':
            case 'contentStart':
                adInfo.isAd = false;
                break;
        }
        this.observable.dataProxy.update(adInfo);
        var handler = this.events[notification.name];
        handler && handler.call(this);
    };
    /**
     * Getter for the DataProxy DataVo.
     *
     * @returns the instance of DataVo.
     */
    Agent.prototype.getData = function () {
        return this.observable.dataProxy.getData();
    };
    /**
     * Determines if the current playhead has advanced to at least 95 percent completion.
     * Compares the playead to the computation of .95 and the duration value.
     *
     * @returns boolean representing if playhead is withing the 95 percentile of completion.
     */
    Agent.prototype.hasContentCompleted = function () {
        var metadata = this.getData();
        // Don't compute for live content
        if (metadata && metadata.isLive) {
            return false;
        }
        return metadata.playhead >= metadata.duration * 0.95;
    };
    return Agent;
}());
exports.Agent = Agent;
function Subscribe() {
    return function (target, propertyKey) {
        target.observer = true;
    };
}
exports.Subscribe = Subscribe;
/**
 *
adBreakEnd
adBreakStart
adClick
adEnd
adError
adPause
adResume
adSkip
bitrateChange
bufferEnd
bufferStart
cdnChange
contentEnd
contentPause
contentResume
contentStart
drmCreated
hb
id3Data
playerError
playerLoaded
seekEnd
seekStart
sessionEnd
sessionStart
timeUpdate
*/
// export enum AppEvent {
//     /* App Lifecycle */
//     //AppClose = 'appClose',
//     //EnterForeground = 'EnterForeground',
//     //ExitForeground = 'ExitForeground',
//     /* Ad Events */
//     AdBreakEnd = 'adBreakEnd',
//     AdBreakStart = 'adBreakStart',
//     //AdBreakMetadata = 'adBreakMetadata',
//     AdClick = 'adClick',
//     AdEnd = 'adEnd',
//     AdError = 'adError',
//     AdLoaded = 'adLoaded',
//     AdPause = 'adPause',
//     //AdRequest = 'adRequest',
//     //AdResponse = 'adResponse',
//     AdResume = 'adResume',
//     AdSkip = 'adSkip',
//     AdStart = 'adStart',
//     Ad1stQt = 'ad1stQt',
//     Ad2ndQt = 'ad2ndQt',
//     Ad3rdQt = 'ad3rdQt',
//     /* Player Lifecycle */
//     BitrateChange = 'bitrateChange',
//     BufferEnd = 'bufferEnd',
//     BufferStart = 'bufferStart',
//     CdnChange = 'cdnChange',
//     //ChapterEnd = 'chapterEnd',
//     //ChapterStart = 'chapterStart',
//     //ChapterSkip = 'chapterSkip',
//     ContentEnd = 'contentEnd',
//     //ContentLoaded = 'contentLoaded',
//     ContentPause = 'contentPause',
//     ContentResume = 'contentResume',
//     ContentStart = 'contentStart',
//     //ContextData = 'contextData',
//     DashJsLoaded = 'dashJsLoaded',
//     //FirstQuartile = 'firstQuartile',
//     Heartbeat = 'hb',
//     HlsJsLoaded = 'hlsJsLoaded',
//     Id3Data = 'id3Data',
//     //LiveSegmentEnd = 'liveSegmentEnd',
//     //MidQuartile = 'midQuartile',
//     PlayerError = 'playerError',
//     PlayerLoaded = 'playerLoaded',
//     //QosEvent = 'qosEvent',
//     SeekEnd = 'seekEnd',
//     SeekStart = 'seekStart',
//     //ThirdQuartile = 'thirdQuartile',
//     PlayheadUpdate = 'playheadUpdate',
//     /* Session Events */
//     SessionEnd = 'sessionEnd',
//     SessionStart = 'sessionStart'
// }
var AppTracker = /** @class */ (function () {
    function AppTracker(config) {
        this.config = config;
        this.queue = new Queue();
        this.isReady = false;
        this.info = {};
        var adobeConfig = config.Adobe;
        if (adobeConfig && adobeConfig.enabled) {
            this.startUp(adobeConfig);
        }
    }
    AppTracker.prototype.startUp = function (config) {
        var _this = this;
        (new AdobeCloudId(config)).fetchMid()
            .then(function (ids) {
            var engine = new RulesEngine([Rules.ReplaceTokens]);
            var server = config.params.serverInfo;
            ids.mid && DataStorage.set(AdobeCloudId.MID, ids.mid);
            engine.addSource('config', {
                reportSuite: SystemInfo.isDev() ? server.devSuite : server.prodSuite,
                mid: ids.mid
            });
            engine.setMap(config.params.appTrackingInfo);
            _this.info = engine.getData();
            _this.api = new AdobeData(_this.info.dataUrl);
            _this.isReady = true;
            // Do not propagate data url in the request
            delete _this.info.dataUrl;
            // Flush the queue
            _this.flush();
        });
    };
    AppTracker.prototype.track = function (data) {
        this.queue.add(data);
        if (this.isReady) {
            this.flush();
        }
    };
    AppTracker.prototype.flush = function () {
        var _this = this;
        this.queue.each(function (data) {
            _this.post(data);
        });
    };
    AppTracker.prototype.post = function (data) {
        // Copy config info to each request
        for (var key in this.info) {
            !data[key] && (data[key] = this.info[key]);
        }
        this.api && this.api.post(data);
    };
    return AppTracker;
}());
exports.AppTracker = AppTracker;
var Heartbeat = /** @class */ (function () {
    function Heartbeat(tracker) {
        this.tracker = tracker;
        this.hasContentStart = false;
        this.hasSessionEnd = false;
        this.isStopped = true;
        this.isAd = false;
        this.config = {
            name: 'Hb',
            enabled: true,
            params: {}
        };
        this.timer = new Timer(10000);
    }
    Heartbeat.prototype.onRegister = function () { };
    Heartbeat.prototype.onUpdate = function (notification) {
        switch (notification.name) {
            case 'contentStart':
                this.hasSessionEnd = false;
                this.hasContentStart = true;
                break;
            case 'adBreakStart':
                this.isAd = true;
                this.timer.stop();
                break;
            case 'adBreakEnd':
                this.isAd = false;
                this.isStopped = true;
                break;
            case 'contentPause':
            case 'bufferStart':
            case 'seekStart':
                this.isStopped = true;
                this.startHb();
                break;
            case 'timeUpdate':
                this.timeUpdate();
                break;
            case 'contentEnd':
            case 'sessionEnd':
                this.hasSessionEnd = true;
                this.hasContentStart = false;
                this.isStopped = true;
                this.timer.stop();
                break;
        }
    };
    Heartbeat.prototype.timeUpdate = function () {
        if (this.hasSessionEnd) {
            return;
        }
        if (this.isStopped && this.hasContentStart && !this.isAd) {
            this.isStopped = false;
            this.startHb();
        }
    };
    Heartbeat.prototype.startHb = function () {
        var _this = this;
        this.timer.stop();
        this.timer.start(function () {
            _this.tracker.track('hb');
        });
    };
    Heartbeat.NAME = 'Hb';
    return Heartbeat;
}());
exports.Heartbeat = Heartbeat;
/**
 * Responsible for registering tracking Agents to the Observable Tracker instance.
 */
var Registrar = /** @class */ (function () {
    function Registrar() {
    }
    /**
     * Instantiates and registers each Agent if the module exists and when
     * the Agent is enabled in the tracking config.
     *
     * @param tracker The Observable Tracker instance.
     */
    Registrar.prototype.register = function (tracker) {
        var _this = this;
        this.tracker = tracker;
        // Register HB Observer
        this.registerAgent(new Heartbeat(tracker));
        this.tracker.modules.forEach(function (Module) {
            var AgentModule = Module;
            if (_this.isAgentEnabled(AgentModule.NAME)) {
                var agentConfig = _this.getAgentConfig(AgentModule.NAME);
                _this.registerAgent(new AgentModule(agentConfig, tracker));
            }
        });
    };
    // TODO: New feature to reconcile rco level tracking configs. Test code below:
    // update(config: Dictionary):void {
    //     // Return collection of Observers that need updating
    //     const observers = this.tracker.observers.filter((observer: any) => {
    //         const agent = <Agent>observer;
    //         return agent.config && agent.config.name && config[ (<Agent>observer).config.name ];
    //     });
    //     // Unregister Agents if disabled in the new config
    //     observers.forEach((observer: any) => {
    //         const configName: string = (<Agent>observer).config.name;
    //         const agentConfig: AgentConfig = config[configName];
    //         if (!agentConfig.enabled) {
    //             this.tracker.remove(observer);
    //         }
    //     });
    //     // Reconcile config update
    //     for (let key in config) {
    //         const agentConfig = <AgentConfig> config[key];
    //         this.tracker.config[key] = agentConfig;
    //     }
    //     // Register any new agents from config update
    //     this.register(this.tracker);
    // }
    /**
     * Determines if the agent config contains the 'enabled' property set to true.
     *
     * @param name the name of the agent.
     * @returns boolean representing that the agent config exists and is enabled.
     */
    Registrar.prototype.isAgentEnabled = function (name) {
        return this.tracker.config.hasOwnProperty(name)
            && this.tracker.config[name].hasOwnProperty('enabled')
            && this.tracker.config[name].enabled;
    };
    /**
     * Retrieves and returns the agent config for the specified agent name string.
     *
     * @param name the name of the agent.
     * @returns the agent config.
     */
    Registrar.prototype.getAgentConfig = function (name) {
        var agentConfig = this.tracker.config[name];
        if (!agentConfig.params) {
            agentConfig.params = {};
        }
        if (!agentConfig.name) {
            agentConfig.name = name;
        }
        agentConfig.params.debug = SystemInfo.isDev();
        return agentConfig;
    };
    /**
     * Registers an Agent to the Observable collection of Observers.
     *
     * @param agent the instance of the specified Agent
     */
    Registrar.prototype.registerAgent = function (agent) {
        var agentExists = !!this.tracker.observers.find(function (observer) {
            return observer.config.name === agent.config.name;
        });
        if (!agentExists) {
            this.tracker.register(agent);
        }
        // // Not all agents have injectable sdks
        // if (typeof agent.injectable !== 'object') {
        //     return;
        // }
        //
        // const injectable: InjectableSource = agent.injectable;
        //
        // (new JsInjector()).inject(injectable).then(
        //     (response: string) => {
        //         if (response === JsInjector.LOADED) {
        //             (<Agent>agent).onSdkLoaded();
        //         }
        //     }
        // );
    };
    return Registrar;
}());
exports.Registrar = Registrar;
/**
 * Tracker is the entry point to the Tracking Service. It provides Api methods for
 * configuring and transmitting events and data to analytics SDKs.
 */
var VideoTracker = /** @class */ (function (_super) {
    __extends(VideoTracker, _super);
    function VideoTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modules = SystemInfo.modules;
        _this.dataProxy = new DataProxy();
        _this.registrar = new Registrar();
        _this.playhead = 0;
        _this.isDev = false;
        _this.logId = '[Tracker]';
        return _this;
    }
    /**
     * Responsible for invoking notifications with the provided event name and data.
     * This method invokes the Observable's notify method to emit the event and
     * data to its collection of Observers.
     *
     * @param name The event name to track
     * @param data The event data for this request
     */
    VideoTracker.prototype.track = function (name, data) {
        // Reset Data Proxy to Start the Session
        'sessionStart' === name && (this.dataProxy = new DataProxy());
        data = data || {};
        if ('timeUpdate' === name) {
            if (!this.hasProgress(data.playhead)) {
                return;
            }
            else {
                data.playhead = this.playhead;
            }
        }
        // Sync with the latest playhead from the payload if available
        data.playhead = data.playhead ? Math.floor(data.playhead) : this.playhead;
        this.playhead = data.playhead;
        this.dataProxy.update(data);
        this.isDev && Log.logger.log(this.logId, name, data);
        this.notify({ name: name });
    };
    /**
     * Determines if the playhead position is moving.
     *
     * @param playhead The value representing the playhead position
     */
    VideoTracker.prototype.hasProgress = function (playhead) {
        var position = Math.floor(playhead);
        if (isNaN(position)) {
            return false;
        }
        if (this.playhead !== position) {
            this.playhead = position;
            return true;
        }
        return false;
    };
    /**
     * Invokes the Registrar's register method to consume the config object.
     * The Registrar registers instances of Agents depending on the configuration provided.
     *
     * @param config The config object
     */
    VideoTracker.prototype.setConfig = function (config) {
        this.isDev = SystemInfo.isDev();
        this.isDev && Log.logger.log(this.logId, 'setConfig', config);
        if (this.config) {
            return;
        }
        if (typeof config === 'object') {
            this.config = config;
            this.registrar.register(this);
        }
    };
    return VideoTracker;
}(Observable));
exports.VideoTracker = VideoTracker;
var CvpData = /** @class */ (function () {
    function CvpData(player, service) {
        this.player = player;
        this.service = service;
        this.startTime = 0;
    }
    CvpData.prototype.getAdBreakInfo = function () {
        var adBreakInfo = this.model().AdBreakInfo;
        return Object.assign(this.getContentInfo(), {
            adBreakType: adBreakInfo.adBreakType,
            adBreakPosition: adBreakInfo.adBreakPosition,
            adBreakDuration: adBreakInfo.adBreakDuration
        });
    };
    CvpData.prototype.getAdInfo = function () {
        var adItem = this.model().AdItem;
        return {
            adId: adItem.adId || '',
            adTitle: adItem.adTitle || '',
            adUrl: adItem.adAssetUrl || '',
            adPosition: adItem.adPosition,
            adDuration: adItem.adDuration
        };
    };
    CvpData.prototype.getSessionInfo = function () {
        var buildInfo = this.service.buildInfo.buildInfo;
        var currentItem = this.player.playlist.currentItem;
        var metadata = currentItem.contentMetadata;
        var resource = currentItem.resourceLocation;
        var system = this.service.system;
        var isDai = function () {
            return !!(currentItem.adSettings
                && currentItem.adSettings.context
                && currentItem.adSettings.context.indexOf('dai') > -1);
        };
        return Object.assign(this.getContentInfo(), {
            sessionId: DataLayer.get('ut.session_id') || '',
            playerName: buildInfo.playerName,
            playerVersion: buildInfo.playerVersion,
            playerId: this.player.id,
            userId: this.service.playerOptions.userId || '',
            userCountry: 'us',
            partner: currentItem.adSettings.tracking.partner || '',
            drmEnabled: resource && resource.drm.enabled,
            drmType: this.model().ContentPlaybackState.drmType || 'none',
            isMobile: !!system.isMobile,
            isPaidContent: metadata && metadata.isPaidContent || false,
            isAffiliateFeed: metadata && metadata.isAffiliateFeed || false,
            isDai: isDai(),
            systemDevice: system && system.device ? system.device : '',
            videoElement: this.service.playerDomProxy.data.video,
            screenSize: View.getScreenSize()
        });
    };
    CvpData.prototype.getContentInfo = function () {
        var contentInfo = this.model().ContentPlaybackState;
        var currentItem = this.player.playlist.currentItem;
        var liveStreamInfo = contentInfo.liveStreamInfo;
        var metadata = currentItem.contentMetadata;
        var resource = currentItem.resourceLocation;
        var timeToStart = Math.abs(new Date().getTime() - this.startTime);
        var isLive = this.isLive();
        var duration = contentInfo.duration || metadata.duration || -1;
        if (isLive && liveStreamInfo && liveStreamInfo.absoluteDuration) {
            duration = liveStreamInfo.absoluteDuration;
        }
        return {
            timeToStart: timeToStart,
            mediaUrl: resource.mediaUrl || '',
            mediaId: metadata.videoIdForTracking || '',
            duration: duration,
            playhead: this.getPlayhead(),
            bitrate: this.toKbps(contentInfo.bitrate),
            cdn: contentInfo.cdn,
            contextData: currentItem.contextMetadata,
            videoTitle: metadata.videoTitle || '',
            seriesTitle: metadata.seriesTitle || '',
            seasonNumber: metadata.seasonNumber || '',
            episodeNumber: metadata.episodeNumber || '',
            category: metadata.category || '',
            isLive: isLive,
            isEpisode: metadata.episodeFlag,
            episodeTitle: metadata.episodeTitle || '',
            streamId: this.model().PresentationState.streamId || '',
            hasSessionResumed: contentInfo.time > 0
        };
    };
    CvpData.prototype.getPlayhead = function () {
        var contentInfo = this.model().ContentPlaybackState;
        var liveStreamInfo = contentInfo.liveStreamInfo;
        var playhead = contentInfo.time || 0;
        if (this.isLive() && liveStreamInfo && liveStreamInfo.absoluteTime) {
            playhead = liveStreamInfo.absoluteTime;
        }
        return playhead;
    };
    CvpData.prototype.getBitrate = function () {
        var contentInfo = this.model().ContentPlaybackState;
        return this.toKbps(contentInfo.bitrate);
    };
    CvpData.prototype.isLive = function () {
        var streamType = this.player.playlist.currentItem.contentMetadata.streamType;
        return streamType && streamType.toLocaleUpperCase() === 'LIVE' ? true : false;
    };
    CvpData.prototype.toKbps = function (n) {
        return Math.floor(n / 1000);
    };
    CvpData.prototype.model = function () {
        return this.player.getModelSnapshot();
    };
    CvpData.prototype.setStartTime = function (time) {
        this.startTime = time;
    };
    return CvpData;
}());
exports.CvpData = CvpData;
var CvpTracker = /** @class */ (function (_super) {
    __extends(CvpTracker, _super);
    function CvpTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasSessionStart = false;
        _this.hasContentStart = false;
        _this.hasAdBreakEnded = false;
        _this.hasBufferStart = false;
        _this.isSeeking = false;
        _this.isStopped = false;
        _this.adPlayhead = 0;
        _this.isAd = false;
        _this.eventMap = {
            adBreakMetadata: function () {
                _this.sessionStart();
                _this.isAd = true;
                _this.send('adBreakStart', _this.data.getAdBreakInfo());
            },
            adStart: function () {
                _this.adPlayhead = 0;
                _this.send('adStart', _this.data.getAdInfo());
            },
            adPaused: function () {
                _this.send('adPause');
            },
            adPlaying: function () {
                _this.send('adResume');
            },
            adProgress: function () {
                _this.adPlayhead = _this.event.data.currentTime;
            },
            adSkip: function () {
                _this.send('adSkip');
                _this.isAd = false;
            },
            adError: function () {
                _this.isAd = false;
            },
            adComplete: function () {
                _this.send('adEnd');
            },
            adBreakComplete: function () {
                _this.send('adBreakEnd');
                _this.hasAdBreakEnded = true;
                _this.isAd = false;
                _this.adPlayhead = 0;
            },
            cdnChanged: function () {
                var contentInfo = _this.model.ContentPlaybackState;
                _this.hasContentStart && _this.send('cdnChange', {
                    cdn: contentInfo.cdn || ''
                });
            },
            contentBitrateChanged: function () {
                _this.send('bitrateChange', {
                    bitrate: _this.data.getBitrate()
                });
            },
            contentStart: function () {
                _this.sessionStart();
                _this.send('contentStart', _this.data.getContentInfo());
                _this.hasContentStart = true;
            },
            contentProgress: function () {
                // Do not track playhead updates during seeking, ads, or if playback hasn't started
                if (_this.isSeeking || _this.isAd || !_this.hasContentStart) {
                    return;
                }
                if (_this.hasBufferStart) {
                    _this.hasBufferStart = false;
                    _this.send('bufferEnd');
                }
                var playhead = {
                    playhead: _this.data.getPlayhead()
                };
                if (_this.isStopped) {
                    _this.isStopped = false;
                    _this.send('contentResume', playhead);
                }
                if (_this.hasAdBreakEnded) {
                    _this.hasAdBreakEnded = false;
                    _this.send('contentResume', playhead);
                }
                _this.send('timeUpdate', playhead);
            },
            hb: function () {
                // Don't track HBs for ads
                if (_this.isAd) {
                    return;
                }
                _this.send('hb');
            },
            contentPaused: function () {
                _this.send('contentPause');
                _this.isStopped = true;
            },
            contentSeeking: function () {
                _this.isSeeking = true;
                _this.send('seekStart');
            },
            contentSeeked: function () {
                _this.isSeeking = false;
                _this.send('seekEnd');
            },
            resourceBuffering: function () {
                _this.hasBufferStart = true;
                _this.send('bufferStart');
            },
            contentComplete: function () {
                _this.hasContentStart && _this.send('contentEnd');
                //this.hasContentStart = false;
            },
            drmKeySystemCreated: function () {
                _this.send('drmCreated', {
                    drmType: _this.model.ContentPlaybackState.drmType
                });
            },
            resourceStart: function () {
                _this.data.setStartTime((new Date()).getTime());
                _this.sessionStart();
            },
            resourceEnd: _this.sessionEnd,
            resourceInterrupted: _this.sessionEnd,
            resourceError: function (error) {
                if (typeof error !== 'object') {
                    return;
                }
                _super.prototype.track.call(_this, 'playerError', {
                    errorType: error.status || NaN,
                    errorMessage: error.message || '',
                    errorFatal: error.isFatal || false
                });
            },
            /**
             * Event handler for metadataCuepoint.
             * Parses the data from the cue point event payload. Ex:
             * {
             *      data: " SH000043720000|The Price Is Right ",
             *      id: "com.cbsi.live.sg"
             * }
             * @param event CvpEvent
             */
            metadataCuepoint: function (event) {
                if (!(event && event.data)) {
                    return;
                }
                var body = event.data;
                if (body.data && typeof body.data === 'string' && body.data.indexOf('|') > -1) {
                    var ids = body.data.split('|');
                    var trim = StringUtil.trim;
                    if (ids.length > 1) {
                        _super.prototype.track.call(_this, 'cuePoint', {
                            segmentId: trim(ids[0]),
                            segmentTitle: trim(ids[1]),
                            segmentEdition: trim(ids[2]),
                            segmentOwner: body.id
                        });
                    }
                }
            }
        };
        return _this;
    }
    CvpTracker.prototype.onRegister = function (player, options, services) {
        var _this = this;
        // Start Up Tracking
        options.config && this.setConfig(options.config);
        // Register for Cvp Events
        var eventType = player.EventType;
        this.notifyHandler = function (e) { return _this.onNotify(e); };
        for (var name_1 in eventType) {
            player.on(eventType[name_1], this.notifyHandler);
        }
        // Make this tracker visible in SystemInfo
        SystemInfo.tracker[player.id] = this;
        this.logId += ' ' + player.id;
        this.player = player;
        this.service = services;
        this.data = new CvpData(player, services);
    };
    CvpTracker.prototype.onNotify = function (event) {
        this.model = this.player.getModelSnapshot();
        this.event = event;
        this.isDev && Log.logger.log(this.logId + ' => ' + event.type);
        var handler = this.eventMap[event.type];
        handler && handler.call(this, event);
    };
    CvpTracker.prototype.sessionStart = function () {
        if (this.hasSessionStart) {
            return;
        }
        this.send('sessionStart', this.data.getSessionInfo());
        this.hasSessionStart = true;
    };
    CvpTracker.prototype.sessionEnd = function () {
        this.send('sessionEnd');
        this.hasSessionStart = false;
        this.hasContentStart = false;
    };
    CvpTracker.prototype.send = function (name, data) {
        var payload = data || {};
        // Sync up the tracker with the latest playhead position
        if (!payload.hasOwnProperty('playhead')) {
            payload.playhead = this.model.ContentPlaybackState.time;
        }
        // Use the current ad playhead for ads
        if (this.isAd) {
            payload.playhead = this.adPlayhead;
        }
        _super.prototype.track.call(this, name, payload);
    };
    CvpTracker.prototype.destroy = function () {
        // Deregister for Cvp Events
        var eventType = this.player.EventType;
        for (var name_2 in eventType) {
            this.player.off(eventType[name_2], this.notifyHandler);
        }
        this.sessionEnd();
        this.player = null;
        this.service = null;
        this.model = null;
        this.event = null;
    };
    return CvpTracker;
}(VideoTracker));
exports.CvpTracker = CvpTracker;
var AdobeAID = /** @class */ (function () {
    function AdobeAID() {
    }
    /**
     * Checks for legacy AID cookie value
     * Ex: -1712354808|MCMID|10880160939873168291668604455450754008|MCAAMLH-1586353175
     *
     * @param orgId The Adobe marketing org id
     * @returns id The legacy visitor id
     */
    AdobeAID.getId = function (orgId) {
        var name = 'AMCV_' + orgId.replace('@', '%40');
        var amcv = Cookie.get(name);
        var decode = View.getVar('decodeURIComponent');
        var regex = /MCMID\|(\d+)/;
        var id = '';
        if (amcv && decode) {
            var value = decode(amcv);
            var matches = value.match(regex);
            if (matches && matches.length > 1 && matches[1]) {
                id = matches[1];
            }
        }
        return id;
    };
    return AdobeAID;
}());
exports.AdobeAID = AdobeAID;
var AdobeAgent = /** @class */ (function (_super) {
    __extends(AdobeAgent, _super);
    function AdobeAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasSession = false;
        _this.hasSessionRequest = false;
        _this.hasStateChange = false;
        _this.isSdkLoaded = true;
        _this.hasNewSegment = false;
        _this.isIdReady = false;
        _this.events = {
            adBreakStart: function () {
                //this.hasStart = true;
                _this.startSession();
                _this.trackEvent('adBreakStart');
            },
            adStart: function () {
                _this.trackEvent('adStart');
            },
            adPause: function () {
                _this.trackEvent('pauseStart');
                _this.hasStateChange = true;
            },
            adSkip: function () {
                _this.trackEvent('adSkip');
            },
            adEnd: function () {
                _this.trackEvent('adComplete');
            },
            adBreakEnd: function () {
                _this.trackEvent('adBreakComplete');
                _this.hasStateChange = true;
            },
            contentPause: function () {
                _this.hasStateChange = true;
                _this.trackEvent('pauseStart');
            },
            bufferStart: function () {
                _this.hasStateChange = true;
                _this.trackEvent('bufferStart');
            },
            seekStart: function () {
                _this.hasStateChange = true;
            },
            cuePoint: function () {
                // Only track live segments for the stream owner
                if (!(_this.getData().isLive || _this.dao.isOwner())) {
                    return;
                }
                var segmentId = _this.getData().segmentId;
                // End the current session and start a new session if the id changed
                if (_this.liveSegmentId !== segmentId && _this.dao.liveSegmentInfo) {
                    _this.liveSegmentId = segmentId;
                    _this.hasNewSegment = true;
                    _this.sessionEnd();
                    _this.contentStart();
                }
                else {
                    _this.hasNewSegment = false;
                }
            },
            playerError: function () {
                _this.trackEvent('error');
                _this.sessionEnd();
            },
            contentStart: _this.contentStart,
            contentResume: _this.play,
            adResume: _this.play,
            timeUpdate: _this.play,
            hb: _this.ping,
            sessionEnd: _this.sessionEnd
        };
        return _this;
    }
    AdobeAgent.prototype.onRegister = function () {
        _super.prototype.onRegister.call(this);
        this.dao = new AdobeDao(this);
        this.eventQueue = new Queue();
    };
    AdobeAgent.prototype.onIdsReady = function () {
        // Request as session when ids are ready
        this.isIdReady = true;
        this.startSession();
    };
    AdobeAgent.prototype.flushQueue = function () {
        var _this = this;
        if (!this.hasSession) {
            return;
        }
        this.eventQueue.each(function (item) {
            _this.postRequest(item);
        });
    };
    AdobeAgent.prototype.postRequest = function (eventName) {
        if (eventName === 'play' && this.getData().isAd) {
            // Do not track play events during ad play
            return;
        }
        HttpRequest.POST({
            url: this.eventUrl,
            ssl: this.dao.enableSSL,
            data: View.stringify(this.dao.getPayload(eventName)),
            callback: Function.prototype
        });
    };
    AdobeAgent.prototype.startSession = function () {
        var _this = this;
        if (!this.isIdReady) {
            this.dao.fetchVisitorIds();
            return;
        }
        if (this.hasSessionRequest) {
            return;
        }
        HttpRequest.POST({
            url: this.dao.getSessionUrl(),
            ssl: this.dao.enableSSL,
            data: View.stringify(this.dao.getSessionInfo()),
            callback: function (response) {
                if (response.status === 400) {
                    throw ('Error: Server 400');
                }
                // Ex: /api/v1/sessions/fb7a1c6f02ddf6513fb6b106f84f4ce854fc4d7440f8242c581cdd9a350fa1d4
                var location = response.xhr.getResponseHeader('location');
                if (!location) {
                    throw ('Error: Location not found');
                }
                _this.hasSession = true;
                _this.eventUrl = _this.dao.getEventUrl(location);
                _this.flushQueue();
            }
        });
        this.hasSessionRequest = true;
    };
    AdobeAgent.prototype.trackEvent = function (eventName) {
        this.eventQueue.add(eventName);
        this.flushQueue();
    };
    AdobeAgent.prototype.contentStart = function () {
        this.startSession();
        this.trackEvent('play');
    };
    AdobeAgent.prototype.play = function () {
        if (this.hasStateChange) {
            this.hasStateChange = false;
            this.trackEvent('play');
        }
    };
    AdobeAgent.prototype.ping = function () {
        this.trackEvent('ping');
    };
    AdobeAgent.prototype.sessionEnd = function () {
        if (!this.hasSession) {
            this.hasSessionRequest = false;
            return;
        }
        this.hasContentCompleted() && this.trackEvent('sessionComplete');
        this.trackEvent('sessionEnd');
        this.hasSession = false;
        this.hasSessionRequest = false;
    };
    AdobeAgent.NAME = 'Adobe';
    __decorate([
        Subscribe()
    ], AdobeAgent.prototype, "events", void 0);
    return AdobeAgent;
}(Agent));
exports.AdobeAgent = AdobeAgent;
var AdobeCloudId = /** @class */ (function () {
    function AdobeCloudId(config) {
        this.ids = {};
        this.mci = config.params.accountInfo['visitor.marketingCloudOrgId'];
        this.url = config.params.serverInfo.demdexUrl + this.mci;
        this.ids = AdobeEP.getIds(this.mci);
    }
    AdobeCloudId.prototype.fetchMid = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.ids.mid) {
                            resolve(_this.ids);
                        }
                        else {
                            HttpRequest.GET({
                                url: _this.url,
                                data: null,
                                ssl: SystemInfo.ssl,
                                callback: function (response) {
                                    if (response.status > -1) {
                                        var json = JSON.parse(response.text);
                                        var value = json[AdobeCloudId.MID];
                                        if (value) {
                                            _this.ids.mid = value;
                                            resolve(_this.ids);
                                        }
                                    }
                                    else {
                                        reject(new Error(response.text));
                                    }
                                }
                            });
                        }
                    })];
            });
        });
    };
    AdobeCloudId.MID = 'd_mid';
    return AdobeCloudId;
}());
exports.AdobeCloudId = AdobeCloudId;
var AdobeDao = /** @class */ (function (_super) {
    __extends(AdobeDao, _super);
    function AdobeDao(agent) {
        var _this = _super.call(this, agent) || this;
        _this.agent = agent;
        _this.enableSSL = _this.accountInfo['analytics.enableSSL'] === 'true';
        return _this;
    }
    AdobeDao.prototype.fetchVisitorIds = function () {
        var _this = this;
        var cloudId = new AdobeCloudId(this.agent.config);
        var isDefined = StringUtil.isDefined;
        if (isDefined(cloudId.ids.aid) || isDefined(cloudId.ids.mid)) {
            this.setIds(cloudId.ids);
            this.agent.onIdsReady();
            return;
        }
        cloudId.fetchMid().then(function (ids) {
            _this.setIds(ids);
            // Tell the agent ids were processed
            _this.agent.onIdsReady();
        });
    };
    AdobeDao.prototype.setIds = function (ids) {
        var isDefined = StringUtil.isDefined;
        var params = this.agent.config.params;
        if (isDefined(ids.aid)) {
            params.accountInfo['analytics.aid'] = ids.aid;
        }
        if (isDefined(ids.mid)) {
            params.mid = ids.mid;
            DataStorage.set(AdobeCloudId.MID, ids.mid);
        }
    };
    AdobeDao.prototype.getSessionInfo = function () {
        var eventData = this.getPayload('sessionStart');
        var configParams = this.agent.config.params;
        // Figure out prod vs dev suite
        configParams.reportSuite = this.agent.isDev ? this.serverInfo.devSuite : this.serverInfo.prodSuite;
        eventData.params = Object.assign(this.mapData(this.mediaInfo), this.mapData(this.accountInfo));
        // Copy custom data mapped from the config
        eventData.customMetadata = this.mapData(Object.assign(this.agent.getData().contextData || {}, this.customData));
        eventData.qoeData = this.mapData(this.qoeData);
        // Track the Live Segment if available
        if (this.agent.hasNewSegment) {
            var liveInfo = this.mapData(this.liveSegmentInfo);
            eventData.params = Object.assign(eventData.params, liveInfo);
        }
        var mid = eventData.params['visitor.marketingCloudUserId'];
        // Delete the MID property if AID is available
        if (configParams.accountInfo['analytics.aid'] && !StringUtil.isDefined(mid)) {
            delete eventData.params['visitor.marketingCloudUserId'];
        }
        return eventData;
    };
    AdobeDao.prototype.getSessionUrl = function () {
        return [
            this.agent.isDev ? this.serverInfo.devUrl : this.serverInfo.prodUrl,
            AdobeDao.SESSION_PATH
        ].join('/');
    };
    AdobeDao.prototype.getEventUrl = function (location) {
        // Ex: cbs-dev.hb-api.omtrdc.net
        var uri = this.agent.isDev ? this.serverInfo.devUrl : this.serverInfo.prodUrl;
        // Ex: api/v1/sessions/31678c8e8b90ab0953540907188dfc5965f9d4513c6cb5f0c5baeec1b2c4f547
        var sid = location.replace(/^\/|\/$/g, '');
        // Ex: {uri}/api/v1/sessions/{sid}/events
        return [uri, sid, 'events'].join('/');
    };
    AdobeDao.prototype.getPayload = function (eventName) {
        var data = this.agent.getData();
        var payload = {
            eventType: eventName,
            playerTime: {
                playhead: data.playhead,
                ts: (new Date()).getTime()
            },
            params: {}
        };
        switch (eventName) {
            case 'adBreakStart':
                payload.params = this.mapData(this.adBreakInfo);
                break;
            case 'adStart':
                payload.params = this.mapData(this.adInfo);
                break;
            case 'error':
                payload.qoeData = this.mapData(this.errorInfo);
                break;
        }
        return payload;
    };
    AdobeDao.prototype.isOwner = function () {
        var data = this.agent.getData();
        return data.segmentOwner === this.serverInfo.id3Owner;
    };
    AdobeDao.SESSION_PATH = 'api/v1/sessions';
    __decorate([
        ConfigParam(true)
    ], AdobeDao.prototype, "enableSSL", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "serverInfo", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "accountInfo", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "mediaInfo", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "adBreakInfo", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "adInfo", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "errorInfo", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "customData", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "qoeData", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "dataType", void 0);
    __decorate([
        ConfigParam()
    ], AdobeDao.prototype, "liveSegmentInfo", void 0);
    return AdobeDao;
}(DataAccess));
exports.AdobeDao = AdobeDao;
var AdobeData = /** @class */ (function () {
    function AdobeData(url) {
        this.url = url;
    }
    AdobeData.prototype.post = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var handler, dataStr;
            return __generator(this, function (_a) {
                handler = this.request.bind(this);
                dataStr = this.format(data);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        handler(dataStr, function (response) {
                            if (response.status === -1) {
                                reject(new Error(response.text));
                            }
                            else {
                                resolve(response);
                            }
                        });
                    })];
            });
        });
    };
    AdobeData.prototype.request = function (data, callback) {
        HttpRequest.POST({
            url: this.url,
            data: data,
            ssl: SystemInfo.ssl,
            callback: callback
        });
    };
    AdobeData.prototype.format = function (data) {
        return [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<request>',
            this.toXml(data),
            '</request>'
        ].join('');
    };
    AdobeData.prototype.toXml = function (data) {
        var _this = this;
        var node = '<{key}>{value}</{key}>';
        var body = '';
        Object.keys(data).forEach(function (key) {
            body += node.replace(/{key}/g, key)
                .replace(/{value}/g, typeof data[key] !== 'object'
                ? _this.htmlEntities(data[key])
                : _this.toXml(data[key]));
        });
        return body;
    };
    AdobeData.prototype.htmlEntities = function (str) {
        if (!str) {
            return str;
        }
        var makeEntity = function (value) {
            return ['&', value, ';'].join('');
        };
        return str.toString().replace(/&|"|'|<|>/g, function (item) {
            var value = item.toString();
            switch (value) {
                case '&':
                    value = makeEntity('amp');
                    break;
                case '"':
                    value = makeEntity('quot');
                    break;
                case "'":
                    value = makeEntity('apos');
                    break;
                case '<':
                    value = makeEntity('lt');
                    break;
                case '>':
                    value = makeEntity('gt');
                    break;
            }
            return value;
        });
    };
    return AdobeData;
}());
exports.AdobeData = AdobeData;
var AdobeEP = /** @class */ (function () {
    function AdobeEP() {
    }
    AdobeEP.getIds = function (orgId) {
        var ids = {};
        var mid = DataStorage.get(AdobeCloudId.MID);
        var Visitor = View.getVar('Visitor');
        // Get the MID from Local Storage
        if (StringUtil.isDefined(mid)) {
            ids.mid = mid;
        }
        // Fetch Ids from the Visitor SDK if available
        else if (Visitor) {
            var visitorInstance = Visitor.getInstance(orgId);
            if (visitorInstance) {
                ids.mid = visitorInstance.getMarketingCloudVisitorID();
                ids.aid = visitorInstance.getAnalyticsVisitorID();
            }
        }
        // Fetch the legacy Abobe Visitor Id cookie
        else {
            ids.aid = AdobeAID.getId(orgId);
        }
        return ids;
    };
    return AdobeEP;
}());
exports.AdobeEP = AdobeEP;
var SparrowAgent = /** @class */ (function (_super) {
    __extends(SparrowAgent, _super);
    function SparrowAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isSdkLoaded = true;
        _this.events = {
            timeUpdate: function () {
                if (_this.dao.hasElapsed()) {
                    HttpRequest.GET({
                        url: _this.dao.getApiUrl(),
                        ssl: SystemInfo.ssl,
                        data: _this.dao.getInfo(),
                        callback: Function.prototype
                    });
                }
            }
        };
        return _this;
    }
    SparrowAgent.prototype.onRegister = function () {
        _super.prototype.onRegister.call(this);
        this.dao = new SparrowDao(this);
    };
    SparrowAgent.NAME = 'Sparrow';
    __decorate([
        Subscribe()
    ], SparrowAgent.prototype, "events", void 0);
    return SparrowAgent;
}(Agent));
exports.SparrowAgent = SparrowAgent;
var SparrowDao = /** @class */ (function (_super) {
    __extends(SparrowDao, _super);
    function SparrowDao(agent) {
        var _this = _super.call(this, agent) || this;
        _this.agent = agent;
        return _this;
    }
    SparrowDao.prototype.getApiUrl = function () {
        return [
            this.agent.isDev ? this.serverInfo.devUrl : this.serverInfo.prodUrl,
            this.serverInfo.urlPath
        ].join('/');
    };
    SparrowDao.prototype.getInfo = function () {
        var data = this.agent.getData();
        data.platform = this.getPlatform();
        data.timestamp = Math.floor(data.timestamp / 1000);
        var map = this.mapData(this.metadataInfo);
        map.medtime = 200 + data.playhead;
        var qs = [];
        // Append values from the data map
        for (var key in map) {
            qs.push(key + '=' + map[key]);
        }
        var encode = View.getVar('encodeURI');
        var qsInfo = qs.join('&');
        return typeof encode === 'function' ? encode(qsInfo) : qsInfo;
    };
    SparrowDao.prototype.getPlatform = function () {
        var data = this.agent.getData();
        var platform = SystemInfo.platform;
        if (platform === 'Desktop' && data.isMobile) {
            platform = 'mobile_web';
        }
        return platform;
    };
    // isUserLoggedIn(): boolean {
    //     return !!this.agent.getDataVo().userId;
    // }
    SparrowDao.prototype.hasElapsed = function () {
        var data = this.agent.getData();
        // Only send requests if the beacon interval has elapsed and the user is logged in
        // TODO Check if the userId exists as well
        return data.playhead % this.serverInfo.interval === 0 && (data.isEpisode || data.isLive);
    };
    __decorate([
        ConfigParam()
    ], SparrowDao.prototype, "serverInfo", void 0);
    __decorate([
        ConfigParam()
    ], SparrowDao.prototype, "metadataInfo", void 0);
    return SparrowDao;
}(DataAccess));
exports.SparrowDao = SparrowDao;
/*
ts=1565272173
&contentid=
&userid=555555
&siteid=164
&sessionid=6d1d8770b9e211e9bf6749aafe617764
&platform=desktop
&premium=false
&affiliate=false
&medtime=17
*/

},{}]},{},[1])(1)
});
