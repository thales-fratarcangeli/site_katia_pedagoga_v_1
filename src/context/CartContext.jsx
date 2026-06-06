import { createContext, useCallback, useContext, useRef, useState } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [count, setCount] = useState(0)
  const [toast, setToast] = useState(null) // { material }
  const timeoutRef = useRef(null)

  const addItem = useCallback((material) => {
    setCount((c) => c + 1)
    setToast({ material })
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setToast(null), 2800)
  }, [])

  const dismissToast = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setToast(null)
  }, [])

  return (
    <CartContext.Provider value={{ count, addItem, toast, dismissToast }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider>")
  return ctx
}
