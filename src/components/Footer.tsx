import React from 'react'
import styled from 'styled-components'
import { Box, IconButton } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import DescriptionIcon from '@material-ui/icons/Description'

interface LinkData {
  key: string
  href: string
  label: string
  icon: React.ReactNode
}

const links: LinkData[] = [
  {
    key: 'linked-in',
    href: 'https://www.linkedin.com/in/nikki-louis-quibin-539ba796/',
    label: 'Linked In',
    icon: <LinkedInIcon />,
  },
  {
    key: 'github',
    href: 'https://github.com/NQuibin',
    label: 'GitHub',
    icon: <GitHubIcon />,
  },
  {
    key: 'resume',
    href: '#',
    label: 'Resume',
    icon: <DescriptionIcon />,
  },
]

const SIconLink = styled(props => <IconButton target="_blank" {...props} />)``

const SName = styled.span`
  font-weight: bold;
`

const Footer: React.FC = () => {
  return (
    <Box>
      {links.map(link => (
        <SIconLink
          key={link.key}
          href={link.href}
          title={link.label}
          aria-label={link.label}
        >
          {link.icon}
        </SIconLink>
      ))}
      <p>
        © 2020 <SName>Nikki Quibin</SName>. All rights reserved.
      </p>
    </Box>
  )
}

export default Footer
