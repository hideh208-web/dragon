module.exports = {
  // Bot Configuration
  token: process.env.DISCORD_BOT_TOKEN || '',
  prefix: '.',
  enablePrefix: true, // Set to false to disable prefix commands

  // Bot Activity
  activity: {
    name: '/help | https://github.com/Unknownzop/MusicBot',
    type: 'LISTENING' // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
  },

  // Lavalink Configuration
  lavalink: {
    nodes: [{
      name: 'Main Node',
      host: 'lavalink.jirayu.net',
      port: 13592,
      password: 'youshallnotpass',
      secure: false,
    }],
    defaultSearchEngine: 'youtube'
  },

  // Spotify credentials for search/login (optional)
  spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID || 'a568b55af1d940aca52ea8fe02f0d93b',
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET || 'e8199f4024fe49c5b22ea9a3dd0c4789'
  },

  // Emojis
  emojis: {
    play: '▶️',
    pause: '⏸️',
    resume: '▶️',
    skip: '⏭️',
    stop: '⏹️',
    queue: '📜',
    shuffle: '🔀',
    loop: '🔄',
    volume: '🔊',
    nowplaying: '🎵',
    success: '✅',
    error: '❌',
    warning: '⚠️',
    music: '🎵',
    user: '👤',
    duration: '⏱️',
    position: '📍',
    ping: '🏓',
    stats: '📊',
    invite: '📨',
    support: '💬',
    uptime: '⌚',
    servers: '🌐',
    users: '👥',
    players: '🎵',
    playlist: '📋'
  },

  // URLs
  urls: {
    support: process.env.SUPPORT_SERVER || 'https://discord.gg/your-support-server',
    github: 'https://github.com/Unknownzop/MusicBot'
  },

  // Express Server
  express: {
    port: process.env.PORT || 13592,
    host: '0.0.0.0'
  }
};
