"use client"

import type * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface CustomDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children: React.ReactNode
}

export function CustomDialog({ isOpen, onClose, title, description, children }: CustomDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-4 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-t-lg">
          <DialogTitle className="text-xl font-bold text-white text-center uppercase tracking-wide">
            {title}
          </DialogTitle>
          {description && <DialogDescription className="text-white/80 text-center">{description}</DialogDescription>}
        </DialogHeader>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Zatvori</span>
        </button>
        <div className="p-6">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
