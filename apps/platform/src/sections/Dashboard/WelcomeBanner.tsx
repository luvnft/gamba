import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import React from 'react';
import styled from 'styled-components'
import { useUserStore } from '../../hooks/useUserStore'

const Buttons = styled.div`
  // styles here
`

const Welcome = styled.div`
  // styles here
`

export function WelcomeBanner() {
  const wallet = useWallet()
  const walletModal = useWalletModal()
  const store = useUserStore()

  const copyInvite = () => {
    store.set({ userModal: true })
    if (!wallet.connected) {
      walletModal.setVisible(true)
    }
  }

  return (
    <Welcome>
      <div>
        <h1>Welcome to MetaVegas.live</h1>
        <p>
          A fair, simple, and decentralized social charity casino on Solana. Create a <a href='https://phantom.app/'><b>Phantom</b></a> wallet account. Then buy <a href='https://crypto.link.com?ref=lb&destination_currency=sol&destination_network=solana'><b>$SOL</b></a> or <a href='https://crypto.link.com?ref=lb&destination_currency=usdc&destination_network=solana'><b>$USDC</b></a> to start.
        </p>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://soleye.luvnft.com', '_blank')}>🧿 Verify $SOL</button>
        <button onClick={() => window.open('https://instagram.com/mvegaslive', '_blank')}>🪙 Instagram</button>
        <button onClick={() => window.open('https://twitter.com/mvegaslive', '_blank')}>✨ Twitter</button>
      </Buttons>
    </Welcome>
  )
}
