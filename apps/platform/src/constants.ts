import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'

export const PLATFORM_CREATOR_ADDRESS = '2qjX4as5UsfHkjpwuoVgUCtySTHtE5SBZEbNs1MrP4rR'

/** Appears in ShareModal */
export const PLATFORM_SHARABLE_URL = 'https://gamba-platform.vercel.app/'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
]
