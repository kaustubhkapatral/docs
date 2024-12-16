import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arka Network - Docs",
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
    logo: {
      alt: "Arka Logo",
      light: "/arka-light.svg",
      dark: "/arka-dark.svg",
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      {
        icon: "discord",
        link: 'https://discord.gg/3uHagdH8'
      },
      {
        icon: "x",
        link: 'https://x.com/ArkaNetwork_'
      }
    ],
    sidebar: [
      {
        text: 'Learn',
        items: [
          {
            text: 'Overview',
            collapsed: false,
            items: [
              {
                text: "What is Arka Network?",
                link: '/learn/arka-network'
              },
              {
                text: "Key Features",
                link: '/learn/key-features'
              },
              { 
                text: 'Architecture', 
                link: '/learn/architecture', 
              },
              {
                text: "Why Arka Network?",
                link: '/learn/why-arka-network'
              },
            ]
          },
          // {
          //   text: 'Core Concepts', link: '/learn/core-features',
          //   collapsed: false,
          //   items: [
          
          //     {
          //       text: "Sovereign AI Agents",
          //       link: '/learn/core-features#creators-toolbox'
          //     },
          //     {
          //       text: "Proof of Inference",
          //       link: '/learn/core-features#launchpad-for-ai-models'
          //     },
          //     {
          //       text: "Mutli-agent consensus engine ",
          //       link: '/learn/core-features#launchpad-for-ai-models'
          //     },
          //     {
          //       text: "Agent to Agent communication ",
          //       link: '/learn/core-features#launchpad-for-ai-models'
          //     },
          //     {
          //       text: "Agent Governance ",
          //       link: '/learn/core-features#launchpad-for-ai-models'
          //     },
          //   ]

          // },
          // {
          //   text: 'Technology', 
          //   collapsed: false,
          //   link: '/learn/technology',
          //   items: [
          //     {
          //       text: "Leveraging Cosmos SDK",
          //       link: "/learn/technology#leveraging-cosmos-sdk"
          //     },
          //     {
          //       text: "DePIN Integration",
          //       link: "/learn/technology#decentralized-gpu-network-integration"
          //     },
          //     {
          //       text: "Model Storage using IPFS",
          //       link: "/learn/technology#decentralized-gpu-network-integration"
          //     },
          //   ]

          // },
        ]
      },
      {
        text: 'AI Builders',
        items: [
          { 
            text: 'Agent Playground',
            collapsed: false,
            items: [
              { text: 'Building An AI Agent', link: '/ai-builders/build-an-agent' },
            ]
          },
          { 
            text: 'Agent Orchestration',
            collapsed: false,
            items: [
              { text: 'Deploying An AI Agent', link: '/ai-builders/deploy-an-agent'},

            ]
          },
          { 
            text: 'Agent Monetization',
            collapsed: false,
            items: [
              { text: 'Monetizating AI Agents', link: '/ai-builders/monetize-agent' },
            ]
          },
          { 
            text: 'Agent Marketplace',
            collapsed: false,
            items: [
              { text: 'Accessing Agent Marketplace', link: '/ai-builders/marketplace'},
            ]
          },
          
        ]
      },
      {
        text: 'How - To Guide',
        collapsed: false,
        items: [
          { text: 'Run a node', link: '/how-to/run-a-node' },
          // { text: 'How to access an Agent', link: '/how-to/access-an-agent' }
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Discord', link: 'https://discord.gg/3uHagdH8' },
          { text: 'Twitter', link: 'https://x.com/ArkaNetwork_' }
        ]
      }
    ],
  }
})
