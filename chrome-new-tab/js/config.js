const CONFIG = {
    /**
     * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
     * Icons must be added to "icons" folder and their values/names must be updated.
     * If none of the specified keys are matched, the '*' key is used.
     * Commands without a category don't show up in the help menu.
     * Update line 11 and 13 if you prefer using Google.
     */
    commands: [{
            name: 'SearxNG',
            key: '*',
            url: 'http://google.com',
            search: '/search?q={}'
        },
        {
            category: 'General',
            name: 'Translator',
            key: 'tr',
            url: 'https://www.google.com/search?q=translator',
            color: '#4784e8',
            icon: 'translate',
            quickLaunch: false,
        },
        {
            category: 'General',
            name: 'Mail',
            key: 'mail',
            url: 'https://mail.google.com',
            search: '{}',
            color: '#1ea2e3',
            icon: 'mail',
            quickLaunch: false,
        },
		{
            category: 'General',
            name: 'Notes',
            key: 'note',
            url: 'https://keep.google.com',
            search: '{}',
            color: '#fbbc04',
            icon: 'keep',
            quickLaunch: false,
        },
		{
            key: 'notes',
            url: 'https://keep.google.com',
            search: '{}',
            color: '#fbbc04',
            quickLaunch: false,
        },
		{
            key: 'keep',
            url: 'https://keep.google.com',
            search: '{}',
            color: '#fbbc04',
            quickLaunch: false,
        },
        {
            category: 'General',
            name: 'GitHub.io',
            key: 'gitio',
            url: 'https://github.io',
            color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
            icon: 'github',
            quickLaunch: false,
        },
        {
            category: 'General',
            name: 'Itch.io',
            key: 'itchio',
            url: 'https://turagchoi.itch.io',
            color: '#fa5c5c',
            icon: 'itchio',
            quickLaunch: false,
        },


        {
            category: 'Programming',
            name: 'GitHub',
            key: 'git',
            url: 'https://github.com',
            search: '/search?q={}',
            color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
            icon: 'github',
            quickLaunch: true,
        },
        {
            category: 'Programming',
            name: 'StackOverflow',
            key: 'sof',
            url: 'https://stackoverflow.com',
            search: '/search?q={}',
            color: 'linear-gradient(135deg, #53341C, #F48024)',
            icon: 'stackoverflow',
            quickLaunch: true,
        },
        {
            category: 'Programming',
            name: 'MDN',
            key: 'mdn',
            url: 'https://developer.mozilla.org/en-US',
            search: '/search?q={}',
            color: '#212121',
            icon: 'mdn',
            quickLaunch: false,
        },
        {
            category: 'Programming',
            name: 'DevDocs',
            key: 'dd',
            url: 'https://devdocs.io',
            color: 'linear-gradient(135deg, #33373A, #484949)',
            icon: 'devdocs',
            quickLaunch: false,
        },


        {
            category: 'Social Media',
            name: 'YouTube',
            key: 'yt',
            url: 'https://youtube.com',
            search: '/results?search_query={}',
            color: '#ff0101',
            icon: 'youtube',
            quickLaunch: false,
        },
        {
            category: 'Social Media',
            name: 'Reddit',
            key: 'r',
            url: 'https://reddit.com',
            search: '/search/?q={}',
            color: 'linear-gradient(135deg, #FF8456, #FF4500)',
            icon: 'reddit',
            quickLaunch: false,
        },
        {
            category: 'Social Media',
            name: 'Twitch',
            key: 'tw',
            url: 'https://www.twitch.tv',
            search: '/directory/game/{}',
            color: 'linear-gradient(135deg, #6441a5, #4b367c)',
            icon: 'twitch',
            quickLaunch: false,
        },
        {
            category: 'Social Media',
            name: 'Twitter',
            key: 't',
            url: 'https://twitter.com',
            search: '/search?q={}',
            color: '#1c93e4',
            icon: 'twitter',
            quickLaunch: true,
        },
        {
            category: 'Social Media',
            name: 'Instagram',
            key: 'i',
            url: 'https://instagram.com',
            color: '#2d34bdl',
            icon: 'instagram',
            quickLaunch: false,
        },
        {
            category: 'Social Media',
            name: 'Discord',
            key: 'dc',
            url: 'https://discord.com',
            color: '#7289da',
            icon: 'discord',
            quickLaunch: false,
        },



        {
            category: 'General',
            name: 'Minecraft Wiki',
            key: 'mc',
            url: 'https://minecraft.fandom.com',
            search: '/wiki/Special:Search?query={}',
            color: '#08c738',
            icon: 'cube',
            quickLaunch: false,
        },
		        {
            category: 'Streaming [Web]',
            name: 'Crunchyroll',
            key: 'cr',
            url: 'https://crunchyroll.com',
            search: '/search?q={}',
            color: '#f47521',
            icon: 'crunchyroll',
            quickLaunch: false,
        },
		{
            name: 'Crunchyroll',
            key: 'crunchyroll',
            url: 'https://crunchyroll.com',
            search: '/search?q={}',
            color: '#f47521',
            icon: 'crunchyroll',
            quickLaunch: false,
        },
		{
            name: 'Crunchyroll',
            key: 'crunchy',
            url: 'https://crunchyroll.com',
            search: '/search?q={}',
            color: '#f47521',
            icon: 'crunchyroll',
            quickLaunch: false,
        },
        {
            category: 'Streaming [Web]',
            name: 'Disney+',
            key: 'd',
            url: 'https://disneyplus.com',
            color: '#020c42',
            icon: 'Disney+_logo_small2',
            quickLaunch: false,
        },
        {
            category: 'Streaming [Web]',
            name: 'Netflix',
            key: 'n',
            url: 'https://netflix.com',
            color: '#e21221',
            icon: 'netflix',
            quickLaunch: false,
        },
		{
            category: 'Streaming',
            name: 'Disney+',
            key: 'dis',
            url: 'disneyplus://',
            color: '#020c42',
            icon: 'Disney+_logo_small2',
            quickLaunch: false,
        },
        {
            category: 'Streaming',
            name: 'Netflix',
            key: 'net',
            url: 'netflix://',
            color: '#e21221',
            icon: 'netflix',
            quickLaunch: false,
        },
		{
            category: 'General',
            name: 'Google Drive',
            key: 'dr',
            url: 'https://drive.google.com',
            search: '/drive/search?q={}',
            color: '#34a853',
            icon: 'drive',
            quickLaunch: false,
        },
		{
            name: 'Google Drive',
            key: 'drive',
            url: 'https://drive.google.com',
            search: '/drive/search?q={}',
            color: '#34a853',
            quickLaunch: false,
        },
    ],

    /**
     * Get suggestions as you type.
     */
    suggestions: true,
    suggestionsLimit: 4,

    /**
     * The order and limit for each suggestion influencer. An "influencer" is
     * just a suggestion source. The following influencers are available:
     *
     * - "Commands" suggestions come from CONFIG.commands
     * - "Default" suggestions come from CONFIG.defaultSuggestions
     * - "DuckDuckGo" suggestions come from the duck duck go search api
     * - "History" suggestions come from your previously entered queries
     */
    influencers: [{
            name: 'Commands',
            limit: 2
        },
        {
            name: 'Default',
            limit: 4
        },
        {
            name: 'History',
            limit: 1
        },
        {
            name: 'DuckDuckGo',
            limit: 4
        },
    ],

    /**
     * Default search suggestions for the specified queries.
     */
    defaultSuggestions: {
        g: ['g/issues', 'g/pulls', 'gist.github.com'],
        r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
    },

    /**
     * Instantly redirect when a key is matched. Put a space before any other
     * queries to prevent unwanted redirects.
     */
    instantRedirect: false,

    /**
     * Open triggered queries in a new tab.
     */
    newTab: false,

    /**
     * Dynamic overlay background colors when command domains are matched.
     */
    colors: true,

    /**
     * Invert color theme
     */
    invertedColors: false,

    /**
     * Show keys instead of icons
     */
    showKeys: false,

    /**
     * The delimiter between a command key and your search query. For example,
     * to search GitHub for potatoes, you'd type "g:potatoes".
     */
    searchDelimiter: ':',

    /**
     * The delimiter between a command key and a path. For example, you'd type
     * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
     */
    pathDelimiter: '/',

    /**
     * The delimiter between the hours and minutes on the clock.
     */
    clockDelimiter: ' ',

    /**
     * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
     */
    twentyFourHourClock: true,

    /**
     * File extension for icon images
     */
    iconExtension: 'png'
};