import { useState, useEffect } from 'react'

export function useLocalStorageState(initialState, key) {
      const [value, setValue] = useState(() => {
            const storageValue = localStorage.getItem(key)
            return storageValue ? JSON.parse(storageValue) : initialState
            
          });

          useEffect(()=>{
            localStorage.setItem(key,JSON.stringify(value))
          }, [value, key])

          return [value, setValue]
}
