import React from 'react'

export interface SendTransactionContext {
  /** Priority fee in microlamports. If set, a setComputeUnitPrice is added instruction to the transactions */
  priorityFee?: number
  simulationUnits: number
  /** % of the consumed units in the simulation to be used as computeUnitLimit in the actual transaction */
  computeUnitLimitMargin: number
}

const defaultValue: SendTransactionContext = {
  simulationUnits: 1_400_000,
  computeUnitLimitMargin: 1.1,
}

export const SendTransactionContext = React.createContext<SendTransactionContext>(defaultValue)

export type SendTransactionProps = Partial<SendTransactionContext>

export function SendTransactionProvider({ children, ...props }: React.PropsWithChildren<SendTransactionProps>) {
  return (
    <SendTransactionContext.Provider value={{ ...defaultValue, ...props }}>
      {children}
    </SendTransactionContext.Provider>
  )
}
