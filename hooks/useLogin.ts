import { ApiResponse } from '@/types/common';
import React, { useState } from 'react'

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (data: LoginData) => {
    setLoading(true)
    setError(null)
    
    console.log("LoginData: "+data.email+", "+data.password)

    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: ApiResponse<LoginResponse> = await res.json()

      if (!res.ok || !result.success) {
        setError(result.message || 'Login failed')
        setLoading(false)
        return null
      }

      console.log(`Login Response: ${result}`)
      setLoading(false)
      return result.data?.token || null

    } catch (err: any) {
      setError(err.message || "Something went wrong")
      setLoading(false)
      return null
    }
  }
  return {
    loading,
    error,
    login
  }
}

export default useLogin
