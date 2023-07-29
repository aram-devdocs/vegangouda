import { createContext, useMemo, useState, useContext, ReactNode } from 'react'

export type ToastType = 'info' | 'success' | 'error'

type ToastContext = ReturnType<typeof useToastProvider>

export interface ToastOptions {
  message: string
  type: ToastType
  /** @default bottom-right */
  position?: 'bottom-right' | 'top-middle'
  action?: ReactNode
}

const defaultState = {
  toast: undefined,
  showToast: () => null,
  showErrorToast: () => null,
  showInfoToast: () => null,
  showSuccessToast: () => null,
  hideToast: () => null,
}

const ToastContext = createContext<ToastContext>(defaultState)

type ToastProviderProps = {
  children: ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const value = useToastProvider()

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

function useToastProvider() {
  const [toast, setToast] = useState<ToastOptions | undefined>(defaultState.toast)

  const functions = useMemo(() => {
    function showToast(options: ToastOptions) {
      setToast(options)
    }

    function hideToast() {
      setToast(undefined)
    }

    function showToastType(type: ToastType) {
      return (message: string, options?: Omit<ToastOptions, 'message' | 'type'>) =>
        showToast({ message, type, ...options })
    }

    return {
      showToast,
      hideToast,
      showErrorToast: showToastType('error'),
      showInfoToast: showToastType('info'),
      showSuccessToast: showToastType('success'),
    }
  }, [])

  return {
    toast,
    ...functions,
  }
}

export const useToast = () => useContext(ToastContext)
