import { clx, Button as MedusaButton } from "@medusajs/ui"
type ButtonProps = React.ComponentProps<typeof MedusaButton>

const Button = ({
  children,
  className: classNameProp,
  ...props
}: ButtonProps): React.ReactNode => {
  const variant = props.variant ?? "primary"

  const className = clx(classNameProp, {
    "!shadow-borders-base !border-none":
      variant === "secondary" || props.disabled,
    "!shadow-figma-block bg-figma-primary text-white hover:bg-figma-primary/90":
      variant === "primary" && !props.disabled,
    "!shadow-none bg-transparent text-figma-text": variant === "transparent",
  })
  return (
    <MedusaButton
      className={`!rounded-lg text-sm font-semibold uppercase tracking-wide ${className}`}
      variant={variant}
      {...props}
    >
      {children}
    </MedusaButton>
  )
}

export default Button
