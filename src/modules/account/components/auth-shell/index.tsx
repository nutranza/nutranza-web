"use client"

import React from "react"

type AuthShellProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

const AuthShell = ({ title, subtitle, children, footer: _footer }: AuthShellProps) => {
  return (
    <div className="flex min-h-[calc(100vh-2rem)] w-full items-start justify-center bg-brand-cream px-4 py-8 sm:items-center sm:py-12">
      <div className="w-full max-w-xl rounded-2xl border border-brand-cocoa/25 bg-white shadow-[0_20px_60px_rgba(58,33,20,0.10)]">
        <div className="flex flex-col gap-y-7 p-6 sm:p-10">
          <div className="space-y-3 text-center">
            <h1 className="font-heading text-2xl font-black leading-tight text-brand-cocoa-deep sm:text-3xl" data-testid="auth-shell-title">
              {title}
            </h1>
            {subtitle && (
              <p
                className="text-sm font-medium leading-relaxed text-brand-muted sm:text-base"
                data-testid="auth-shell-subtitle"
              >
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-6 w-full max-w-lg mx-auto">
            {children}
            {/* <div className="flex justify-center">{footer}</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthShell

