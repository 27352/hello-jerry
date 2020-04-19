
function getSessionInfo() {
    return {
        sessionId       : vtg.tracking.DataLayer.get('ut.session_id') || '62378419287534',
        playerName      : 'CVP',
        playerVersion   : '0.9.0',
        playerId        : 'df755f4f-fbef-48ed-9aee-60693669f74e',
        userId          : '123123',
        userCountry     : 'us',
        partner         : 'partner',
        drmEnabled      : false,
        drmType         : 'none',
        isMobile        : false,
        isPaidContent   : false,
        isAffiliateFeed : false,
        isDai           : false,
        systemDevice    : 'comcast ',
        videoElement    : document.getElementById('testVideo'),
        screenSize      : vtg.tracking.View.getScreenSize()
    };
}

function getContentInfo() {
    return {
        timeToStart   : 1000,
        mediaUrl      : 'resource.mediaUrl',
        mediaId       : 'metadata.videoIdForTracking',
        duration      : 46,
        playhead      : 0,
        bitrate       : 54389,
        cdn           : 'contentInfo.cdn',
        contextData   : getContextData(),
        videoTitle    : 'metadata.videoTitle',
        seriesTitle   : 'metadata.seriesTitle',
        seasonNumber  : 01,
        episodeNumber : 07,
        category      : 'metadata.category',
        isLive        : true,
        isEpisode     : false,
        episodeTitle  : 'metadata.episodeTitle',
        streamId      : 'streamId',
        hasSessionResumed : false
    };
}

function getContextData() {
    return {
        brandPlatformId: 'vtg-comcast-test',
        deviceType: 'IpStb',
        deviceModel: 'AX061AEI',
        deviceId: '2164714286419982419'
    };
}

function logInfo() {console.log('LOGGING');
    window && logger.log('window->' + typeof window);

    window.XMLHttpRequest && logger.log('XMLHttpRequest->' + typeof XMLHttpRequest);
    window.localStorage && logger.log('localStorage->', window.localStorage);
    window.document.cookie && logger.log('cookie->', window.document.cookie);

    document.cookie = 'rpm=500';

    $badger.metricsHandler("SESSION_END", { result: 'sessionEnd' });

    window && $badger.metricsHandler("WINDOW_VALIDATED", { result: typeof window });
    window.XMLHttpRequest && $badger.metricsHandler("XHR_VALIDATED", { result: typeof window.XMLHttpRequest });
    window.localStorage && $badger.metricsHandler("STORAGE_VALIDATED", { result: typeof window.localStorage });
    window.document.cookie && $badger.metricsHandler('COOKIE', window.document.cookie);

}

document.addEventListener('DOMContentLoaded', () => {
    console.log('[main]');
    var video = document.getElementById('testVideo');
    var tracker = new vtg.tracking.VideoTracker();
    var hasEnded = false;

    tracker.setConfig(vtg.config);

    tracker.track('sessionStart', getSessionInfo());
    tracker.track('contentStart', getContentInfo());

    video.ontimeupdate = (event) => {
        !hasEnded && tracker.track('timeUpdate', { playhead: video.currentTime });

        if (video.currentTime > video.duration * .98 && !hasEnded) {
            tracker.track("contentEnd");
            tracker.track("sessionEnd");

            hasEnded = true;
            logInfo();
        }
    };

});

if ($badger && $badger.active()) {
    logInfo();
}

else {
    document.addEventListener('onMoneyBadgerReady', () => {
        logInfo();
    })
}
