/*
Any of the settings below can be disabled by setting them to false, times are in milliseconds.

autoUpdate: [ beta?, autoUpdate?, interval, [tar, zip] ]
*/

export default {
  version: {
    major: '1',
    minor: '14',
    patch: '0',
    preRelease: null
  },
  server: {
    port: 2333,
    password: 'youshallnotpass',
    resumeTimeout: 10000,
  },
  options: {
    threshold: false,
    playerUpdateInterval: false,
    statsInterval: false,
    autoUpdate: [ false, true, 3600000, 'tar' ],
    maxResultsLength: 20,
    maxAlbumPlaylistLength: 20
  },
  debug: {
    pandora: {
      success: true,
      error: true
    },
    innertube: {
      success: true,
      error: true
    },
    deezer: {
      success: true,
      error: true
    },
    websocket: {
      connect: true,
      disconnect: true,
      resume: true,
      failedResume: true,
      resumeTimeout: true
    },
    request: {
      enabled: true,
      errors: true,
      showBody: true,
      showHeaders: true,
      showParams: true
    },
    track: {
      start: true,
      end: true,
      exception: true,
      stuck: true
    },
    sources: {
      retrieveStream: true,
      loadtrack: {
        request: true,
        results: true,
        exception: true
      },
      search: {
        request: true,
        results: true,
        exception: true
      },
      loadcaptions: {
        request: true,
        results: true,
        exception: true
      }
    }
  },
  search: {
    defaultSearchSource: 'youtube',
    sources: {
      youtube: true,
      youtubeMusic: true,
      spotify: true,
      bandcamp: true,
      http: true,
      local: true,
      pandora: false,
      deezer: {
        enabled: false,
        decryptionKey: '...', // For legal reasons, this key is not provided.
        urlEncryptionKey: '...', // For legal reasons, this key is not provided.
        apiKey: 'YOUR_DEEZER_API_TOKEN' // Available in Deezer website API requests in "api_token" parameter.
      },
      soundcloud: {
        enabled: false,
        clientId: 'YOUR_SOUNDCLOUD_CLIENT_ID' // Available in SoundCloud website API requests in "client_id" parameter.
      }
    }
  },
  filters: {
    enabled: true,
    threads: 4,
    list: {
      volume: true,
      equalizer: true,
      karaoke: true,
      timescale: true,
      tremolo: true,
      vibrato: true,
      rotation: true,
      distortion: true,
      channelMix: true,
      lowPass: true
    }
  },
  audio: {
    quality: 'high'
  }
}