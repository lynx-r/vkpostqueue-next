import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { Children, cloneElement, FC, ReactElement } from 'react'

type NavLinkProps = LinkProps & { activeClassName?: string }

const NavLink: FC<NavLinkProps> = ({
  children,
  as,
  href,
  activeClassName = 'active',
  ...rest
}) => {
  const { asPath } = useRouter()
  const child = Children.only(children) as ReactElement
  const childClassName = child.props.className || ''
  const className =
    asPath === href || asPath === as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName
  return (
    <Link href={href} {...rest}>
      {cloneElement(child, { className })}
    </Link>
  )
}

export default NavLink
