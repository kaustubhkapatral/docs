import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arka Documentation",
  description: "Arka network",
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import './.vitepress/styles.css';`,
        },
      },
    },
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      {
        icon: "discord",
        link: 'https://discord.gg/3uHagdH8'
      },
      {
        icon: "twitter",
        link: 'https://x.com/ArkaNetwork_'
      }
    ],
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Discord', link: 'https://discord.gg/3uHagdH8' },
    //   { text: 'Twitter', link: 'https://x.com/ArkaNetwork_' }
    // ],


    sidebar: [
      {
        text: 'Learn',
        collapsed: true,
        items: [
          {
            text: 'Overview', link: '/learn/overview',
            items: [
              {
                text: "What is Arka Network",
                link: '/learn/overview#what-is-arka-network'
              },
              {
                text: "Mission",
                link: '/learn/overview#mission'
              },
              {
                text: "Vision",
                link: '/learn/overview#vision'
              }
            ]
          },
          { text: 'Problem Statement', link: '/learn/problem-statement', },
          { text: 'Solution', link: '/learn/solution', },
          {
            text: 'Core Features', link: '/learn/core-features',
            items: [
              {
                text: "AI Models As NFTs",
                link: '/learn/core-features#ai-models-as-nfts'
              },
              {
                text: "NFT Licensing",
                link: '/learn/core-features#nft-licensing'
              },
              {
                text: "NFT Leasing",
                link: '/learn/core-features#nft-leasing'
              },
              {
                text: "Creators’ Toolbox",
                link: '/learn/core-features#creators-toolbox'
              },
              {
                text: "Launchpad for AI Models",
                link: '/learn/core-features#launchpad-for-ai-models'
              }
            ]

          },
          { text: 'How the platform works', link: '/learn/how-platform-works', },
          {
            text: 'Technology', link: '/learn/technology',
            items: [
              {
                text: "Leveraging Cosmos SDK",
                link: "/learn/technology#leveraging-cosmos-sdk"
              },
              {
                text: "Royalties Module",
                link: "/learn/technology#royalties-module"
              },
              {
                text: "Payment Splitter Contract",
                link: "/learn/technology#payment-splitter-contract"
              },
              {
                text: "Decentralized GPU Network Integration",
                link: "/learn/technology#decentralized-gpu-network-integration"
              },
              {
                text: "NFT Leasing and Licensing",
                link: "/learn/technology#nft-leasing-and-licensing"
              }
            ]

          },
          { text: 'Tokenomics', link: '/learn/tokenomics', },
        ]
      },
      {
        text: 'AI Builders',
        collapsed: true,
        items: [
          { text: 'Build An Agent', link: '/ai-builders/build-an-agent' },
          { text: 'Deploy An Agent', link: '/ai-builders/deploy-an-agent' },
          { text: 'Test And Validate', link: '/ai-builders/test-and-validate' },
          { text: 'Monitize', link: '/ai-builders/monetize-agent' }
        ]
      },
      {
        text: 'How - To Guide',
        collapsed: true,
        items: [
          { text: 'Run a node', link: '/how-to/run-a-node' },
          { text: 'How to access an Agent', link: '/how-to/access-an-agent' }
        ]
      },
      {
        text: 'Community',
        collapsed: true,
        items: [
          { text: 'Discord', link: 'https://discord.gg/3uHagdH8' },
          { text: 'Twitter', link: 'https://x.com/ArkaNetwork_' }
        ]
      }
    ],
  }
})
