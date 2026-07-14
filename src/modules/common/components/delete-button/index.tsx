import { Loader2, Trash2 } from "lucide-react"
import { type ReactNode, useState } from "react"
import { Button } from "../button"
import { cn } from "@lib/util/cn"
import { useCartSidebar } from "@modules/layout/context/cart-sidebar-context"

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string
  children?: ReactNode
  className?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)
  const { removeLineItem, isRemoving } = useCartSidebar()

  const handleDelete = async () => {
    if (isRemoving(id)) return

    setIsDeleting(true)
    try {
      await removeLineItem(id)
    } finally {
      setIsDeleting(false)
      setIsConfirming(false)
    }
  }

  const removing = isDeleting || isRemoving(id)
  const label = children ?? "Remove"

  return (
    <div className={cn("flex items-center justify-between text-sm", className)}>
      {!isConfirming ? (
        <button
          type="button"
          className="flex cursor-pointer touch-manipulation items-center gap-1.5 rounded px-1 py-1 text-gray-500 transition hover:text-gray-900 disabled:cursor-not-allowed"
          onClick={() => setIsConfirming(true)}
          disabled={removing}
          aria-label={`Remove item`}
        >
          {removing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Trash2 className="h-4 w-4" />
          )}
          <span className="text-xs sm:text-sm">
            {removing ? "Removing product..." : label}
          </span>
        </button>
      ) : (
        <div className="flex items-center gap-2 text-sm" role="group" aria-label="Confirm item removal">
          <Button
            type="button"
            size="small"
            variant="secondary"
            onClick={() => setIsConfirming(false)}
            disabled={removing}
          >
            No
          </Button>
          <Button
            type="button"
            size="small"
            variant="primary"
            onClick={() => void handleDelete()}
            disabled={removing}
          >
            Yes
          </Button>
          {removing ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        </div>
      )}
    </div>
  )
}

export default DeleteButton
