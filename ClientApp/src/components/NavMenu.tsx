import React from 'react';
import { Link } from 'react-router-dom';
import { getTheme, Stack } from '@fluentui/react';

const theme = getTheme();

const linkStyle = { 
  textDecoration: 'none', 
  color: theme.palette.themePrimary 
};

export default function NavMenu() {
  return (
    <Stack 
      horizontal
      horizontalAlign='space-between'
      verticalAlign='center'
      styles={{
        root: {
          height: 50,
          borderBottomColor: theme.palette.neutralLight,
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          paddingLeft: theme.spacing.m,
          paddingRight: theme.spacing.m,
        }
      }}
    >
      <Link to='/' style={linkStyle}>rwa_project</Link>

      <Stack horizontal verticalAlign='center' tokens={{ childrenGap: theme.spacing.m }}>
        <Link to='/' style={linkStyle}>Home</Link>

        <Link to='/category' style={linkStyle}>Category</Link>

        <Link to='/phone' style={linkStyle}>Phone</Link>

        <Link to='/email' style={linkStyle}>Email</Link>
      </Stack>
    </Stack>
  );
}
