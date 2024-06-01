"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "suflex sucursor-default suselect-none suitems-center surounded-sm supx-2 supy-1.5 sutext-sm suoutline-none focus:subg-accent data-[state=open]:subg-accent",
      inset && "supl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="suml-auto suh-4 suw-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "suz-50 sumin-w-[8rem] suoverflow-hidden surounded-md suborder subg-popover sup-1 sutext-popover-foreground sushadow-lg data-[state=open]:suanimate-in data-[state=closed]:suanimate-out data-[state=closed]:sufade-out-0 data-[state=open]:sufade-in-0 data-[state=closed]:suzoom-out-95 data-[state=open]:suzoom-in-95 data-[side=bottom]:suslide-in-from-top-2 data-[side=left]:suslide-in-from-right-2 data-[side=right]:suslide-in-from-left-2 data-[side=top]:suslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "suz-50 sumin-w-[8rem] suoverflow-hidden surounded-md suborder subg-popover sup-1 sutext-popover-foreground sushadow-md data-[state=open]:suanimate-in data-[state=closed]:suanimate-out data-[state=closed]:sufade-out-0 data-[state=open]:sufade-in-0 data-[state=closed]:suzoom-out-95 data-[state=open]:suzoom-in-95 data-[side=bottom]:suslide-in-from-top-2 data-[side=left]:suslide-in-from-right-2 data-[side=right]:suslide-in-from-left-2 data-[side=top]:suslide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "surelative suflex sucursor-default suselect-none suitems-center surounded-sm supx-2 supy-1.5 sutext-sm suoutline-none sutransition-colors focus:subg-accent focus:sutext-accent-foreground data-[disabled]:supointer-events-none data-[disabled]:suopacity-50",
      inset && "supl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "surelative suflex sucursor-default suselect-none suitems-center surounded-sm supy-1.5 supl-8 supr-2 sutext-sm suoutline-none sutransition-colors focus:subg-accent focus:sutext-accent-foreground data-[disabled]:supointer-events-none data-[disabled]:suopacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="suabsolute suleft-2 suflex suh-3.5 suw-3.5 suitems-center sujustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="suh-4 suw-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "surelative suflex sucursor-default suselect-none suitems-center surounded-sm supy-1.5 supl-8 supr-2 sutext-sm suoutline-none sutransition-colors focus:subg-accent focus:sutext-accent-foreground data-[disabled]:supointer-events-none data-[disabled]:suopacity-50",
      className
    )}
    {...props}
  >
    <span className="suabsolute suleft-2 suflex suh-3.5 suw-3.5 suitems-center sujustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="suh-2 suw-2 sufill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "supx-2 supy-1.5 sutext-sm sufont-semibold",
      inset && "supl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("su-mx-1 sumy-1 suh-px subg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("suml-auto sutext-xs sutracking-widest suopacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
