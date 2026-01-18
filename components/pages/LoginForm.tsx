"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import useLogin from "@/hooks/useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {loading, error, token, login} = useLogin()

  const handleSubmit = async () => {
    
    const success = await login({
        email: email.trim(),
        password: password.trim()
    })

    if(success){
        alert("Login successful! Token: "+token)
    }else{
        alert("Login Failed")
    }

  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && email && password) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-white mb-3 tracking-tight">Admin</h1>
          <p className="text-gray-400 text-sm">🔒 Secure Access Portal</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-12">
          {/* Email Field */}
          <div className="relative">
            <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
              focusedField === 'email' || email 
                ? '-top-6 text-xs text-white' 
                : 'top-2 left-8 text-base text-gray-500'
            }`}>
              Email
            </label>
            <div className="flex items-center gap-4">
              <Mail className={`w-5 h-5 transition-all duration-300 ${
                focusedField === 'email' ? 'text-white' : 'text-gray-600'
              }`} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent text-white text-lg outline-none pb-3 transition-all duration-300"
              />
            </div>
            <div className="relative h-px mt-1">
              <div className="absolute inset-0 bg-gray-800" />
              <div className={`absolute inset-0 bg-white transition-all duration-300 origin-left ${
                focusedField === 'email' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
              focusedField === 'password' || password 
                ? '-top-6 text-xs text-white' 
                : 'top-2 left-8 text-base text-gray-500'
            }`}>
              Password
            </label>
            <div className="flex items-center gap-4">
              <Lock className={`w-5 h-5 transition-all duration-300 ${
                focusedField === 'password' ? 'text-white' : 'text-gray-600'
              }`} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent text-white text-lg outline-none pb-3 transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-600 hover:text-white transition-colors duration-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <div className="relative h-px mt-1">
              <div className="absolute inset-0 bg-gray-800" />
              <div className={`absolute inset-0 bg-white transition-all duration-300 origin-left ${
                focusedField === 'password' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading || !email || !password}
            className="w-full bg-white text-black font-medium py-4 mt-8
                     hover:bg-gray-200 active:bg-gray-300
                     transition-all duration-200 disabled:opacity-30 
                     disabled:cursor-not-allowed disabled:hover:bg-white"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                <span>Authenticating</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <button className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
}